import { FunctionComponent } from "react";
import styles from "./MegaInputFieldBase.module.css";

export type MegaInputFieldBaseType = {
  className?: string;

  /** Variant props */
  size?: "sm";
  state?: "Placeholder";
};

const MegaInputFieldBase: FunctionComponent<MegaInputFieldBaseType> = ({
  className = "",
  size = "md",
  state = "Placeholder",
}) => {
  return (
    <div
      className={[styles.megaInputFieldBase, className].join(" ")}
      data-size={size}
      data-state={state}
    >
      <div className={styles.text}>0</div>
    </div>
  );
};

export default MegaInputFieldBase;
