import React from "react";
import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.main__container}>
      <div className={styles.arrow__container}>{`${"<"}`}</div>
      <div className={styles.normal__container}>
        <h2>tickete</h2>
        <div className={styles.help}>
          <span>help-icon</span>
          <p>Help</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
