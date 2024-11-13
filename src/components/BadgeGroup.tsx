import { FunctionComponent } from "react";
import Badge from "./Badge";
import styles from "./BadgeGroup.module.css";

export type BadgeGroupType = {
  className?: string;
  icon?: boolean;

  /** Variant props */
  badge?: "Leading";
  color?: "Success";
  size?: "md";
  state?: "Default";
  theme?: "Light";
};

const BadgeGroup: FunctionComponent<BadgeGroupType> = ({
  className = "",
  badge = "Leading",
  color = "Brand",
  size = "md",
  state = "Default",
  theme = "Light",
  icon = false,
}) => {
  return (
    <div
      className={[styles.badgeGroup, className].join(" ")}
      data-badge={badge}
      data-color={color}
      data-size={size}
      data-state={state}
      data-theme={theme}
    >
      <Badge color="Success" icon={false} size="sm" type="Pill color" />
      <div className={styles.content}>
        <div className={styles.message}>{`Get Venmo’d $15 +10% cashback `}</div>
        {icon && (
          <img className={styles.arrowRightIcon} alt="" src="/arrowright.svg" />
        )}
      </div>
    </div>
  );
};

export default BadgeGroup;
