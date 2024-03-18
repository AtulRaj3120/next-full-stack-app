import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Atul Raj</div>
      <div className={styles.text}>
        Creative Thoughts Agency ©️ All Rights Reserved
      </div>
    </div>
  );
};

export default Footer;
