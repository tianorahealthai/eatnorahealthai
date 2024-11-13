import { FunctionComponent } from "react";
import styles from "./TransactionRowItem.module.css";

export type TransactionRowItemType = {
  className?: string;
};

const TransactionRowItem: FunctionComponent<TransactionRowItemType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.transactionRowItem, className].join(" ")}>
      <div className={styles.restaurantContainer}>
        <div className={styles.avatar}>
          <div className={styles.contrastBorder} />
        </div>
        <div className={styles.textAndSupportingText}>
          <div className={styles.sweetgreen}>Sweetgreen</div>
          <div className={styles.supportingText}>catalogapp.io</div>
        </div>
      </div>
      <div className={styles.statusContainer}>
        <div className={styles.badge}>
          <img className={styles.dotIcon} alt="" src="/-dot.svg" />
          <div className={styles.text}>In review</div>
        </div>
      </div>
      <div className={styles.priceContainer}>
        <div className={styles.cashbackValue}>+$0.10</div>
      </div>
    </div>
  );
};

export default TransactionRowItem;
