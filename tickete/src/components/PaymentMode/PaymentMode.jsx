import React from "react";
import styles from "./PaymentMode.module.css";
import TextField from "@mui/material/TextField";
import Coupon from "../Coupon/Coupon";

function PaymentMode() {
  return (
    <div className={styles.main__container}>
      <div className={styles.heading__container}>
        <h2>Select your mode of payment.</h2>
        <p>Payments with tickete are secure and encrypted.</p>
      </div>
      <div className={styles.card__select__container}>
        <span>card-icon</span>
        <h4>Credit & debit card</h4>
        <span>rounded-icon</span>
      </div>
      <div className={styles.textField__container}>
        <TextField
          className={styles.textfield}
          id="outlined-name-on-card"
          label="Name on card"
          placeholder="Name on card"
        />
        <TextField
          className={styles.textfield}
          id="outlined-card-number"
          label="Card No."
          placeholder="Card Number"
          type="number"
        />
        <TextField
          className={styles.textfield}
          id="outlined-expiry-date"
          label="Expiry Date"
          defaultValue={1}
          type="date"
        />
        <TextField
          className={styles.textfield}
          id="outlined-password"
          label="CVV/CVC"
          type="password"
        />
      </div>
      <div className={styles.total__container}>
        <h2>Total: price</h2>
        <p>You will pay in currency</p>
      </div>
      <div className={styles.action__container}>
        <div className={styles.travel__tips}>
          <span>rounded-icon</span>
          <p>Recieve travel tips, suggestions and offer in -city- by email.</p>
        </div>
        <div>
          With payment, you agree to the general terms and conditions of Tickete
          & the activity provider.
        </div>
        <div className={styles.confirmation__button}>
          Confirm and pay secure-icon
        </div>
        <div className={styles.cancellation__warning}>
          <h4>Free cancellation </h4>
          <p>Tickets can be cancelled by 13th Decemeber 2022</p>
        </div>
      </div>
      <Coupon />
    </div>
  );
}

export default PaymentMode;
