import React from "react";
import styles from "./EventInformation.module.css";

function EventInformation() {
  return (
    <div className={styles.main__container}>
      <div className={styles.image__container}></div>
      <div className={styles.title__container}>
        <h3 className={styles.title}>
          Amsterdam opeg boat canal cruise - Live Ggide - From Anne Frgnk House
        </h3>
      </div>
      <div className={styles.info__container}>
        <div className={styles.details}>
          <span>logo</span>
          <p>{`${"<variant-name>"}`}</p>
        </div>
        <div className={styles.details}>
          <span>logo</span>
          <p>{`${"<variant-name>"}`}</p>
        </div>
        <div className={styles.details}>
          <span>logo</span>
          <p>{`${"<variant-name>"}`}</p>
        </div>
      </div>
    </div>
  );
}

export default EventInformation;
