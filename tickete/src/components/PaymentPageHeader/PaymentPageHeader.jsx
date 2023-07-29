import React from "react";
import styles from "./PaymentPageHeader.module.css";

function PaymentPageHeader() {
  return (
    <div className={styles.main__container}>
      <div className={styles.heading__container}>
        <h1 className={styles.heading__container}>Confirm and pay</h1>
      </div>
    </div>
  );
}

export default PaymentPageHeader;
