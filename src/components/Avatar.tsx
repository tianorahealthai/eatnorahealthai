import { FunctionComponent } from "react";
import styles from "./Avatar.module.css";

export type AvatarType = {
  className?: string;
  contrastBorder?: boolean;

  /** Variant props */
  placeholder?: boolean;
  size?: "2xl";
  state?: "Default";
  statusIcon?: boolean;
  text?: boolean;
};

const Avatar: FunctionComponent<AvatarType> = ({
  className = "",
  placeholder = false,
  size = "xl",
  state = "Default",
  statusIcon = false,
  text = true,
  contrastBorder = true,
}) => {
  return (
    <div
      className={[styles.avatar, className].join(" ")}
      data-placeholder={placeholder}
      data-size={size}
      data-state={state}
      data-statusIcon={statusIcon}
      data-text={text}
    >
      {contrastBorder && <div className={styles.contrastBorder} />}
      <div className={styles.text}>TS</div>
    </div>
  );
};

export default Avatar;
