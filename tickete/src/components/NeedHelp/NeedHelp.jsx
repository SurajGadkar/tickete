import React from "react";
import styles from "./NeedHelp.module.css";

function NeedHelp() {
  return (
    <div className={styles.main__container}>
      <div className={styles.help__container}>
        <div>
          <h3>Need Help?</h3>
          <p>We're here to help you, talk to us.</p>
        </div>
        <div>
          <span>Chat-Icon</span>
        </div>
      </div>
      <div className={styles.chat__button}>Chat with us</div>
    </div>
  );
}

export default NeedHelp;
