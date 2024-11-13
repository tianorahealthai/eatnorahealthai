import { FunctionComponent } from "react";
import styles from "./WelcomeBonusBanner.module.css";

export type WelcomeBonusBannerType = {
  className?: string;
};

const WelcomeBonusBanner: FunctionComponent<WelcomeBonusBannerType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.welcomeBonusBanner, className].join(" ")}>
      <div className={styles.welcomeBonusGeneralContaine}>
        <div className={styles.welcomeBonusMainInfoContai}>
          <div className={styles.welcomeBonusIndication}>FIRST ORDER 🎉</div>
          <div className={styles.welcomeBonusInfoContainer}>
            <div
              className={styles.offerTitle}
            >{`Get Venmo’d $15 +10% cashback `}</div>
            <div className={styles.offerDescription}>
              Connect Venmo and get $15 dollars + 10% cashback.
            </div>
          </div>
        </div>
        <div className={styles.buttonsbutton}>
          <img
            className={styles.placeholderIcon}
            alt=""
            src="/placeholder7.svg"
          />
          <div className={styles.text}>Enter Venmo</div>
          <img
            className={styles.arrowRightIcon}
            alt=""
            src="/arrowright1.svg"
          />
        </div>
      </div>
      <img
        className={styles.money3dImageIcon}
        alt=""
        src="/money3dimage@2x.png"
      />
    </div>
  );
};

export default WelcomeBonusBanner;
