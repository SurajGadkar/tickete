import React from "react";
import styles from "./PaymentMode.module.css";
import TextField from "@mui/material/TextField";
import Coupon from "../Coupon/Coupon";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import SecurityIcon from "@mui/icons-material/Security";
function PaymentMode() {
  return (
    <div className={styles.main__container}>
      <div className={styles.heading__container}>
        <h3>Select your mode of payment.</h3>
        <p>Payments with tickete are secure and encrypted.</p>
      </div>
      <div className={styles.card__select__container}>
        <CreditCardIcon />
        <h4>Credit & debit card</h4>
        <span>
          <RadioButtonCheckedIcon />
        </span>
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
        />
        <TextField
          className={styles.textfield}
          id="outlined-password"
          label="CVV/CVC"
          type="password"
        />
      </div>
      <div className={styles.total__container}>
        <h3>Total: price</h3>
        <p>You will pay in currency</p>
      </div>
      <div className={styles.action__container}>
        <div className={styles.travel__tips}>
          <RadioButtonCheckedIcon />
          <p>Recieve travel tips, suggestions and offer in -city- by email.</p>
        </div>
        <div>
          <p>
            With payment, you agree to the general terms and conditions of
            Tickete & the activity provider.
          </p>
        </div>

        <div className={styles.confirmation__button}>
          Confirm and pay{" "}
          <span className={styles.lock__icon}>
            <SecurityIcon />
          </span>
        </div>
      </div>
      <Coupon />
    </div>
  );
}

export default PaymentMode;
