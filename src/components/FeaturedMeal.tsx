import { FunctionComponent } from "react";
import BadgeGroup from "./BadgeGroup";
import Button from "./Button";
import styles from "./FeaturedMeal.module.css";

export type FeaturedMealType = {
  className?: string;
  restaurantName?: string;
  mealItemName?: string;
  benefitItemValue1?: string;
  benefitItemValue3?: string;
  benefitItemValue2?: string;

  /** Variant props */
  isFirstOrder?: boolean;
  isHomepage?: boolean;
};

const FeaturedMeal: FunctionComponent<FeaturedMealType> = ({
  className = "",
  isFirstOrder = true,
  isHomepage = true,
  restaurantName,
  mealItemName,
  benefitItemValue1,
  benefitItemValue3,
  benefitItemValue2,
}) => {
  return (
    <div
      className={[styles.featuredMeal, className].join(" ")}
      data-isFirstOrder={isFirstOrder}
      data-isHomepage={isHomepage}
    >
      <div className={styles.mealDetails}>
        <div className={styles.mealInfoContainer}>
          <div className={styles.mealMainInfo}>
            <div className={styles.soldByName}>{restaurantName}</div>
            <div className={styles.mealItemName}>{mealItemName}</div>
          </div>
          <div className={styles.benefitsContainer}>
            <div className={styles.benefitItemContainer}>
              <img className={styles.checkIcon} alt="" src="/checkicon.svg" />
              <div className={styles.benefitItemValue}>{benefitItemValue1}</div>
            </div>
            <div className={styles.benefitItemContainer1}>
              <img className={styles.checkIcon1} alt="" src="/checkicon.svg" />
              <div className={styles.benefitItemValue1}>
                {benefitItemValue2}
              </div>
            </div>
            <div className={styles.benefitItemContainer2}>
              <img className={styles.checkIcon2} alt="" src="/checkicon.svg" />
              <div className={styles.benefitItemValue2}>
                {benefitItemValue3}
              </div>
            </div>
          </div>
        </div>
        <div className={styles.mealItemNumericInfoContain}>
          <div className={styles.healthScoreContainer}>
            <div className={styles.healthScoreLabelContainer}>
              <div className={styles.healthScoreLabelWrapper}>
                <div className={styles.healthScoreLabel}>HEALTH SCORE</div>
              </div>
            </div>
            <div className={styles.healthScoreValueContainer}>
              <div className={styles.healthScoreValueWrapper}>
                <div className={styles.healthScoreValueBox}>
                  <div className={styles.healthScoreValueContent}>
                    <div className={styles.healthScoreValue}>4.8</div>
                  </div>
                </div>
              </div>
              <img className={styles.starIcon} alt="" src="/star-icon.svg" />
            </div>
          </div>
          <div className={styles.priceContainer}>
            <div className={styles.priceLabelContainer}>
              <div className={styles.priceLabelWrapper}>
                <div className={styles.priceLabel}>PRICE</div>
              </div>
            </div>
            <div className={styles.priceValueContainer}>
              <div className={styles.priceValueWrapper}>
                <div className={styles.priceValueBox}>
                  <div className={styles.priceValueContent}>
                    <div className={styles.priceValueText}>$12.95</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.cashbackContainer}>
            <div className={styles.cashbackLabelContainer}>
              <div className={styles.cashbackLabelWrapper}>
                <div className={styles.cashbackLabel}>CASHBACK</div>
              </div>
            </div>
            <div className={styles.priceValueContainer1}>
              <div className={styles.priceValueBox3}>
                <div className={styles.priceValueBox2}>
                  <div className={styles.priceValueBox1}>
                    <div className={styles.priceValueText1}>10%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.mealItemBadgeContainer}>
          <BadgeGroup
            badge="Leading"
            color="Success"
            size="md"
            state="Default"
            theme="Light"
            icon={false}
          />
        </div>
        <div className={styles.actionsContainer}>
          <div className={styles.actionsWrapper}>
            <Button
              hierarchy="Primary"
              icon="Default"
              size="sm"
              state="Default"
              iconTrailing={false}
              iconLeading
              buttonsButtonFlex="unset"
              buttonsButtonWidth="unset"
              buttonsButtonAlignSelf="stretch"
              buttonsButtonHeight="unset"
              placeholder="/google-maps.svg"
              placeholderIconOverflow="unset"
              placeholderIconTransform="unset"
              text="0.5 miles - Get directions"
              placeholder1="/placeholder.svg"
              showButtonsButton
            />
          </div>
          <Button
            hierarchy="Tertiary gray"
            icon="Default"
            size="sm"
            state="Default"
            iconTrailing={false}
            iconLeading
            buttonsButtonFlex="unset"
            buttonsButtonWidth="398px"
            buttonsButtonAlignSelf="unset"
            buttonsButtonHeight="unset"
            placeholder="/repeat04.svg"
            placeholderIconOverflow="hidden"
            placeholderIconTransform="unset"
            text="New suggestion of the day"
            placeholder1="/placeholder7.svg"
            showButtonsButton={false}
          />
          <Button
            hierarchy="Secondary gray"
            icon="Default"
            size="sm"
            state="Default"
            iconTrailing={false}
            iconLeading
            buttonsButtonFlex="unset"
            buttonsButtonWidth="374px"
            buttonsButtonAlignSelf="unset"
            buttonsButtonHeight="unset"
            placeholder="/upload01.svg"
            placeholderIconOverflow="hidden"
            placeholderIconTransform="unset"
            text="Upload receipt"
            placeholder1="/placeholder1.svg"
            showButtonsButton={false}
          />
        </div>
      </div>
    </div>
  );
};

export default FeaturedMeal;
