import { FunctionComponent, useMemo, type CSSProperties } from "react";
import Button from "./Button";
import styles from "./CashbackStepContainer.module.css";

export type CashbackStepContainerType = {
  className?: string;
  cashbackStepLabel?: string;
  cashbackStepTitle?: string;
  cashbackStepDescription?: string;
  hierarchy?: "Primary" | "Secondary gray";
  showButtonsButton1?: boolean;
  iconLeading?: boolean;
  iconTrailing?: boolean;

  /** Style props */
  cashbackStepContainerGap?: CSSProperties["gap"];
};

const CashbackStepContainer: FunctionComponent<CashbackStepContainerType> = ({
  className = "",
  cashbackStepContainerGap,
  cashbackStepLabel,
  cashbackStepTitle,
  cashbackStepDescription,
  hierarchy,
  showButtonsButton1,
  iconLeading,
  iconTrailing,
}) => {
  const cashbackStepContainerStyle: CSSProperties = useMemo(() => {
    return {
      gap: cashbackStepContainerGap,
    };
  }, [cashbackStepContainerGap]);

  return (
    <div
      className={[styles.cashbackStepContainer, className].join(" ")}
      style={cashbackStepContainerStyle}
    >
      <img
        className={styles.cashbackStepMediaIcon}
        alt=""
        src="/cashbackstepmedia@2x.png"
      />
      <div className={styles.cashbackStepDetails}>
        <div className={styles.casbbackStepTextContainer}>
          <div className={styles.cashbackStepLabel}>{cashbackStepLabel}</div>
          <div className={styles.cashbackStepTitle}>{cashbackStepTitle}</div>
          <div className={styles.cashbackStepDescription}>
            {cashbackStepDescription}
          </div>
        </div>
        <Button
          hierarchy={hierarchy}
          icon="Default"
          size="sm"
          state="Default"
          iconTrailing={iconTrailing}
          iconLeading={iconLeading}
          buttonsButtonFlex="unset"
          buttonsButtonWidth="unset"
          buttonsButtonAlignSelf="unset"
          buttonsButtonHeight="41px"
          placeholderIconOverflow="hidden"
          placeholderIconTransform="unset"
          text="Enter Venmo"
          showButtonsButton={showButtonsButton1}
        />
      </div>
    </div>
  );
};

export default CashbackStepContainer;
