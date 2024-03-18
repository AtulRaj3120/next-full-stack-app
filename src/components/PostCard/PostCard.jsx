import React from "react";
import styles from "./postcard.module.css";
import Image from "next/image";
import Link from "next/link";

const PostCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image
            src="https://images.pexels.com/photos/12801958/pexels-photo-12801958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            fill
            className={styles.img}
          />
        </div>
        <span className={styles.date}>01.01.2024</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>Title</h1>
        <p className={styles.desc}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit quos voluptas consequatur, ipsa aliquam similique repellendus quis ut nemo quia!</p>
        <Link className={styles.link} href="/blog/post">Read More</Link>
      </div>
    </div>
  );
};

export default PostCard;
