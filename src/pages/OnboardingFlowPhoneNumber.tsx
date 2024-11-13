import { FunctionComponent } from "react";
import ProgressBar from "../components/ProgressBar";
import InputField from "../components/InputField";
import ActionsContainer from "../components/ActionsContainer";
import OnboardingHeader from "../components/OnboardingHeader";
import styles from "./OnboardingFlowPhoneNumber.module.css";

const OnboardingFlowPhoneNumberEmpty: FunctionComponent = () => {
  return (
    <div className={styles.onboardingFlowPhoneNumberE}>
      <div className={styles.onboardingMainContainer}>
        <ProgressBar label={false} progress="20%" />
        <div className={styles.questionMainContainer}>
          <div className={styles.questionContainer}>
            <div className={styles.question}>Can we have your number?</div>
            <div className={styles.subHeading}>
              We’ll never spam you, we promise.
            </div>
          </div>
          <div className={styles.optionsContainer}>
            <InputField
              destructive={false}
              size="md"
              state="Placeholder"
              type="Leading text"
              helpIcon={false}
              hintText={false}
              label
            />
          </div>
        </div>
      </div>
      <ActionsContainer
        hasBackButton={false}
        showButtonsButton={false}
        showButtonsButton1
        iconLeading={false}
        iconTrailing={false}
      />
      <OnboardingHeader
        isStartingPoint={false}
        onboardingHeaderLeft="0px"
        onboardingHeaderRight="0px"
        showActions
        onboardingHeaderTop="56px"
        clipPathGroup="/clip-path-group.svg"
        vector="/vector.svg"
      />
      <div className={styles.homeindicator}>
        <div className={styles.homeIndicator} />
      </div>
      <div className={styles.statusBar}>
        <div className={styles.statusBar1}>
          <div className={styles.time}>
            <div className={styles.time1}>9:41</div>
          </div>
          <div className={styles.levels}>
            <div className={styles.battery}>
              <div className={styles.border} />
              <img className={styles.capIcon} alt="" src="/cap.svg" />
              <div className={styles.capacity} />
            </div>
            <img className={styles.wifiIcon} alt="" src="/wifi.svg" />
            <img
              className={styles.cellularConnectionIcon}
              alt=""
              src="/cellular-connection.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnboardingFlowPhoneNumberEmpty;
