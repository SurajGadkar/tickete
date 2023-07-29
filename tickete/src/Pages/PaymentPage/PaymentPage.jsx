import React from "react";
import styles from "./PaymentPage.module.css";
import componentExport from "../../components/componentExport";

const {
  PaymentPageHeader,
  EventInformation,
  UserDetails,
  TicketsOverview,
  AdditionalInformation,
  PaymentMode,
  Coupon,
  FAQ,
  NeedHelp,
  TicketePromise,
} = componentExport;

function PaymentPage() {
  return (
    <div class={styles.main}>
      {/* Payment Page Header */}
      <PaymentPageHeader />

      {/* Event Information */}
      <EventInformation />

      {/* Tickets Overview  */}
      <TicketsOverview />

      {/* User Details */}
      <UserDetails />

      {/* Additional Details */}
      <AdditionalInformation />

      {/* Payment Mode */}
      <PaymentMode />

      {/* Coupon code*/}
      <Coupon />

      {/* FAQ*/}
      <FAQ />

      {/* NeedHelp*/}
      <NeedHelp />

      {/* Tickete Promise*/}
      <TicketePromise />
    </div>
  );
}

export default PaymentPage;
