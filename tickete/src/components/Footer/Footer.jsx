import React from "react";
import styles from "./Footer.module.css";
function Footer() {
  return (
    <div className={styles.main__container}>
      <div className={styles.heading__container}>
        <h1>tickete</h1>
      </div>
      <div className={styles.socialMedia}>
        <span>insta</span>
        <span>meta</span>
        <span>twitter</span>
      </div>
      <div className={styles.links}>
        <span>(c) Tickete</span>
        <span>(c) Privacy</span>
        <span>(c) Terms</span>
        <span>(c) Conditions</span>
      </div>
    </div>
  );
}

export default Footer;
