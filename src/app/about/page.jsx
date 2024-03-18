import Image from "next/image";
import styles from "./about.module.css";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subtitle}>About Agency</h2>
        <h1 className={styles.title}>
          We create digital ideas that are bigger, better, bolder and braver.
        </h1>
        <p className={styles.desc}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit, cupiditate tenetur. Illum doloremque laudantium aperiam doloribus mollitia, molestiae totam ipsam eos temporibus soluta suscipit veritatis neque culpa autem incidunt a eaque necessitatibus blanditiis minima deserunt facere ea beatae repellendus praesentium?
        </p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Years of experience</p>
          </div>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Years of experience</p>
          </div>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Years of experience</p>
          </div>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <Image src="/about.png" alt="About Image" fill className={styles.img}/>
      </div>
    </div>
  );
};

export default About;
