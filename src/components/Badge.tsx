import { FunctionComponent } from "react";
import styles from "./Badge.module.css";

export type BadgeType = {
  className?: string;

  /** Variant props */
  color?: "Success";
  icon?: boolean;
  size?: "sm";
  type?: "Pill color";
};

const Badge: FunctionComponent<BadgeType> = ({
  className = "",
  color = "Brand",
  icon = false,
  size = "sm",
  type = "Pill color",
}) => {
  return (
    <div
      className={[styles.badge, className].join(" ")}
      data-color={color}
      data-icon={icon}
      data-size={size}
      data-type={type}
    >
      <div className={styles.text}>First order 🎉</div>
    </div>
  );
};

export default Badge;
