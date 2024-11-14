import { FunctionComponent } from "react";
import styles from "./MealPlanDayDetails.module.css";

const MealPlanDayDetails: FunctionComponent = () => {
  return (
    <div className={styles.mealPlanDayDetails}>
      <div className={styles.mainContentContainer}>
        <div className={styles.pageTitleContainer}>
          <div className={styles.pageTitle}>Monday</div>
        </div>
        <div className={styles.timeSelectorContainer}>
          <div className={styles.timeOptionItem}>
            <div className={styles.timeOptionValue}>MORNING</div>
          </div>
          <div className={styles.timeOptionItem1}>
            <div className={styles.timeOptionValue}>AFTERNOON</div>
          </div>
          <div className={styles.timeOptionItem1}>
            <div className={styles.timeOptionValue}>EVENING</div>
          </div>
        </div>
        <div className={styles.suggestionsContainer}>
          <div className={styles.suggestionContainer}>
            <div className={styles.titleContainer}>
              <div className={styles.sectionTitle}>Meal</div>
              <div className={styles.buttonsbutton}>
                <img
                  className={styles.refreshCw02Icon}
                  alt=""
                  src="/refreshcw021.svg"
                />
              </div>
            </div>
            <div className={styles.mealCardContainer}>
              <div className={styles.mealMainInfoContainer}>
                <img
                  className={styles.mealImageIcon}
                  alt=""
                  src="/mealimage@2x.png"
                />
                <div className={styles.mealDetailsContainer}>
                  <div className={styles.mealInfoContainer}>
                    <div className={styles.restaurantName}>
                      JUICE GENERATION
                    </div>
                    <div className={styles.mealName}>Kale Caesar Salad</div>
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
                  <img
                    className={styles.refreshCw02Icon}
                    alt=""
                    src="/checkicon.svg"
                  />
                  <div className={styles.benefitItemValue}>Focus</div>
                </div>
                <div className={styles.benefitItemContainer}>
                  <img
                    className={styles.refreshCw02Icon}
                    alt=""
                    src="/checkicon.svg"
                  />
                  <div className={styles.benefitItemValue}>
                    Sustained Energy
                  </div>
                </div>
                <div className={styles.benefitItemContainer}>
                  <img
                    className={styles.refreshCw02Icon}
                    alt=""
                    src="/checkicon.svg"
                  />
                  <div className={styles.benefitItemValue}>Nutrient Dense</div>
                </div>
              </div>
              <div className={styles.contentItem}>
                <div className={styles.paddingTop}>
                  <div className={styles.measureSpacingGuide}>
                    <div className={styles.number}>24px</div>
                    <div className={styles.lines}>
                      <div className={styles.measureLineBase}>
                        <img
                          className={styles.endpointIcon}
                          alt=""
                          src="/endpoint.svg"
                        />
                        <img
                          className={styles.lineIcon}
                          alt=""
                          src="/line.svg"
                        />
                        <img
                          className={styles.endpointIcon}
                          alt=""
                          src="/endpoint.svg"
                        />
                      </div>
                      <div className={styles.measureLineBase1}>
                        <img
                          className={styles.endpointIcon2}
                          alt=""
                          src="/endpoint1.svg"
                        />
                        <img className={styles.lineIcon} alt="" />
                        <img
                          className={styles.endpointIcon2}
                          alt=""
                          src="/endpoint1.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <img className={styles.dividerIcon} alt="" src="/divider.svg" />
                <div className={styles.paddingTop}>
                  <div className={styles.measureSpacingGuide}>
                    <div className={styles.number}>24px</div>
                    <div className={styles.lines}>
                      <div className={styles.measureLineBase}>
                        <img
                          className={styles.endpointIcon}
                          alt=""
                          src="/endpoint.svg"
                        />
                        <img
                          className={styles.lineIcon}
                          alt=""
                          src="/line.svg"
                        />
                        <img
                          className={styles.endpointIcon}
                          alt=""
                          src="/endpoint.svg"
                        />
                      </div>
                      <div className={styles.measureLineBase1}>
                        <img
                          className={styles.endpointIcon2}
                          alt=""
                          src="/endpoint1.svg"
                        />
                        <img className={styles.lineIcon} alt="" />
                        <img
                          className={styles.endpointIcon2}
                          alt=""
                          src="/endpoint1.svg"
                        />
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
          </div>
          <div className={styles.contentItem1}>
            <div className={styles.paddingTop}>
              <div className={styles.measureSpacingGuide2}>
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
                      className={styles.endpointIcon}
                      alt=""
                      src="/endpoint.svg"
                    />
                  </div>
                  <div className={styles.measureLineBase1}>
                    <img
                      className={styles.endpointIcon2}
                      alt=""
                      src="/endpoint2.svg"
                    />
                    <img className={styles.lineIcon} alt="" />
                    <img
                      className={styles.endpointIcon2}
                      alt=""
                      src="/endpoint2.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <img className={styles.dividerIcon} alt="" src="/divider1.svg" />
            <div className={styles.paddingTop}>
              <div className={styles.measureSpacingGuide2}>
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
                      className={styles.endpointIcon}
                      alt=""
                      src="/endpoint.svg"
                    />
                  </div>
                  <div className={styles.measureLineBase1}>
                    <img
                      className={styles.endpointIcon2}
                      alt=""
                      src="/endpoint2.svg"
                    />
                    <img className={styles.lineIcon} alt="" />
                    <img
                      className={styles.endpointIcon2}
                      alt=""
                      src="/endpoint2.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.suggestionContainer}>
            <div className={styles.titleContainer}>
              <div className={styles.sectionTitle}>Snack</div>
              <div className={styles.buttonsbutton}>
                <img
                  className={styles.refreshCw02Icon}
                  alt=""
                  src="/refreshcw021.svg"
                />
              </div>
            </div>
            <div className={styles.mealCardContainer}>
              <div className={styles.mealMainInfoContainer}>
                <img
                  className={styles.mealImageIcon}
                  alt=""
                  src="/mealimage@2x.png"
                />
                <div className={styles.mealDetailsContainer}>
                  <div className={styles.mealInfoContainer}>
                    <div className={styles.restaurantName}>
                      JUICE GENERATION
                    </div>
                    <div className={styles.mealName}>Kale Caesar Salad</div>
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
                  <img
                    className={styles.refreshCw02Icon}
                    alt=""
                    src="/checkicon.svg"
                  />
                  <div className={styles.benefitItemValue}>Focus</div>
                </div>
                <div className={styles.benefitItemContainer}>
                  <img
                    className={styles.refreshCw02Icon}
                    alt=""
                    src="/checkicon.svg"
                  />
                  <div className={styles.benefitItemValue}>
                    Sustained Energy
                  </div>
                </div>
                <div className={styles.benefitItemContainer}>
                  <img
                    className={styles.refreshCw02Icon}
                    alt=""
                    src="/checkicon.svg"
                  />
                  <div className={styles.benefitItemValue}>Nutrient Dense</div>
                </div>
              </div>
              <div className={styles.contentItem}>
                <div className={styles.paddingTop}>
                  <div className={styles.measureSpacingGuide}>
                    <div className={styles.number}>24px</div>
                    <div className={styles.lines}>
                      <div className={styles.measureLineBase}>
                        <img
                          className={styles.endpointIcon}
                          alt=""
                          src="/endpoint.svg"
                        />
                        <img
                          className={styles.lineIcon}
                          alt=""
                          src="/line.svg"
                        />
                        <img
                          className={styles.endpointIcon}
                          alt=""
                          src="/endpoint.svg"
                        />
                      </div>
                      <div className={styles.measureLineBase1}>
                        <img
                          className={styles.endpointIcon2}
                          alt=""
                          src="/endpoint1.svg"
                        />
                        <img className={styles.lineIcon} alt="" />
                        <img
                          className={styles.endpointIcon2}
                          alt=""
                          src="/endpoint1.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <img className={styles.dividerIcon} alt="" src="/divider.svg" />
                <div className={styles.paddingTop}>
                  <div className={styles.measureSpacingGuide}>
                    <div className={styles.number}>24px</div>
                    <div className={styles.lines}>
                      <div className={styles.measureLineBase}>
                        <img
                          className={styles.endpointIcon}
                          alt=""
                          src="/endpoint.svg"
                        />
                        <img
                          className={styles.lineIcon}
                          alt=""
                          src="/line.svg"
                        />
                        <img
                          className={styles.endpointIcon}
                          alt=""
                          src="/endpoint.svg"
                        />
                      </div>
                      <div className={styles.measureLineBase1}>
                        <img
                          className={styles.endpointIcon2}
                          alt=""
                          src="/endpoint1.svg"
                        />
                        <img className={styles.lineIcon} alt="" />
                        <img
                          className={styles.endpointIcon2}
                          alt=""
                          src="/endpoint1.svg"
                        />
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
          </div>
          <div className={styles.contentItem1}>
            <div className={styles.paddingTop}>
              <div className={styles.measureSpacingGuide2}>
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
                      className={styles.endpointIcon}
                      alt=""
                      src="/endpoint.svg"
                    />
                  </div>
                  <div className={styles.measureLineBase1}>
                    <img
                      className={styles.endpointIcon2}
                      alt=""
                      src="/endpoint2.svg"
                    />
                    <img className={styles.lineIcon} alt="" />
                    <img
                      className={styles.endpointIcon2}
                      alt=""
                      src="/endpoint2.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <img className={styles.dividerIcon} alt="" src="/divider1.svg" />
            <div className={styles.paddingTop}>
              <div className={styles.measureSpacingGuide2}>
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
                      className={styles.endpointIcon}
                      alt=""
                      src="/endpoint.svg"
                    />
                  </div>
                  <div className={styles.measureLineBase1}>
                    <img
                      className={styles.endpointIcon2}
                      alt=""
                      src="/endpoint2.svg"
                    />
                    <img className={styles.lineIcon} alt="" />
                    <img
                      className={styles.endpointIcon2}
                      alt=""
                      src="/endpoint2.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.suggestionContainer}>
            <div className={styles.titleContainer}>
              <div className={styles.sectionTitle}>Drink</div>
              <div className={styles.buttonsbutton}>
                <img
                  className={styles.refreshCw02Icon}
                  alt=""
                  src="/refreshcw021.svg"
                />
              </div>
            </div>
            <div className={styles.mealCardContainer}>
              <div className={styles.mealMainInfoContainer}>
                <img
                  className={styles.mealImageIcon}
                  alt=""
                  src="/mealimage@2x.png"
                />
                <div className={styles.mealDetailsContainer}>
                  <div className={styles.mealInfoContainer}>
                    <div className={styles.restaurantName}>
                      JUICE GENERATION
                    </div>
                    <div className={styles.mealName}>Kale Caesar Salad</div>
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
                  <img
                    className={styles.refreshCw02Icon}
                    alt=""
                    src="/checkicon.svg"
                  />
                  <div className={styles.benefitItemValue}>Focus</div>
                </div>
                <div className={styles.benefitItemContainer}>
                  <img
                    className={styles.refreshCw02Icon}
                    alt=""
                    src="/checkicon.svg"
                  />
                  <div className={styles.benefitItemValue}>
                    Sustained Energy
                  </div>
                </div>
                <div className={styles.benefitItemContainer}>
                  <img
                    className={styles.refreshCw02Icon}
                    alt=""
                    src="/checkicon.svg"
                  />
                  <div className={styles.benefitItemValue}>Nutrient Dense</div>
                </div>
              </div>
              <div className={styles.contentItem}>
                <div className={styles.paddingTop}>
                  <div className={styles.measureSpacingGuide}>
                    <div className={styles.number}>24px</div>
                    <div className={styles.lines}>
                      <div className={styles.measureLineBase}>
                        <img
                          className={styles.endpointIcon}
                          alt=""
                          src="/endpoint.svg"
                        />
                        <img
                          className={styles.lineIcon}
                          alt=""
                          src="/line.svg"
                        />
                        <img
                          className={styles.endpointIcon}
                          alt=""
                          src="/endpoint.svg"
                        />
                      </div>
                      <div className={styles.measureLineBase1}>
                        <img
                          className={styles.endpointIcon2}
                          alt=""
                          src="/endpoint1.svg"
                        />
                        <img className={styles.lineIcon} alt="" />
                        <img
                          className={styles.endpointIcon2}
                          alt=""
                          src="/endpoint1.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <img className={styles.dividerIcon} alt="" src="/divider.svg" />
                <div className={styles.paddingTop}>
                  <div className={styles.measureSpacingGuide}>
                    <div className={styles.number}>24px</div>
                    <div className={styles.lines}>
                      <div className={styles.measureLineBase}>
                        <img
                          className={styles.endpointIcon}
                          alt=""
                          src="/endpoint.svg"
                        />
                        <img
                          className={styles.lineIcon}
                          alt=""
                          src="/line.svg"
                        />
                        <img
                          className={styles.endpointIcon}
                          alt=""
                          src="/endpoint.svg"
                        />
                      </div>
                      <div className={styles.measureLineBase1}>
                        <img
                          className={styles.endpointIcon2}
                          alt=""
                          src="/endpoint1.svg"
                        />
                        <img className={styles.lineIcon} alt="" />
                        <img
                          className={styles.endpointIcon2}
                          alt=""
                          src="/endpoint1.svg"
                        />
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
          </div>
        </div>
      </div>
      <div className={styles.statusBar}>
        <div className={styles.statusBar1}>
          <div className={styles.time}>
            <div className={styles.time1}>9:41</div>
          </div>
          <div className={styles.levels}>
            <div className={styles.battery}>
              <div className={styles.border} />
              <img className={styles.capIcon} alt="" src="/cap.svg" />
              <div className={styles.capacity} />
            </div>
            <img className={styles.wifiIcon} alt="" src="/wifi.svg" />
            <img
              className={styles.cellularConnectionIcon}
              alt=""
              src="/cellular-connection.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.appHeader}>
        <div className={styles.button}>
          <img
            className={styles.refreshCw02Icon}
            alt=""
            src="/arrowleft1.svg"
          />
        </div>
        <div className={styles.pageTitle1}>Your meal plan</div>
        <div className={styles.button}>
          <img className={styles.refreshCw02Icon} alt="" src="/x.svg" />
        </div>
      </div>
    </div>
  );
};

export default MealPlanDayDetails;
