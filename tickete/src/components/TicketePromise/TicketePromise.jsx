import React from "react";
import styles from "./TicketePromise.module.css";
import DoneAllTwoToneIcon from "@mui/icons-material/DoneAllTwoTone";
import QuestionAnswerTwoToneIcon from "@mui/icons-material/QuestionAnswerTwoTone";
import CalendarTodayTwoToneIcon from "@mui/icons-material/CalendarTodayTwoTone";
import SecurityTwoToneIcon from "@mui/icons-material/SecurityTwoTone";

function TicketePromise() {
  return (
    <div className={styles.main__container}>
      <div className={styles.heading__container}>
        <h3>The Tickete Promise</h3>
      </div>

      <div className={styles.secondary__container}>
        <div className={styles.promise}>
          <DoneAllTwoToneIcon />
          <div className={styles.styling}>
            <h4>Official tickets</h4>
            <p>Authorized reseller to top attraction</p>
          </div>
        </div>
        <div className={styles.promise}>
          <QuestionAnswerTwoToneIcon />
          <div className={styles.styling}>
            <h4>24/7 dedicated support</h4>
            <p>We're here to help, talk to expert.</p>
          </div>
        </div>
        <div className={styles.promise}>
          <CalendarTodayTwoToneIcon />
          <div className={styles.styling}>
            <h4>Flexible bookings</h4>
            <p>Book stress-free with easy cancellation</p>
          </div>
        </div>
        <div className={styles.promise}>
          <SecurityTwoToneIcon />
          <div className={styles.styling}>
            <h4>100% secure payments</h4>
            <p>Internationally recognized encrypted payment process</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TicketePromise;
