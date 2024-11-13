import { FunctionComponent, useMemo, type CSSProperties } from "react";
import ContentItem from "./ContentItem";
import styles from "./MealCardContainer.module.css";

export type MealCardContainerType = {
  className?: string;
  mealImage?: string;
  mealName?: string;
  restaurantName?: string;
  distance?: string;
  healthScore?: string;
  mealPrice?: string;
  mealCashback?: string;
  benefitItemValue1?: string;
  benefitItemValue2?: string;
  benefitItemValue3?: string;
  paddingTop?: boolean;
  paddingBottom?: boolean;
  showMeasureSpacingGuide?: boolean;
  spacingGuide?: boolean;
  spacingGuide1?: boolean;
  measureLines?: boolean;

  /** Variant props */
  isHomepage?: boolean;

  /** Style props */
  mealImageBackground?: CSSProperties["background"];
  avatarBackground?: CSSProperties["background"];
};

const MealCardContainer: FunctionComponent<MealCardContainerType> = ({
  className = "",
  isHomepage = false,
  mealImage,
  mealName,
  mealImageBackground,
  restaurantName,
  distance,
  healthScore,
  mealPrice,
  mealCashback,
  benefitItemValue1,
  benefitItemValue2,
  benefitItemValue3,
  avatarBackground,
  paddingTop,
  paddingBottom,
  showMeasureSpacingGuide,
  spacingGuide,
  spacingGuide1,
  measureLines,
}) => {
  const mealImageIconStyle: CSSProperties = useMemo(() => {
    return {
      background: mealImageBackground,
    };
  }, [mealImageBackground]);

  const avatarStyle: CSSProperties = useMemo(() => {
    return {
      background: avatarBackground,
    };
  }, [avatarBackground]);

  return (
    <div
      className={[styles.mealCardContainer, className].join(" ")}
      data-isHomepage={isHomepage}
    >
      <div className={styles.mealMainInfoContainer}>
        <img
          className={styles.mealImageIcon}
          alt=""
          src={mealImage}
          style={mealImageIconStyle}
        />
        <div className={styles.mealDetailsContainer}>
          <div className={styles.mealInfoContainer}>
            <div className={styles.restaurantName}>{restaurantName}</div>
            <div className={styles.mealName1}>
              <div className={styles.mealName}>{mealName}</div>
            </div>
          </div>
          <div className={styles.restaurantLogoContainer}>
            <div className={styles.avatar} style={avatarStyle}>
              <div className={styles.contrastBorder} />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.benefitsContainer}>
        <div className={styles.benefitItemContainer}>
          <img className={styles.checkIcon} alt="" src="/checkicon.svg" />
          <div className={styles.benefitItemValue}>{benefitItemValue1}</div>
        </div>
        <div className={styles.benefitItemContainer1}>
          <img className={styles.checkIcon1} alt="" src="/checkicon.svg" />
          <div className={styles.benefitItemValue1}>{benefitItemValue2}</div>
        </div>
        <div className={styles.benefitItemContainer2}>
          <img className={styles.checkIcon2} alt="" src="/checkicon.svg" />
          <div className={styles.benefitItemValue2}>{benefitItemValue3}</div>
        </div>
      </div>
      <ContentItem
        breakpoint="Mobile"
        size="sm"
        type="Divider"
        spacingGuide={spacingGuide}
        paddingTop={paddingTop}
        paddingBottom={paddingBottom}
        endpoint2="/endpoint1.svg"
        endpoint3="/endpoint1.svg"
        divider="/divider.svg"
        showMeasureSpacingGuide={showMeasureSpacingGuide}
        endpoint6="/endpoint1.svg"
        endpoint7="/endpoint1.svg"
        spacingGuide1={spacingGuide1}
        measureLines={measureLines}
      />
      <div className={styles.mealMetricsContainer}>
        <div className={styles.mealMetricItem}>
          <div className={styles.mealMetricLabel}>HEALTH SCORE</div>
          <div className={styles.mealMetricValue}>{healthScore}</div>
        </div>
        <div className={styles.mealMetricItem1}>
          <div className={styles.mealMetricLabel1}>PRICE</div>
          <div className={styles.mealMetricValue1}>{mealPrice}</div>
        </div>
        <div className={styles.mealMetricItem2}>
          <div className={styles.mealMetricLabel2}>CASHBACK</div>
          <div className={styles.mealMetricValue2}>{mealCashback}</div>
        </div>
        <div className={styles.mealMetricItem3}>
          <div className={styles.mealMetricLabel3}>DISTANCE</div>
          <div className={styles.mealMetricValue3}>{distance}</div>
        </div>
      </div>
    </div>
  );
};

export default MealCardContainer;
