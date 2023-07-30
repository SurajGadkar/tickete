import React from "react";
import styles from "./Coupon.module.css";
import AspectRatioTwoToneIcon from "@mui/icons-material/AspectRatioTwoTone";
import RadioButtonCheckedTwoToneIcon from "@mui/icons-material/RadioButtonCheckedTwoTone";

function Coupon() {
  return (
    <div className={styles.main_container}>
      <AspectRatioTwoToneIcon />
      <h4>Klarna</h4>
      <RadioButtonCheckedTwoToneIcon />
    </div>
  );
}

export default Coupon;
