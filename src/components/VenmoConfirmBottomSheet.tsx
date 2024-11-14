import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./VenmoConfirmBottomSheet.module.css";

export type VenmoConfirmBottomSheetType = {
  className?: string;
  userName?: string;

  /** Style props */
  avatarBackground?: CSSProperties["background"];
};

const VenmoConfirmBottomSheet: FunctionComponent<
  VenmoConfirmBottomSheetType
> = ({ className = "", userName, avatarBackground }) => {
  const avatarIconStyle: CSSProperties = useMemo(() => {
    return {
      background: avatarBackground,
    };
  }, [avatarBackground]);

  return (
    <div className={[styles.venmoConfirmBottomSheet, className].join(" ")}>
      <div className={styles.bottomSheetHeader}>
        <div className={styles.noraLogo}>
          <div className={styles.logo}>
            <img className={styles.clipPathGroup} alt="" />
            <img className={styles.vectorIcon} alt="" src="/vector7.svg" />
          </div>
        </div>
        <div className={styles.buttonsbutton}>
          <img className={styles.xCloseIcon} alt="" />
        </div>
      </div>
      <div className={styles.uploadProfileContainer}>
        <div className={styles.sectionTitle}>Is this you?</div>
        <div className={styles.profileInfoContainer}>
          <img
            className={styles.avatarIcon}
            alt=""
            src="/avatar.svg"
            style={avatarIconStyle}
          />
          <div className={styles.userName}>{userName}</div>
        </div>
      </div>
      <div className={styles.actions}>
        <div className={styles.button}>
          <div className={styles.buttonLabel}>Yes, it’s me</div>
        </div>
        <div className={styles.button1}>
          <div className={styles.buttonLabel}>No, it’s not me</div>
        </div>
      </div>
    </div>
  );
};

export default VenmoConfirmBottomSheet;
