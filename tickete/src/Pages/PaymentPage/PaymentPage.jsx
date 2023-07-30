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
  FAQ,
  NeedHelp,
  TicketePromise,
} = componentExport;

function PaymentPage() {
  return (
    <div className={styles.main}>
      <div className={styles.desktopView}>
        <div className={styles.top__container}>
          <div className={styles.left__container}>
            <div className={styles.left__contents}>
              {/* Payment Page Header */}
              <PaymentPageHeader />

              {/* User Details */}
              <UserDetails />

              {/* Additional Details */}
              <AdditionalInformation />

              {/* Payment Mode */}
              <PaymentMode />
            </div>
          </div>

          <div className={styles.right__container}>
            <div className={styles.right__contents}>
              {/* Event Information */}
              <EventInformation />

              {/* Tickets Overview  */}
              <TicketsOverview />
            </div>
          </div>
        </div>
        <div className={styles.bottom__container}>
          <div className={styles.bottomLeft__container}>
            <div className={styles.bottomleft__contents}>
              {/* FAQ*/}
              <FAQ />
            </div>
          </div>
          <div className={styles.bottomRight__container}>
            <div className={styles.bottomright__contents}>
              {/* NeedHelp*/}
              <NeedHelp />
            </div>
          </div>
        </div>

        {/* Tickete Promise*/}
        <TicketePromise />
      </div>
      <div className={styles.mobileView}>
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

        {/* FAQ*/}
        <FAQ />

        {/* NeedHelp*/}
        <NeedHelp />

        {/* Tickete Promise*/}
        <TicketePromise />
      </div>
    </div>
  );
}

export default PaymentPage;
