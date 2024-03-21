import { auth, signIn } from "@/app/lib/auth";
import LoginForm from "@/components/LoginForm/LoginForm";
import styles from "./login.module.css";
import { handleGitHubLogin } from "@/app/lib/action";

const Login = () => {

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <form action={handleGitHubLogin}>
          <button className={styles.btn}>Login with GitHub</button>
        </form>
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
