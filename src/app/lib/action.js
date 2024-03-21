"use server";
import { signIn, signOut } from "./auth";
import { connectToDB } from "./connectToDB";
import { User } from "./models";
import bcrypt from "bcryptjs";

export const handleLogout = async () => {
  await signOut();
};

export const handleRegister = async (previousState, formData) => {
  const { username, email, img, password, passwordRepeat } =
    Object.fromEntries(formData);

  if (password !== passwordRepeat) return { error: "Passwords do not match" };

  try {
    connectToDB();
    const user = await User.findOne({ username });
    if (user) {
      return { error: "Username already exists" };
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      img,
    });
    await newUser.save();
    console.log("saved to db");

    return { success: true };
  } catch (error) {
    return { error: "Something went wrong" };
  }
};

export const handleCredentialLogin = async (previousState, formData) => {
  const { username, password } = Object.fromEntries(formData);

  try {
    await signIn("credentials", { username, password });
  } catch (error) {
    if (error.message.includes("CredentialsSignin")) {
      return { error: "Wrong username or password" };
    }
    throw error;
  }
};

export const handleGitHubLogin = async () => {
  "use server";
  await signIn("github");
};
