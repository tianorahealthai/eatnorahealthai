import { FunctionComponent } from "react";
import Button from "../components/Button";
import styles from "./MealItemsDetails.module.css";

const MealItemsDetails: FunctionComponent = () => {
  return (
    <div className={styles.mealItemsDetails}>
      <div className={styles.mainContent}>
        <div className={styles.featuredMeal}>
          <div className={styles.mealDetails}>
            <div className={styles.mealInfoContainer}>
              <div className={styles.mealMainInfo}>
                <div className={styles.soldByName}>CHLOE</div>
                <div className={styles.mealItemName}>Kale Caesar Salad</div>
              </div>
              <div className={styles.benefitsContainer}>
                <div className={styles.benefitItemContainer}>
                  <img className={styles.checkIcon} alt="" />
                  <div className={styles.benefitItemValue}>Focus</div>
                </div>
                <div className={styles.benefitItemContainer}>
                  <img className={styles.checkIcon} alt="" />
                  <div className={styles.benefitItemValue}>
                    Sustained Energy
                  </div>
                </div>
                <div className={styles.benefitItemContainer}>
                  <img className={styles.checkIcon} alt="" />
                  <div className={styles.benefitItemValue}>Nutrient Dense</div>
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
                    <div className={styles.healthScoreLabelContainer}>
                      <div className={styles.healthScoreLabelWrapper}>
                        <div className={styles.healthScoreValue}>4.8</div>
                      </div>
                    </div>
                  </div>
                  <img className={styles.checkIcon} alt="" />
                </div>
              </div>
              <div className={styles.healthScoreContainer}>
                <div className={styles.healthScoreLabelContainer}>
                  <div className={styles.healthScoreLabelWrapper}>
                    <div className={styles.healthScoreLabel}>PRICE</div>
                  </div>
                </div>
                <div className={styles.priceValueContainer}>
                  <div className={styles.healthScoreLabelWrapper}>
                    <div className={styles.healthScoreLabelContainer}>
                      <div className={styles.healthScoreLabelWrapper}>
                        <div className={styles.priceValueText}>$12.95</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.healthScoreContainer}>
                <div className={styles.healthScoreLabelContainer}>
                  <div className={styles.healthScoreLabelWrapper}>
                    <div className={styles.healthScoreLabel}>CASHBACK</div>
                  </div>
                </div>
                <div className={styles.priceValueContainer1}>
                  <div className={styles.healthScoreLabelWrapper}>
                    <div className={styles.healthScoreLabelContainer}>
                      <div className={styles.healthScoreLabelWrapper}>
                        <div className={styles.healthScoreValue}>10%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.mealItemBadgeContainer}>
              <div className={styles.badgeGroup}>
                <div className={styles.badge}>
                  <div className={styles.text}>First order 🎉</div>
                </div>
                <div className={styles.content}>
                  <div
                    className={styles.text}
                  >{`Get Venmo’d $15 +10% cashback `}</div>
                  <img className={styles.arrowRightIcon} alt="" />
                </div>
              </div>
            </div>
            <div className={styles.actionsContainer}>
              <div className={styles.mealMainInfo}>
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
                  placeholderIconOverflow="unset"
                  placeholderIconTransform="unset"
                  text="0.5 miles - Get directions"
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
                placeholderIconOverflow="hidden"
                placeholderIconTransform="unset"
                text="New suggestion of the day"
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
                placeholderIconOverflow="hidden"
                placeholderIconTransform="unset"
                text="Upload receipt"
                showButtonsButton={false}
              />
            </div>
          </div>
        </div>
        <div className={styles.mealItemDetailsGeneralCont}>
          <div className={styles.meailItemInfoContainer}>
            <div className={styles.welcomeBonusBadgeContainer}>
              <div className={styles.badgeGroup}>
                <div className={styles.badge}>
                  <div className={styles.text}>First order 🎉</div>
                </div>
                <div className={styles.content}>
                  <div
                    className={styles.text}
                  >{`Get Venmo’d $15 +10% cashback `}</div>
                  <img className={styles.arrowRightIcon} alt="" />
                </div>
              </div>
            </div>
            <div className={styles.mealMainInfo}>
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
            <div className={styles.benefitsContainer1}>
              <div className={styles.sectionTitle}>Good for</div>
              <div className={styles.benefitsItemsContainer}>
                <div className={styles.benefitItem}>
                  <img
                    className={styles.distanceIcon}
                    alt=""
                    src="/checkicon4.svg"
                  />
                  <div className={styles.benefitLabel}>Focus</div>
                </div>
                <div className={styles.benefitItem1}>
                  <img
                    className={styles.distanceIcon}
                    alt=""
                    src="/checkicon4.svg"
                  />
                  <div className={styles.benefitLabel}>Sustained Energy</div>
                </div>
                <div className={styles.benefitItem2}>
                  <img
                    className={styles.distanceIcon}
                    alt=""
                    src="/checkicon4.svg"
                  />
                  <div className={styles.benefitLabel}>Nutrient Dense</div>
                </div>
              </div>
            </div>
            <div className={styles.divider1}>
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
            <div className={styles.ingredientsContainer}>
              <div className={styles.sectionTitle}>Ingredients</div>
              <div className={styles.ingredientsItemsContainer}>
                <div className={styles.ingredientItem}>
                  <img
                    className={styles.ingredientImageIcon}
                    alt=""
                    src="/ingredientimage@2x.png"
                  />
                  <div className={styles.benefitItemValue}>
                    <p className={styles.kaleAnd}>Kale and</p>
                    <p className={styles.kaleAnd}>Romaine</p>
                  </div>
                </div>
                <div className={styles.ingredientItem}>
                  <img
                    className={styles.ingredientImageIcon}
                    alt=""
                    src="/ingredientimage1@2x.png"
                  />
                  <div className={styles.benefitItemValue}>
                    <p className={styles.kaleAnd}>Grilled</p>
                    <p className={styles.kaleAnd}>chicken</p>
                  </div>
                </div>
                <div className={styles.ingredientItem2}>
                  <img
                    className={styles.ingredientImageIcon}
                    alt=""
                    src="/ingredientimage2@2x.png"
                  />
                  <div className={styles.benefitItemValue}>Parmesan</div>
                </div>
                <div className={styles.ingredientItem}>
                  <img
                    className={styles.ingredientImageIcon}
                    alt=""
                    src="/ingredientimage3@2x.png"
                  />
                  <div className={styles.benefitItemValue}>
                    <p className={styles.kaleAnd}>Ceasar</p>
                    <p className={styles.kaleAnd}>Dressing</p>
                  </div>
                </div>
                <div className={styles.ingredientItem2}>
                  <img
                    className={styles.ingredientImageIcon}
                    alt=""
                    src="/ingredientimage4@2x.png"
                  />
                  <div className={styles.benefitItemValue}>Croutons</div>
                </div>
              </div>
            </div>
            <div className={styles.mealMainInfo}>
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
            <div className={styles.ingredientsContainer}>
              <div className={styles.sectionTitle}>Macronutrients</div>
              <div className={styles.macroItemsContainer}>
                <div className={styles.macroItem}>
                  <div className={styles.text}>CALORIES</div>
                  <div className={styles.macroValue}>400k</div>
                </div>
                <div className={styles.macroItem}>
                  <div className={styles.text}>PROTEINS</div>
                  <div className={styles.macroValue}>20g</div>
                </div>
                <div className={styles.macroItem}>
                  <div className={styles.text}>CARBO</div>
                  <div className={styles.macroValue}>30g</div>
                </div>
                <div className={styles.macroItem}>
                  <div className={styles.text}>FATS</div>
                  <div className={styles.macroValue}>20g</div>
                </div>
              </div>
            </div>
            <div className={styles.mealMainInfo}>
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
            <div className={styles.ingredientsContainer}>
              <div className={styles.sectionTitle}>Allergen Warnings</div>
              <div className={styles.ingredientsItemsContainer}>
                <div className={styles.ingredientItem}>
                  <img
                    className={styles.ingredientImageIcon}
                    alt=""
                    src="/allergenimage@2x.png"
                  />
                  <div className={styles.benefitItemValue}>Dairy</div>
                </div>
                <div className={styles.ingredientItem}>
                  <img
                    className={styles.ingredientImageIcon}
                    alt=""
                    src="/allergenimage1@2x.png"
                  />
                  <div className={styles.benefitItemValue}>Gluten</div>
                </div>
              </div>
            </div>
            <div className={styles.mealMainInfo}>
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
            <div className={styles.ingredientsContainer}>
              <div className={styles.sectionTitle}>Sold by</div>
              <div className={styles.soldByInfoContainer}>
                <div className={styles.soldByInfoItemContainer}>
                  <img
                    className={styles.restaurantLogoIcon}
                    alt=""
                    src="/restaurantlogo@2x.png"
                  />
                  <div className={styles.restaurantName}>CHLOE</div>
                </div>
                <div className={styles.distanceInfoContainer}>
                  <img
                    className={styles.distanceIcon}
                    alt=""
                    src="/distanceicon.svg"
                  />
                  <div className={styles.restaurantName}>0.5miles</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.mealMainInfo}>
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
          <div className={styles.promotionalBannerContainer}>
            <div className={styles.welcomeBonusBanner}>
              <div className={styles.welcomeBonusGeneralContaine}>
                <div className={styles.welcomeBonusMainInfoContai}>
                  <div className={styles.text}>FIRST ORDER 🎉</div>
                  <div className={styles.welcomeBonusInfoContainer}>
                    <div
                      className={styles.sectionTitle}
                    >{`Get Venmo’d $15 +10% cashback `}</div>
                    <div className={styles.offerDescription}>
                      Connect Venmo and get $15 dollars + 10% cashback.
                    </div>
                  </div>
                </div>
                <div className={styles.buttonsbutton}>
                  <img className={styles.placeholderIcon} alt="" />
                  <div className={styles.text2}>Enter Venmo</div>
                  <img className={styles.checkIcon} alt="" />
                </div>
              </div>
              <img className={styles.money3dImageIcon} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.appHeader}>
        <div className={styles.healthScoreLabelContainer}>
          <div className={styles.logo}>
            <img className={styles.clipPathGroup} alt="" />
            <img className={styles.vectorIcon} alt="" />
          </div>
        </div>
        <div className={styles.actions}>
          <div className={styles.buttonsbutton1}>
            <img className={styles.checkIcon} alt="" />
          </div>
        </div>
      </div>
      <div className={styles.mealItemActionsContainer}>
        <div className={styles.mealItemNumericInfoContain1}>
          <div className={styles.healthScoreContainer}>
            <div className={styles.healthScoreLabelContainer}>
              <div className={styles.healthScoreLabelWrapper}>
                <div className={styles.healthScoreLabel}>HEALTH SCORE</div>
              </div>
            </div>
            <div className={styles.healthScoreValueContainer1}>
              <div className={styles.healthScoreValueWrapper}>
                <div className={styles.healthScoreLabelContainer}>
                  <div className={styles.healthScoreLabelWrapper}>
                    <div className={styles.healthScoreValue1}>4.8</div>
                  </div>
                </div>
              </div>
              <img className={styles.starIcon1} alt="" />
            </div>
          </div>
          <div className={styles.healthScoreContainer}>
            <div className={styles.healthScoreLabelContainer}>
              <div className={styles.healthScoreLabelWrapper}>
                <div className={styles.healthScoreLabel}>PRICE</div>
              </div>
            </div>
            <div className={styles.priceValueContainer2}>
              <div className={styles.healthScoreLabelWrapper}>
                <div className={styles.healthScoreLabelContainer}>
                  <div className={styles.healthScoreLabelWrapper}>
                    <div className={styles.healthScoreValue}>$12.95</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.healthScoreContainer}>
            <div className={styles.healthScoreLabelContainer}>
              <div className={styles.healthScoreLabelWrapper}>
                <div className={styles.healthScoreLabel}>CASHBACK</div>
              </div>
            </div>
            <div className={styles.priceValueContainer3}>
              <div className={styles.healthScoreLabelWrapper}>
                <div className={styles.healthScoreLabelContainer}>
                  <div className={styles.healthScoreLabelWrapper}>
                    <div className={styles.healthScoreValue1}>10%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
          placeholderIconOverflow="unset"
          placeholderIconTransform=" rotate(-180deg)"
          text="0.5 miles - Get directions"
          showButtonsButton
        />
      </div>
    </div>
  );
};

export default MealItemsDetails;
