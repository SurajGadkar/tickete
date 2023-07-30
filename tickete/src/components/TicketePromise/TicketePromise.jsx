import React from "react";
import styles from "./TicketePromise.module.css";

function TicketePromise() {
  return (
    <div className={styles.main__container}>
      <div className={styles.heading__container}>
        <h1>The Tickete Promise</h1>
      </div>

      <div className={styles.secondary__container}>
        <div className={styles.promise}>
          <span>icon</span>
          <div className={styles.styling}>
            <h3>Official tickets</h3>
            <p>Authorized reseller to top attraction</p>
          </div>
        </div>
        <div className={styles.promise}>
          <span>icon</span>
          <div className={styles.styling}>
            <h3>24/7 dedicated support</h3>
            <p>We're here to help, talk to expert.</p>
          </div>
        </div>
        <div className={styles.promise}>
          <span>icon</span>
          <div className={styles.styling}>
            <h3>Flexible bookings</h3>
            <p>Book stress-free with easy cancellation</p>
          </div>
        </div>
        <div className={styles.promise}>
          <span>icon</span>
          <div className={styles.styling}>
            <h3>100% secure payments</h3>
            <p>Internationally recognized encrypted payment process</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TicketePromise;
