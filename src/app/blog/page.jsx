import PostCard from "@/components/PostCard/PostCard";
import styles from "./blog.module.css";
import next from "next";
import { getPosts } from "../lib/data";


// FETCH DATA WITH AN API
// const getData = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
//     next: { revalidate: 3600 },
//   });

//   if (!res.ok) {
//     throw new Error("Something went wrong");
//   }

//   return res.json();
// };

const Blog = async () => {
  // const posts = await getData();

  const posts = await getPosts()

  return (
    <div className={styles.container}>
      {posts.map((post) => {
        return (
          <div className={styles.posts} key={post.id}>
            <PostCard post={post} />
          </div>
        );
      })}
    </div>
  );
};

export default Blog;
