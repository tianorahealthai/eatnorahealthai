import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./NavItem.module.css";

export type NavItemType = {
  className?: string;
  icon?: string;
  label?: string;
  label1?: string;
  label2?: string;

  /** Variant props */
  isSelected?: boolean;
  viewport?: "Mobile";

  /** Style props */
  iconOverflow?: CSSProperties["overflow"];
  baseBadgeBackgroundColor?: CSSProperties["backgroundColor"];
  navItemFlex?: CSSProperties["flex"];
};

const NavItem: FunctionComponent<NavItemType> = ({
  className = "",
  isSelected = true,
  viewport = "Mobile",
  icon,
  iconOverflow,
  label,
  baseBadgeBackgroundColor,
  label1,
  label2,
  navItemFlex,
}) => {
  const iconStyle: CSSProperties = useMemo(() => {
    return {
      overflow: iconOverflow,
    };
  }, [iconOverflow]);

  const baseBadgeStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: baseBadgeBackgroundColor,
    };
  }, [baseBadgeBackgroundColor]);

  const navItemStyle: CSSProperties = useMemo(() => {
    return {
      flex: navItemFlex,
    };
  }, [navItemFlex]);

  return (
    <div
      className={[styles.root, className].join(" ")}
      data-isSelected={isSelected}
      data-viewport={viewport}
      style={navItemStyle}
    >
      <div className={styles.mobile}>
        <img className={styles.icon} alt="" src={icon} style={iconStyle} />
        <div className={styles.label}>{label2}</div>
        <div className={styles.indicator}>
          <div className={styles.basebadge} style={baseBadgeStyle}>
            <div className={styles.label1}>2</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavItem;
