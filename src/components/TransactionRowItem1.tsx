import { FunctionComponent } from "react";
import styles from "./TransactionRowItem1.module.css";

export type TransactionRowItem1Type = {
  className?: string;
};

const TransactionRowItem1: FunctionComponent<TransactionRowItem1Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.transactionRowItem, className].join(" ")}>
      <div className={styles.restaurantContainer}>
        <div className={styles.noraLogo}>
          <img className={styles.logoIcon} alt="" src="/logo@2x.png" />
        </div>
        <div className={styles.textAndSupportingText}>
          <div className={styles.noraHealthAi}>Nora Health AI</div>
          <div className={styles.supportingText}>hourglass.app</div>
        </div>
      </div>
      <div className={styles.statusContainer}>
        <div className={styles.badge}>
          <img className={styles.dotIcon} alt="" src="/-dot1.svg" />
          <div className={styles.text}>Paid</div>
        </div>
      </div>
      <div className={styles.priceContainer}>
        <div className={styles.cashbackValue}>+$15.00</div>
      </div>
    </div>
  );
};

export default TransactionRowItem1;
