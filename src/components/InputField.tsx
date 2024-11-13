import { FunctionComponent } from "react";
import styles from "./InputField.module.css";

export type InputFieldType = {
  className?: string;
  helpIcon?: boolean;
  hintText?: boolean;
  label?: boolean;

  /** Variant props */
  destructive?: boolean;
  size?: "md";
  state?: "Placeholder";
  type?: "Leading text";
};

const InputField: FunctionComponent<InputFieldType> = ({
  className = "",
  destructive = false,
  size = "md",
  state = "Placeholder",
  type = "Icon leading",
  helpIcon = false,
  hintText = false,
  label = true,
}) => {
  return (
    <div
      className={[styles.inputField, className].join(" ")}
      data-destructive={destructive}
      data-size={size}
      data-state={state}
      data-type={type}
    >
      <div className={styles.inputWithLabel}>
        {label && <div className={styles.label}>Phone number</div>}
        <div className={styles.input}>
          <div className={styles.addOn}>
            <div className={styles.text}>+1</div>
          </div>
          <div className={styles.textInput}>
            <div className={styles.text1}>(123) 456 7890</div>
            {helpIcon && (
              <img className={styles.helpIcon} alt="" src="/help-icon.svg" />
            )}
          </div>
        </div>
      </div>
      {hintText && (
        <div className={styles.hintText}>This is a hint text to help user.</div>
      )}
    </div>
  );
};

export default InputField;
