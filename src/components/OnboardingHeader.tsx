import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./OnboardingHeader.module.css";

export type OnboardingHeaderType = {
  className?: string;
  showActions?: boolean;
  clipPathGroup?: string;
  vector?: string;

  /** Variant props */
  isStartingPoint?: boolean;

  /** Style props */
  onboardingHeaderLeft?: CSSProperties["left"];
  onboardingHeaderRight?: CSSProperties["right"];
  onboardingHeaderTop?: CSSProperties["top"];
};

const OnboardingHeader: FunctionComponent<OnboardingHeaderType> = ({
  className = "",
  isStartingPoint = false,
  onboardingHeaderLeft,
  onboardingHeaderRight,
  showActions,
  onboardingHeaderTop,
  clipPathGroup,
  vector,
}) => {
  const onboardingHeaderStyle: CSSProperties = useMemo(() => {
    return {
      left: onboardingHeaderLeft,
      right: onboardingHeaderRight,
      top: onboardingHeaderTop,
    };
  }, [onboardingHeaderLeft, onboardingHeaderRight, onboardingHeaderTop]);

  return (
    <div
      className={[styles.root, className].join(" ")}
      data-isStartingPoint={isStartingPoint}
      style={onboardingHeaderStyle}
    >
      <div className={styles.noraLogo}>
        <div className={styles.logo}>
          <img
            className={styles.clipPathGroup}
            alt=""
            src="/clip-path-group.svg"
          />
          <img className={styles.vectorIcon} alt="" src="/vector.svg" />
        </div>
      </div>
      {showActions && (
        <div className={styles.actions}>
          <div className={styles.buttonsbutton}>
            <img className={styles.xCloseIcon} alt="" src="/xclose1.svg" />
          </div>
        </div>
      )}
    </div>
  );
};

export default OnboardingHeader;
