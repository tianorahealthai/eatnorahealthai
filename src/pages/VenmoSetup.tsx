import { FunctionComponent } from "react";
import Button from "../components/Button";
import ActionsContainer from "../components/ActionsContainer";
import styles from "./VenmoSetup.module.css";

const VenmoSetup: FunctionComponent = () => {
  return (
    <div className={styles.venmoSetup}>
      <div className={styles.mainContainer}>
        <img className={styles.venmoIcon} alt="" src="/venmoicon@2x.png" />
        <div className={styles.venmoSettingContainer}>
          <div className={styles.venmoSettingContentContaine}>
            <div className={styles.question}>What’s your Venmo username?</div>
            <div className={styles.subHeading}>
              We use this to send you cash every time you eat healthy food.
            </div>
          </div>
          <div className={styles.optionsContainer}>
            <div className={styles.inputField}>
              <div className={styles.inputWithLabel}>
                <div className={styles.label}>Venmo username</div>
                <div className={styles.input}>
                  <div className={styles.content}>
                    <div className={styles.text}>venmo-username</div>
                  </div>
                  <img
                    className={styles.helpIcon}
                    alt=""
                    src="/help-icon.svg"
                  />
                </div>
              </div>
              <div className={styles.hintText}>
                This is a hint text to help user.
              </div>
            </div>
          </div>
          <Button
            hierarchy="Secondary gray"
            icon="Default"
            size="sm"
            state="Default"
            iconTrailing={false}
            iconLeading={false}
            buttonsButtonFlex="unset"
            buttonsButtonWidth="unset"
            buttonsButtonAlignSelf="unset"
            buttonsButtonHeight="unset"
            placeholderIconOverflow="hidden"
            placeholderIconTransform="unset"
            text="Get help"
            showButtonsButton
          />
        </div>
      </div>
      <ActionsContainer
        hasBackButton={false}
        actionsContainerBottom="0px"
        showButtonsButton={false}
        showButtonsButton1
        iconLeading={false}
        iconTrailing={false}
      />
      <div className={styles.topBar}>
        <div className={styles.header}>
          <div className={styles.headerContainer}>
            <div className={styles.iconContainer}>
              <div className={styles.buttonsbutton}>
                <img className={styles.bookmarkIcon} alt="" />
              </div>
              <div className={styles.icon}>
                <img className={styles.bookmarkIcon} alt="" />
              </div>
            </div>
            <div className={styles.headerText}>Venmo account</div>
            <div className={styles.noraLogoWrapper}>
              <div className={styles.noraLogo}>
                <div className={styles.logo}>
                  <img className={styles.clipPathGroup} alt="" />
                  <img className={styles.vectorIcon} alt="" />
                </div>
              </div>
            </div>
            <div className={styles.notificationsIcon}>
              <div className={styles.buttonsbutton}>
                <img className={styles.bookmarkIcon} alt="" />
              </div>
              <div className={styles.icon}>
                <img className={styles.bookmarkIcon} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VenmoSetup;
