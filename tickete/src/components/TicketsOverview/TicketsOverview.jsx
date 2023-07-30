import React from "react";
import styles from "./TicketsOverview.module.css";

function TicketsOverview() {
  return (
    <div className={styles.main__container}>
      <div className={styles.title__container}>
        <h3>Tickets Overview</h3>
      </div>
      <div className={styles.charges__container}>
        <div className={styles.checkout__c}>
          <div className={styles.checkout}>
            <p>paxtype(x)</p>
            <p>price</p>
          </div>
          <div className={styles.checkout}>
            <p>paxtype(x)</p>
            <p>price</p>
          </div>
          <div className={styles.checkout}>
            <p>fee(x)</p>
            <p>price</p>
          </div>
          <div className={styles.checkout2}>
            <p>discount applied</p>
            <p>price</p>
          </div>
        </div>
        <div className={styles.checkout}>
          <h5>COUPON CODE applied</h5>
          <h5>REMOVE</h5>
        </div>
      </div>
      <div className={styles.total__container}>
        <div className={styles.total}>
          <h4>Total</h4>
          <p>You will pay in curreny</p>
        </div>
        <div>
          <p>price</p>
        </div>
      </div>
      <div className={styles.warning__container}>
        <h4>Free cancellation</h4>
        <p>Tickets can be cancelled by 13th Decemeber, 2022.</p>
      </div>
    </div>
  );
}

export default TicketsOverview;
