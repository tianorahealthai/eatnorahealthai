import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./ProgressBar.module.css";

export type ProgressBarType = {
  className?: string;

  /** Variant props */
  label?: boolean;
  progress?: "20%" | "40%";

  /** Style props */
  progressBarAlignSelf?: CSSProperties["alignSelf"];
  progressBarWidth?: CSSProperties["width"];
};

const ProgressBar: FunctionComponent<ProgressBarType> = ({
  className = "",
  label = "Right",
  progress = "0%",
  progressBarAlignSelf,
  progressBarWidth,
}) => {
  const progressBarStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: progressBarAlignSelf,
      width: progressBarWidth,
    };
  }, [progressBarAlignSelf, progressBarWidth]);

  return (
    <div
      className={[styles.root, className].join(" ")}
      data-label={label}
      data-progress={progress}
      style={progressBarStyle}
    >
      <div className={styles.progressBar}>
        <div className={styles.background} />
        <div className={styles.progress} />
      </div>
    </div>
  );
};

export default ProgressBar;
