import React from "react";
import styles from "./AdditionalInformation.module.css";
import TextField from "@mui/material/TextField";

function AdditionalInformation() {
  return (
    <div className={styles.main__container}>
      <div className={styles.heading__container}>
        <h3>Additional Information</h3>
        <p>We need a few more details to complete your reservation.</p>
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
          id="outlined-dropdown"
          select
          label="dropdown"
          defaultValue="select"
          helperText="Please select from dropdown"
        />
      </div>
    </div>
  );
}

export default AdditionalInformation;
