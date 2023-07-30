import React from "react";
import styles from "./EventInformation.module.css";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import EventIcon from "@mui/icons-material/Event";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
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
          <ConfirmationNumberIcon />
          <p>{`${"<variant-name>"}`}</p>
        </div>
        <div className={styles.details}>
          <EventIcon />
          <p>{`${"<variant-name>"}`}</p>
        </div>
        <div className={styles.details}>
          <WatchLaterIcon />
          <p>{`${"<variant-name>"}`}</p>
        </div>
      </div>
    </div>
  );
}

export default EventInformation;
