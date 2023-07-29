import React from "react";
import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.main__container}>
      <div className={styles.arrow__container}>{`${"<"}`}</div>
    </div>
  );
}

export default Header;
