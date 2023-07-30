import React from "react";
import styles from "./Footer.module.css";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import PhotoCameraTwoToneIcon from "@mui/icons-material/PhotoCameraTwoTone";
import CloseTwoToneIcon from "@mui/icons-material/CloseTwoTone";
import CircleTwoToneIcon from "@mui/icons-material/CircleTwoTone";

function Footer() {
  return (
    <div className={styles.main__container}>
      <div className={styles.desktop__margin}>
        <div className={styles.heading__container}>
          <h1>tickete</h1>
        </div>
        <div className={styles.socialMedia}>
          <span className={styles.icons}>
            <FacebookTwoToneIcon />
          </span>
          <span className={styles.icons}>
            <PhotoCameraTwoToneIcon />
          </span>
          <span className={styles.icons}>
            <CloseTwoToneIcon />
          </span>
        </div>
        <div className={styles.links}>
          <span className={styles.icons}>(c)Tickete</span>
          <CircleTwoToneIcon />
          <span className={styles.icons}>Privacy</span>
          <CircleTwoToneIcon />
          <span className={styles.icons}>Terms</span>
          <CircleTwoToneIcon />
          <span className={styles.icons}>Conditions</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
