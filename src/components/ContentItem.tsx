import { FunctionComponent } from "react";
import styles from "./ContentItem.module.css";

export type ContentItemType = {
  className?: string;
  spacingGuide?: boolean;
  paddingTop?: boolean;
  paddingBottom?: boolean;
  endpoint2?: string;
  endpoint3?: string;
  divider?: string;
  showMeasureSpacingGuide?: boolean;
  endpoint6?: string;
  endpoint7?: string;
  spacingGuide1?: boolean;
  measureLines?: boolean;

  /** Variant props */
  breakpoint?: "Mobile";
  size?: "sm";
  type?: "Divider";
};

const ContentItem: FunctionComponent<ContentItemType> = ({
  className = "",
  breakpoint = "Desktop",
  size = "sm",
  type = "Heading",
  spacingGuide = true,
  paddingTop = false,
  paddingBottom = false,
  endpoint2,
  endpoint3,
  divider,
  showMeasureSpacingGuide,
  endpoint6,
  endpoint7,
  spacingGuide1,
  measureLines,
}) => {
  return (
    <div
      className={[styles.contentItem, className].join(" ")}
      data-breakpoint={breakpoint}
      data-size={size}
      data-type={type}
    >
      {paddingTop && (
        <div className={styles.paddingTop}>
          {spacingGuide && (
            <div className={styles.measureSpacingGuide}>
              <div className={styles.number}>24px</div>
              <div className={styles.lines}>
                <div className={styles.measureLineBase}>
                  <img
                    className={styles.endpointIcon}
                    alt=""
                    src="/endpoint.svg"
                  />
                  <img className={styles.lineIcon} alt="" src="/line.svg" />
                  <img
                    className={styles.endpointIcon1}
                    alt=""
                    src="/endpoint.svg"
                  />
                </div>
                <div className={styles.measureLineBase1}>
                  <img
                    className={styles.endpointIcon2}
                    alt=""
                    src={endpoint2}
                  />
                  <img className={styles.lineIcon1} alt="" />
                  <img
                    className={styles.endpointIcon3}
                    alt=""
                    src={endpoint3}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      )}
      <img className={styles.dividerIcon} alt="" src={divider} />
      {paddingBottom && (
        <div className={styles.paddingBottom}>
          {showMeasureSpacingGuide && (
            <div className={styles.measureSpacingGuide1}>
              <div className={styles.number1}>24px</div>
              <div className={styles.lines1}>
                <div className={styles.measureLineBase2}>
                  <img
                    className={styles.endpointIcon4}
                    alt=""
                    src="/endpoint.svg"
                  />
                  <img className={styles.lineIcon2} alt="" src="/line.svg" />
                  <img
                    className={styles.endpointIcon5}
                    alt=""
                    src="/endpoint.svg"
                  />
                </div>
                <div className={styles.measureLineBase3}>
                  <img
                    className={styles.endpointIcon6}
                    alt=""
                    src={endpoint6}
                  />
                  <img className={styles.lineIcon3} alt="" />
                  <img
                    className={styles.endpointIcon7}
                    alt=""
                    src={endpoint7}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ContentItem;
