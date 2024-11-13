import { FunctionComponent, useCallback } from "react";
import MegaInputFieldBase from "./MegaInputFieldBase";
import styles from "./VerificationCodeInputField.module.css";

export type VerificationCodeInputFieldType = {
  className?: string;
  hintText?: boolean;
  label?: boolean;

  /** Variant props */
  digits?: 4;
  size?: "sm";
};

const VerificationCodeInputField: FunctionComponent<
  VerificationCodeInputFieldType
> = ({
  className = "",
  digits = 4,
  size = "md",
  hintText = false,
  label = false,
}) => {
  const onVerificationCodeInputFieldClick = useCallback(() => {
    // Please sync "onboarding-flow-otp-filled" to the project
  }, []);

  return (
    <div
      className={[styles.verificationCodeInputField, className].join(" ")}
      onClick={onVerificationCodeInputFieldClick}
      data-digits={digits}
      data-size={size}
    >
      <div className={styles.inputWithLabel}>
        {label && <div className={styles.label}>Secure code</div>}
        <div className={styles.input}>
          <MegaInputFieldBase size="sm" state="Placeholder" />
          <MegaInputFieldBase size="sm" state="Placeholder" />
          <MegaInputFieldBase size="sm" state="Placeholder" />
          <MegaInputFieldBase size="sm" state="Placeholder" />
        </div>
      </div>
      {hintText && (
        <div className={styles.hintText}>This is a hint text to help user.</div>
      )}
    </div>
  );
};

export default VerificationCodeInputField;
