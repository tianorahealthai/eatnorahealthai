import { FunctionComponent } from "react";
import styles from "./MealCardContainerSet.module.css";

export type MealCardContainerSetType = {
  className?: string;
};

const MealCardContainerSet: FunctionComponent<MealCardContainerSetType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.mealCardContainer, className].join(" ")}>
      <div className={styles.ishomepageyes}>
        <div className={styles.mealMainInfoContainer}>
          <img
            className={styles.mealImageIcon}
            alt=""
            src="/mealimage2@2x.png"
          />
          <div className={styles.mealDetailsContainer}>
            <div className={styles.mealInfoContainer}>
              <div className={styles.restaurantName}>CHLOE</div>
              <div className={styles.mealName}>
                <div className={styles.mealName1}>Kale Caesar Salad</div>
              </div>
            </div>
            <div className={styles.restaurantLogoContainer}>
              <div className={styles.avatar}>
                <div className={styles.contrastBorder} />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.benefitsContainer}>
          <div className={styles.benefitItemContainer}>
            <img className={styles.checkIcon} alt="" />
            <div className={styles.benefitItemValue}>Focus</div>
          </div>
          <div className={styles.benefitItemContainer}>
            <img className={styles.checkIcon} alt="" />
            <div className={styles.benefitItemValue}>Sustained Energy</div>
          </div>
          <div className={styles.benefitItemContainer}>
            <img className={styles.checkIcon} alt="" />
            <div className={styles.benefitItemValue}>Nutrient Dense</div>
          </div>
        </div>
        <div className={styles.contentItem}>
          <div className={styles.paddingTop}>
            <div className={styles.measureSpacingGuide}>
              <div className={styles.number}>24px</div>
              <div className={styles.lines}>
                <div className={styles.measureLineBase}>
                  <img className={styles.endpointIcon} alt="" />
                  <img className={styles.lineIcon} alt="" />
                  <img className={styles.endpointIcon} alt="" />
                </div>
                <div className={styles.measureLineBase1}>
                  <img className={styles.endpointIcon2} alt="" />
                  <img className={styles.lineIcon} alt="" />
                  <img className={styles.endpointIcon2} alt="" />
                </div>
              </div>
            </div>
          </div>
          <img className={styles.dividerIcon} alt="" />
          <div className={styles.paddingTop}>
            <div className={styles.measureSpacingGuide}>
              <div className={styles.number}>24px</div>
              <div className={styles.lines}>
                <div className={styles.measureLineBase}>
                  <img className={styles.endpointIcon} alt="" />
                  <img className={styles.lineIcon} alt="" />
                  <img className={styles.endpointIcon} alt="" />
                </div>
                <div className={styles.measureLineBase1}>
                  <img className={styles.endpointIcon2} alt="" />
                  <img className={styles.lineIcon} alt="" />
                  <img className={styles.endpointIcon2} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.mealMetricsContainer}>
          <div className={styles.mealMetricItem}>
            <div className={styles.mealMetricLabel}>HEALTH SCORE</div>
            <div className={styles.mealMetricValue}>4.8</div>
          </div>
          <div className={styles.mealMetricItem}>
            <div className={styles.mealMetricLabel}>PRICE</div>
            <div className={styles.mealMetricValue}>$12.95</div>
          </div>
          <div className={styles.mealMetricItem}>
            <div className={styles.mealMetricLabel}>CASHBACK</div>
            <div className={styles.mealMetricValue}>10%</div>
          </div>
          <div className={styles.mealMetricItem}>
            <div className={styles.mealMetricLabel}>DISTANCE</div>
            <div className={styles.mealMetricValue}>0.5mil</div>
          </div>
        </div>
      </div>
      <div className={styles.ishomepageno}>
        <div className={styles.mealMainInfoContainer1}>
          <img
            className={styles.mealImageIcon}
            alt=""
            src="/mealimage2@2x.png"
          />
          <div className={styles.mealDetailsContainer}>
            <div className={styles.mealInfoContainer}>
              <div className={styles.restaurantName1}>CHLOE</div>
              <div className={styles.mealName2}>Kale Caesar Salad</div>
            </div>
            <div className={styles.restaurantLogoContainer}>
              <div className={styles.avatar}>
                <div className={styles.contrastBorder} />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.benefitsContainer1}>
          <div className={styles.benefitItemContainer}>
            <img className={styles.checkIcon} alt="" />
            <div className={styles.benefitItemValue}>Focus</div>
          </div>
          <div className={styles.benefitItemContainer}>
            <img className={styles.checkIcon} alt="" />
            <div className={styles.benefitItemValue}>Sustained Energy</div>
          </div>
          <div className={styles.benefitItemContainer}>
            <img className={styles.checkIcon} alt="" />
            <div className={styles.benefitItemValue}>Nutrient Dense</div>
          </div>
        </div>
        <div className={styles.contentItem}>
          <div className={styles.paddingTop}>
            <div className={styles.measureSpacingGuide}>
              <div className={styles.number}>24px</div>
              <div className={styles.lines}>
                <div className={styles.measureLineBase}>
                  <img className={styles.endpointIcon} alt="" />
                  <img className={styles.lineIcon} alt="" />
                  <img className={styles.endpointIcon} alt="" />
                </div>
                <div className={styles.measureLineBase1}>
                  <img className={styles.endpointIcon2} alt="" />
                  <img className={styles.lineIcon} alt="" />
                  <img className={styles.endpointIcon2} alt="" />
                </div>
              </div>
            </div>
          </div>
          <img className={styles.dividerIcon} alt="" />
          <div className={styles.paddingTop}>
            <div className={styles.measureSpacingGuide}>
              <div className={styles.number}>24px</div>
              <div className={styles.lines}>
                <div className={styles.measureLineBase}>
                  <img className={styles.endpointIcon} alt="" />
                  <img className={styles.lineIcon} alt="" />
                  <img className={styles.endpointIcon} alt="" />
                </div>
                <div className={styles.measureLineBase1}>
                  <img className={styles.endpointIcon2} alt="" />
                  <img className={styles.lineIcon} alt="" />
                  <img className={styles.endpointIcon2} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.mealMetricsContainer1}>
          <div className={styles.mealMetricItem}>
            <div className={styles.mealMetricLabel}>HEALTH SCORE</div>
            <div className={styles.mealMetricValue}>4.8</div>
          </div>
          <div className={styles.mealMetricItem}>
            <div className={styles.mealMetricLabel}>PRICE</div>
            <div className={styles.mealMetricValue}>$12.95</div>
          </div>
          <div className={styles.mealMetricItem}>
            <div className={styles.mealMetricLabel}>CASHBACK</div>
            <div className={styles.mealMetricValue}>10%</div>
          </div>
          <div className={styles.mealMetricItem}>
            <div className={styles.mealMetricLabel}>DISTANCE</div>
            <div className={styles.mealMetricValue}>0.5mil</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MealCardContainerSet;
