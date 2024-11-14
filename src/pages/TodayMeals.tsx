import { FunctionComponent } from "react";
import styles from "./TodayMeals.module.css";

const TodayMeals: FunctionComponent = () => {
  return (
    <div className={styles.todayMeals}>
      <div className={styles.mainContentContainer}>
        <div className={styles.mainHeader}>
          <div className={styles.suggestionsTitle}>
            Healthy suggestions of the day
          </div>
        </div>
        <div className={styles.timeSelector}>
          <div className={styles.timeOption}>
            <div className={styles.timeOptionLabel}>MORNING</div>
          </div>
          <div className={styles.timeOption1}>
            <div className={styles.timeOptionLabel}>AFTERNOON</div>
          </div>
          <div className={styles.timeOption1}>
            <div className={styles.timeOptionLabel}>EVENING</div>
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
              <div className={styles.measureSpacingGuide2}>
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
              <div className={styles.measureSpacingGuide2}>
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
      <div className={styles.tabbar}>
        <div className={styles.container}>
          <div className={styles.navitem}>
            <div className={styles.mobile}>
              <img className={styles.icon} alt="" src="/icon.svg" />
              <div className={styles.label}>Home</div>
              <div className={styles.indicator}>
                <div className={styles.basebadge}>
                  <div className={styles.label1}>2</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.navitem1}>
            <div className={styles.mobile}>
              <img className={styles.icon1} alt="" src="/icon.svg" />
              <div className={styles.label}>Meals</div>
              <div className={styles.indicator}>
                <div className={styles.basebadge1}>
                  <div className={styles.label1}>2</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.navitem}>
            <div className={styles.mobile}>
              <img className={styles.icon} alt="" src="/icon.svg" />
              <div className={styles.label}>Cashback</div>
              <div className={styles.indicator}>
                <div className={styles.basebadge}>
                  <div className={styles.label1}>2</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.navitem}>
            <div className={styles.mobile}>
              <img className={styles.icon} alt="" src="/icon.svg" />
              <div className={styles.label}>Gloria</div>
              <div className={styles.indicator}>
                <div className={styles.basebadge}>
                  <div className={styles.label1}>2</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.statusBar}>
        <div className={styles.statusBarBackground}>
          <div className={styles.time}>
            <div className={styles.time1}>9:41</div>
          </div>
          <div className={styles.levels}>
            <div className={styles.battery}>
              <div className={styles.border} />
              <img className={styles.capIcon} alt="" src="/cap1.svg" />
              <div className={styles.capacity} />
            </div>
            <img className={styles.wifiIcon} alt="" src="/wifi1.svg" />
            <img
              className={styles.cellularConnectionIcon}
              alt=""
              src="/cellular-connection1.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.appHeader}>
        <div className={styles.noraLogo}>
          <div className={styles.logo}>
            <img
              className={styles.clipPathGroup}
              alt=""
              src="/clip-path-group3.svg"
            />
            <img className={styles.vectorIcon} alt="" src="/vector.svg" />
          </div>
        </div>
        <div className={styles.benefitItemContainer}>
          <div className={styles.buttonsbutton3}>
            <img
              className={styles.refreshCw02Icon}
              alt=""
              src="/helpcircle1.svg"
            />
          </div>
          <div className={styles.buttonsbutton3}>
            <img
              className={styles.refreshCw02Icon}
              alt=""
              src="/helpcircle1.svg"
            />
          </div>
          <div className={styles.buttonsbutton5}>
            <img
              className={styles.refreshCw02Icon}
              alt=""
              src="/infocircle.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodayMeals;
