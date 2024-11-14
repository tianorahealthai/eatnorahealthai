import { FunctionComponent } from "react";
import Button from "../components/Button";
import Tabbar from "../components/Tabbar";
import styles from "./CashbackPageEmptyState.module.css";

const CashbackPageEmptyState: FunctionComponent = () => {
  return (
    <div className={styles.cashbackPageEmptyState}>
      <div className={styles.mainContainer}>
        <div className={styles.emptyState}>
          <img
            className={styles.backgroundPatternDecorative}
            alt=""
            src="/background-pattern-decorative.svg"
          />
          <div className={styles.emptyStateMainContainer}>
            <div className={styles.emptyStateContentContainer}>
              <img className={styles.checkIcon} alt="" src="/check-icon.svg" />
              <div className={styles.emptyStateContents}>
                <div className={styles.mainText}>
                  <p className={styles.wellDoneTia}>We’ll done Tia!</p>
                  <p className={styles.wellDoneTia}>
                    Now it’s time to get Venmo’d
                  </p>
                </div>
                <div className={styles.supportingText}>
                  Upload your first receipt and get $15 cash as welcome bonus
                </div>
              </div>
            </div>
            <div className={styles.emptyStateActions}>
              <Button
                hierarchy="Primary"
                icon="Default"
                size="lg"
                state="Default"
                iconTrailing={false}
                iconLeading
                buttonsButtonFlex="unset"
                buttonsButtonWidth="unset"
                buttonsButtonAlignSelf="unset"
                buttonsButtonHeight="unset"
                placeholder="/upload012.svg"
                placeholderIconOverflow="hidden"
                placeholderIconTransform="unset"
                text="Upload receipt"
                showButtonsButton
              />
            </div>
          </div>
        </div>
      </div>
      <img
        className={styles.successAnimationIcon}
        alt=""
        src="/successanimation@2x.png"
      />
      
      <div className={styles.appHeader}>
        <div className={styles.noraLogo}>
          <div className={styles.logo}>
            <img
              className={styles.clipPathGroup}
              alt=""
              src="/clip-path-group3.svg"
            />
            <img className={styles.vectorIcon} alt="" src="/vector.svg" />
          </div>
        </div>
        <div className={styles.actions}>
          <div className={styles.buttonsbutton}>
            <img
              className={styles.helpCircleIcon}
              alt=""
              src="/helpcircle1.svg"
            />
          </div>
          <div className={styles.buttonsbutton}>
            <img
              className={styles.helpCircleIcon}
              alt=""
              src="/helpcircle1.svg"
            />
          </div>
          <div className={styles.buttonsbutton2}>
            <img
              className={styles.helpCircleIcon}
              alt=""
              src="/infocircle.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CashbackPageEmptyState;
