import React from "react";
import styles from "./UserDetails.module.css";
import TextField from "@mui/material/TextField";

function UserDetails() {
  return (
    <div className={styles.main__container}>
      <div className={styles.heading__container}>
        <h1>Enter your details</h1>
        <p>
          We'll be sending your tickets to the details below. <br></br>
          Booking for a friend? Add their details.
        </p>
      </div>
      <div className={styles.textFields__container}>
        <TextField
          className={styles.text__fields}
          id="outlined-fullName"
          label="FullName"
          placeholder="Full Name"
        />
        <TextField
          className={styles.text__fields}
          id="outlined-email"
          label="Email"
          placeholder="Email"
        />
        <TextField
          className={styles.text__fields}
          id="outlined-email"
          label="Confirm Email"
          placeholder="Re-Type your email"
        />
        <TextField
          className={styles.text__fields}
          id="outlined-phone"
          label="Phone Number"
          placeholder="Number"
          type="number"
        />
      </div>
    </div>
  );
}

export default UserDetails;
