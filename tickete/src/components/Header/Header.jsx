import React from "react";
import styles from "./Header.module.css";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import HelpIcon from "@mui/icons-material/Help";
function Header() {
  return (
    <div className={styles.main__container}>
      <div className={styles.arrow__container}>
        <span className={styles.arrow}>
          <ChevronLeftIcon />
        </span>
      </div>
      <div className={styles.normal__container}>
        <h3>tickete</h3>
        <div className={styles.help}>
          <HelpIcon />
          <p>Help</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
