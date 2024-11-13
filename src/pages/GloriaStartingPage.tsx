import { FunctionComponent } from "react";
import SuggestedOptionItem from "../components/SuggestedOptionItem";
import styles from "./GloriaStartingPage.module.css";

const GloriaStartingPage: FunctionComponent = () => {
  return (
    <div className={styles.gloriaStartingPage}>
      <div className={styles.mainContainer}>
        <div className={styles.welcomePageConversationHead}>
          <div className={styles.avatarCoach}>
            <div className={styles.contrastBorder} />
          </div>
          <div className={styles.hiImGloriaYourWeightManParent}>
            <div className={styles.hiImGloriaContainer}>
              <p className={styles.hiImGloria}>
                <span className={styles.hi}>Hi,</span>
                <span className={styles.span}>{` `}</span>
                <i className={styles.imGloria}>I'm Gloria</i>
              </p>
              <p className={styles.hiImGloria}>
                <i className={styles.imGloria}>your food and health agent.</i>
              </p>
            </div>
            <div className={styles.frameWrapper}>
              <div className={styles.askYourQuestionsGetInstanWrapper}>
                <div className={styles.askYourQuestions}>
                  Ask your questions. Get instant answers.
                </div>
              </div>
            </div>
          </div>
          <div className={styles.buttonsbutton}>
            <img
              className={styles.hourglass01Icon}
              alt=""
              src="/hourglass01.svg"
            />
            <div className={styles.textPadding}>
              <div className={styles.text}>Load last conversation</div>
            </div>
            <img className={styles.placeholderIcon} alt="" />
          </div>
        </div>
        <div className={styles.chatMainContainer}>
          <div className={styles.promptSuggestionsContainer}>
            <div className={styles.sectionTitle}>LOOK FOR</div>
            <div className={styles.promptSuggestionsItems}>
              <SuggestedOptionItem
                emojiContent="🥑"
                showEmojiContent
                suggestedOptionText="Healthy snack ideas?"
              />
              <div className={styles.suggestedoptionitem}>
                <div className={styles.emojicontainer}>
                  <div className={styles.text}>⚡️</div>
                </div>
                <div className={styles.suggestedoptioninfocontainer}>
                  <div className={styles.suggestedoptioninnercontainer}>
                    <div className={styles.suggestedoptiontext}>
                      Energy booster beverage near me
                    </div>
                    <div className={styles.aicoachdescription}>
                      <span>{`with `}</span>
                      <i className={styles.imGloria}>Nora</i>
                    </div>
                  </div>
                  <div className={styles.badge}>
                    <div className={styles.sectionTitle}>💰 8 Nora Coins</div>
                  </div>
                </div>
              </div>
              <div className={styles.suggestedoptionitem}>
                <div className={styles.emojicontainer}>
                  <div className={styles.text}>🧠</div>
                </div>
                <div className={styles.suggestedoptioninfocontainer}>
                  <div className={styles.suggestedoptioninnercontainer}>
                    <div className={styles.suggestedoptiontext}>
                      Protein based meals for mental acuity
                    </div>
                    <div className={styles.aicoachdescription}>
                      <span>{`with `}</span>
                      <i className={styles.imGloria}>Nora</i>
                    </div>
                  </div>
                  <div className={styles.badge}>
                    <div className={styles.sectionTitle}>💰 8 Nora Coins</div>
                  </div>
                </div>
              </div>
              <div className={styles.suggestedoptionitem}>
                <div className={styles.emojicontainer}>
                  <div className={styles.text}>🧨</div>
                </div>
                <div className={styles.suggestedoptioninfocontainer}>
                  <div className={styles.suggestedoptioninnercontainer}>
                    <div className={styles.suggestedoptiontext}>
                      Quick energy release snacks
                    </div>
                    <div className={styles.aicoachdescription}>
                      <span>{`with `}</span>
                      <i className={styles.imGloria}>Nora</i>
                    </div>
                  </div>
                  <div className={styles.badge}>
                    <div className={styles.sectionTitle}>💰 8 Nora Coins</div>
                  </div>
                </div>
              </div>
            </div>
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
        <div className={styles.actions}>
          <div className={styles.buttonsbutton1}>
            <img
              className={styles.hourglass01Icon}
              alt=""
              src="/helpcircle1.svg"
            />
          </div>
          <div className={styles.buttonsbutton1}>
            <img
              className={styles.hourglass01Icon}
              alt=""
              src="/helpcircle1.svg"
            />
          </div>
          <div className={styles.buttonsbutton3}>
            <img
              className={styles.hourglass01Icon}
              alt=""
              src="/infocircle.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.tabbar}>
        <div className={styles.container}>
          <div className={styles.navitem}>
            <div className={styles.mobile}>
              <img className={styles.icon} alt="" src="/icon14.svg" />
              <div className={styles.label}>Home</div>
              <div className={styles.indicator}>
                <div className={styles.basebadge}>
                  <div className={styles.label1}>2</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.navitem}>
            <div className={styles.mobile}>
              <img className={styles.icon1} alt="" src="/icon19.svg" />
              <div className={styles.label}>Meals</div>
              <div className={styles.indicator}>
                <div className={styles.basebadge}>
                  <div className={styles.label1}>2</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.navitem}>
            <div className={styles.mobile}>
              <img className={styles.icon} alt="" src="/icon23.svg" />
              <div className={styles.label}>Cashback</div>
              <div className={styles.indicator}>
                <div className={styles.basebadge}>
                  <div className={styles.label1}>2</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.navitem3}>
            <div className={styles.mobile}>
              <img className={styles.icon} alt="" src="/icon24.svg" />
              <div className={styles.label}>Gloria</div>
              <div className={styles.indicator}>
                <div className={styles.basebadge3}>
                  <div className={styles.label1}>2</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.tabbar1}>
        <div className={styles.asteroidTabbar}>
          <div className={styles.container1}>
            <div className={styles.secondary}>
              <div className={styles.basenavbarnavsecondary}>
                <div className={styles.asteroidNav}>
                  <div className={styles.item11}>
                    <div className={styles.basenavitem}>
                      <div className={styles.container2}>
                        <div className={styles.container3}>
                          <div className={styles.desktop}>
                            <img
                              className={styles.icon}
                              alt=""
                              src="/icon11.svg"
                            />
                            <div className={styles.label8}>Link</div>
                            <div className={styles.badgenew}>
                              <div className={styles.basebadge4}>
                                <div className={styles.label9}>2</div>
                              </div>
                            </div>
                          </div>
                          <div className={styles.mobile4}>
                            <img
                              className={styles.icon}
                              alt=""
                              src="/icon11.svg"
                            />
                            <div className={styles.label}>Home</div>
                            <div className={styles.asteroidIndicator}>
                              <div className={styles.basebadge}>
                                <div className={styles.label1}>2</div>
                              </div>
                            </div>
                          </div>
                          <img
                            className={styles.arrowDropDownIcon}
                            alt=""
                            src="/arrowdropdown.svg"
                          />
                        </div>
                        <div className={styles.border} />
                      </div>
                      <div className={styles.asteroidIndicator1}>
                        <div className={styles.basebadge}>
                          <div className={styles.label1}>2</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.item04}>
                    <div className={styles.basenavitem}>
                      <div className={styles.container2}>
                        <div className={styles.container3}>
                          <div className={styles.desktop}>
                            <img
                              className={styles.icon1}
                              alt=""
                              src="/icon4.svg"
                            />
                            <div className={styles.label8}>Link</div>
                            <div className={styles.badgenew}>
                              <div className={styles.basebadge4}>
                                <div className={styles.label9}>2</div>
                              </div>
                            </div>
                          </div>
                          <div className={styles.mobile5}>
                            <img
                              className={styles.icon1}
                              alt=""
                              src="/icon12.svg"
                            />
                            <div className={styles.label}>Discover</div>
                            <div className={styles.asteroidIndicator}>
                              <div className={styles.basebadge}>
                                <div className={styles.label1}>2</div>
                              </div>
                            </div>
                          </div>
                          <img
                            className={styles.arrowDropDownIcon}
                            alt=""
                            src="/arrowdropdown.svg"
                          />
                        </div>
                        <div className={styles.border} />
                      </div>
                      <div className={styles.asteroidIndicator1}>
                        <div className={styles.basebadge}>
                          <div className={styles.label1}>2</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.item9}>
                    <div className={styles.basenavitem}>
                      <div className={styles.container2}>
                        <div className={styles.container3}>
                          <div className={styles.desktop}>
                            <img
                              className={styles.icon1}
                              alt=""
                              src="/icon4.svg"
                            />
                            <div className={styles.label8}>Link</div>
                            <div className={styles.badgenew}>
                              <div className={styles.basebadge4}>
                                <div className={styles.label9}>2</div>
                              </div>
                            </div>
                          </div>
                          <div className={styles.mobile5}>
                            <img
                              className={styles.icon1}
                              alt=""
                              src="/icon12.svg"
                            />
                            <div className={styles.label}>Conversations</div>
                            <div className={styles.asteroidIndicator}>
                              <div className={styles.basebadge}>
                                <div className={styles.label1}>2</div>
                              </div>
                            </div>
                          </div>
                          <img
                            className={styles.arrowDropDownIcon}
                            alt=""
                            src="/arrowdropdown.svg"
                          />
                        </div>
                        <div className={styles.border} />
                      </div>
                      <div className={styles.asteroidIndicator1}>
                        <div className={styles.basebadge}>
                          <div className={styles.label1}>2</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.item10}>
                    <div className={styles.basenavitem}>
                      <div className={styles.container2}>
                        <div className={styles.container3}>
                          <div className={styles.desktop}>
                            <img
                              className={styles.icon}
                              alt=""
                              src="/icon4.svg"
                            />
                            <div className={styles.label8}>Link</div>
                            <div className={styles.badgenew}>
                              <div className={styles.basebadge4}>
                                <div className={styles.label9}>2</div>
                              </div>
                            </div>
                          </div>
                          <div className={styles.mobile5}>
                            <img
                              className={styles.icon}
                              alt=""
                              src="/icon12.svg"
                            />
                            <div className={styles.label}>Researches</div>
                            <div className={styles.asteroidIndicator}>
                              <div className={styles.basebadge}>
                                <div className={styles.label1}>2</div>
                              </div>
                            </div>
                          </div>
                          <img
                            className={styles.arrowDropDownIcon}
                            alt=""
                            src="/arrowdropdown.svg"
                          />
                        </div>
                        <div className={styles.border} />
                      </div>
                      <div className={styles.asteroidIndicator1}>
                        <div className={styles.basebadge}>
                          <div className={styles.label1}>2</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.item02}>
                    <div className={styles.basenavitem4}>
                      <div className={styles.container2}>
                        <div className={styles.container3}>
                          <div className={styles.desktop}>
                            <img
                              className={styles.icon1}
                              alt=""
                              src="/icon6.svg"
                            />
                            <div className={styles.label8}>Link</div>
                            <div className={styles.badgenew}>
                              <div className={styles.basebadge4}>
                                <div className={styles.label9}>2</div>
                              </div>
                            </div>
                          </div>
                          <div className={styles.mobile8}>
                            <img
                              className={styles.icon1}
                              alt=""
                              src="/icon7.svg"
                            />
                            <div className={styles.label30}>Symptoms</div>
                            <div className={styles.asteroidIndicator8}>
                              <div className={styles.basebadge}>
                                <div className={styles.label1}>2</div>
                              </div>
                            </div>
                          </div>
                          <img
                            className={styles.arrowDropDownIcon}
                            alt=""
                            src="/arrowdropdown.svg"
                          />
                        </div>
                        <div className={styles.border4} />
                      </div>
                      <div className={styles.asteroidIndicator1}>
                        <div className={styles.basebadge}>
                          <div className={styles.label1}>2</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.item03}>
                    <div className={styles.basenavitem}>
                      <div className={styles.container2}>
                        <div className={styles.container3}>
                          <div className={styles.desktop}>
                            <img
                              className={styles.icon}
                              alt=""
                              src="/icon8.svg"
                            />
                            <div className={styles.label8}>Link</div>
                            <div className={styles.badgenew}>
                              <div className={styles.basebadge4}>
                                <div className={styles.label9}>2</div>
                              </div>
                            </div>
                          </div>
                          <div className={styles.mobile4}>
                            <img
                              className={styles.icon}
                              alt=""
                              src="/icon13.svg"
                            />
                            <div className={styles.label}>Blog</div>
                            <div className={styles.asteroidIndicator}>
                              <div className={styles.basebadge}>
                                <div className={styles.label1}>2</div>
                              </div>
                            </div>
                          </div>
                          <img
                            className={styles.arrowDropDownIcon}
                            alt=""
                            src="/arrowdropdown.svg"
                          />
                        </div>
                        <div className={styles.border5} />
                      </div>
                      <div className={styles.asteroidIndicator1}>
                        <div className={styles.basebadge}>
                          <div className={styles.label1}>2</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.item06}>
                    <div className={styles.basenavitem6}>
                      <div className={styles.container2}>
                        <div className={styles.container3}>
                          <div className={styles.desktop6}>
                            <img
                              className={styles.icon16}
                              alt=""
                              src="/icon10.svg"
                            />
                            <div className={styles.label38}>Link</div>
                            <div className={styles.badgenew}>
                              <div className={styles.basebadge4}>
                                <div className={styles.label9}>2</div>
                              </div>
                            </div>
                          </div>
                          <div className={styles.mobile10}>
                            <img
                              className={styles.icon1}
                              alt=""
                              src="/icon10.svg"
                            />
                            <div className={styles.label30}>Link</div>
                            <div className={styles.asteroidIndicator12}>
                              <div className={styles.basebadge}>
                                <div className={styles.label1}>2</div>
                              </div>
                            </div>
                          </div>
                          <img
                            className={styles.arrowDropDownIcon}
                            alt=""
                            src="/arrowdropdown.svg"
                          />
                        </div>
                        <div className={styles.border6} />
                      </div>
                      <div className={styles.asteroidIndicator1}>
                        <div className={styles.basebadge}>
                          <div className={styles.label1}>2</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.item06}>
                    <div className={styles.basenavitem6}>
                      <div className={styles.container2}>
                        <div className={styles.container3}>
                          <div className={styles.desktop6}>
                            <img
                              className={styles.icon16}
                              alt=""
                              src="/icon10.svg"
                            />
                            <div className={styles.label38}>Link</div>
                            <div className={styles.badgenew}>
                              <div className={styles.basebadge4}>
                                <div className={styles.label9}>2</div>
                              </div>
                            </div>
                          </div>
                          <div className={styles.mobile10}>
                            <img
                              className={styles.icon1}
                              alt=""
                              src="/icon10.svg"
                            />
                            <div className={styles.label30}>Link</div>
                            <div className={styles.asteroidIndicator12}>
                              <div className={styles.basebadge}>
                                <div className={styles.label1}>2</div>
                              </div>
                            </div>
                          </div>
                          <img
                            className={styles.arrowDropDownIcon}
                            alt=""
                            src="/arrowdropdown.svg"
                          />
                        </div>
                        <div className={styles.border6} />
                      </div>
                      <div className={styles.asteroidIndicator1}>
                        <div className={styles.basebadge}>
                          <div className={styles.label1}>2</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.item06}>
                    <div className={styles.basenavitem6}>
                      <div className={styles.container2}>
                        <div className={styles.container3}>
                          <div className={styles.desktop6}>
                            <img
                              className={styles.icon16}
                              alt=""
                              src="/icon10.svg"
                            />
                            <div className={styles.label38}>Link</div>
                            <div className={styles.badgenew}>
                              <div className={styles.basebadge4}>
                                <div className={styles.label9}>2</div>
                              </div>
                            </div>
                          </div>
                          <div className={styles.mobile10}>
                            <img
                              className={styles.icon1}
                              alt=""
                              src="/icon10.svg"
                            />
                            <div className={styles.label30}>Link</div>
                            <div className={styles.asteroidIndicator12}>
                              <div className={styles.basebadge}>
                                <div className={styles.label1}>2</div>
                              </div>
                            </div>
                          </div>
                          <img
                            className={styles.arrowDropDownIcon}
                            alt=""
                            src="/arrowdropdown.svg"
                          />
                        </div>
                        <div className={styles.border6} />
                      </div>
                      <div className={styles.asteroidIndicator1}>
                        <div className={styles.basebadge}>
                          <div className={styles.label1}>2</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.nav}>
            <div className={styles.nav1}>
              <div className={styles.noraLogo}>
                <div className={styles.nav1}>
                  <div className={styles.basenavitem6}>
                    <div className={styles.container2}>
                      <div className={styles.container3}>
                        <div className={styles.desktop6}>
                          <img
                            className={styles.icon16}
                            alt=""
                            src="/icon10.svg"
                          />
                          <div className={styles.label38}>Link</div>
                          <div className={styles.badgenew}>
                            <div className={styles.basebadge4}>
                              <div className={styles.label9}>2</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.mobile10}>
                          <img
                            className={styles.icon1}
                            alt=""
                            src="/icon10.svg"
                          />
                          <div className={styles.label30}>Link</div>
                          <div className={styles.asteroidIndicator12}>
                            <div className={styles.basebadge}>
                              <div className={styles.label1}>2</div>
                            </div>
                          </div>
                        </div>
                        <img
                          className={styles.arrowDropDownIcon}
                          alt=""
                          src="/arrowdropdown.svg"
                        />
                      </div>
                      <div className={styles.border6} />
                    </div>
                    <div className={styles.asteroidIndicator1}>
                      <div className={styles.basebadge}>
                        <div className={styles.label1}>2</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.nav1}>
                  <div className={styles.basenavitem6}>
                    <div className={styles.container2}>
                      <div className={styles.container3}>
                        <div className={styles.desktop6}>
                          <img
                            className={styles.icon16}
                            alt=""
                            src="/icon10.svg"
                          />
                          <div className={styles.label38}>Link</div>
                          <div className={styles.badgenew}>
                            <div className={styles.basebadge4}>
                              <div className={styles.label9}>2</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.mobile10}>
                          <img
                            className={styles.icon1}
                            alt=""
                            src="/icon10.svg"
                          />
                          <div className={styles.label30}>Link</div>
                          <div className={styles.asteroidIndicator12}>
                            <div className={styles.basebadge}>
                              <div className={styles.label1}>2</div>
                            </div>
                          </div>
                        </div>
                        <img
                          className={styles.arrowDropDownIcon}
                          alt=""
                          src="/arrowdropdown.svg"
                        />
                      </div>
                      <div className={styles.border6} />
                    </div>
                    <div className={styles.asteroidIndicator1}>
                      <div className={styles.basebadge}>
                        <div className={styles.label1}>2</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.nav1}>
                  <div className={styles.basenavitem6}>
                    <div className={styles.container2}>
                      <div className={styles.container3}>
                        <div className={styles.desktop6}>
                          <img
                            className={styles.icon16}
                            alt=""
                            src="/icon10.svg"
                          />
                          <div className={styles.label38}>Link</div>
                          <div className={styles.badgenew}>
                            <div className={styles.basebadge4}>
                              <div className={styles.label9}>2</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.mobile10}>
                          <img
                            className={styles.icon1}
                            alt=""
                            src="/icon10.svg"
                          />
                          <div className={styles.label30}>Link</div>
                          <div className={styles.asteroidIndicator12}>
                            <div className={styles.basebadge}>
                              <div className={styles.label1}>2</div>
                            </div>
                          </div>
                        </div>
                        <img
                          className={styles.arrowDropDownIcon}
                          alt=""
                          src="/arrowdropdown.svg"
                        />
                      </div>
                      <div className={styles.border6} />
                    </div>
                    <div className={styles.asteroidIndicator1}>
                      <div className={styles.basebadge}>
                        <div className={styles.label1}>2</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.nav1}>
                  <div className={styles.basenavitem6}>
                    <div className={styles.container2}>
                      <div className={styles.container3}>
                        <div className={styles.desktop6}>
                          <img
                            className={styles.icon16}
                            alt=""
                            src="/icon10.svg"
                          />
                          <div className={styles.label38}>Link</div>
                          <div className={styles.badgenew}>
                            <div className={styles.basebadge4}>
                              <div className={styles.label9}>2</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.mobile10}>
                          <img
                            className={styles.icon1}
                            alt=""
                            src="/icon10.svg"
                          />
                          <div className={styles.label30}>Link</div>
                          <div className={styles.asteroidIndicator12}>
                            <div className={styles.basebadge}>
                              <div className={styles.label1}>2</div>
                            </div>
                          </div>
                        </div>
                        <img
                          className={styles.arrowDropDownIcon}
                          alt=""
                          src="/arrowdropdown.svg"
                        />
                      </div>
                      <div className={styles.border6} />
                    </div>
                    <div className={styles.asteroidIndicator1}>
                      <div className={styles.basebadge}>
                        <div className={styles.label1}>2</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.nav1}>
                  <div className={styles.basenavitem6}>
                    <div className={styles.container2}>
                      <div className={styles.container3}>
                        <div className={styles.desktop6}>
                          <img
                            className={styles.icon16}
                            alt=""
                            src="/icon10.svg"
                          />
                          <div className={styles.label38}>Link</div>
                          <div className={styles.badgenew}>
                            <div className={styles.basebadge4}>
                              <div className={styles.label9}>2</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.mobile10}>
                          <img
                            className={styles.icon1}
                            alt=""
                            src="/icon10.svg"
                          />
                          <div className={styles.label30}>Link</div>
                          <div className={styles.asteroidIndicator12}>
                            <div className={styles.basebadge}>
                              <div className={styles.label1}>2</div>
                            </div>
                          </div>
                        </div>
                        <img
                          className={styles.arrowDropDownIcon}
                          alt=""
                          src="/arrowdropdown.svg"
                        />
                      </div>
                      <div className={styles.border6} />
                    </div>
                    <div className={styles.asteroidIndicator1}>
                      <div className={styles.basebadge}>
                        <div className={styles.label1}>2</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.nav1}>
                  <div className={styles.basenavitem6}>
                    <div className={styles.container2}>
                      <div className={styles.container3}>
                        <div className={styles.desktop6}>
                          <img
                            className={styles.icon16}
                            alt=""
                            src="/icon10.svg"
                          />
                          <div className={styles.label38}>Link</div>
                          <div className={styles.badgenew}>
                            <div className={styles.basebadge4}>
                              <div className={styles.label9}>2</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.mobile10}>
                          <img
                            className={styles.icon1}
                            alt=""
                            src="/icon10.svg"
                          />
                          <div className={styles.label30}>Link</div>
                          <div className={styles.asteroidIndicator12}>
                            <div className={styles.basebadge}>
                              <div className={styles.label1}>2</div>
                            </div>
                          </div>
                        </div>
                        <img
                          className={styles.arrowDropDownIcon}
                          alt=""
                          src="/arrowdropdown.svg"
                        />
                      </div>
                      <div className={styles.border6} />
                    </div>
                    <div className={styles.asteroidIndicator1}>
                      <div className={styles.basebadge}>
                        <div className={styles.label1}>2</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.nav1}>
                  <div className={styles.basenavitem6}>
                    <div className={styles.container2}>
                      <div className={styles.container3}>
                        <div className={styles.desktop6}>
                          <img
                            className={styles.icon16}
                            alt=""
                            src="/icon10.svg"
                          />
                          <div className={styles.label38}>Link</div>
                          <div className={styles.badgenew}>
                            <div className={styles.basebadge4}>
                              <div className={styles.label9}>2</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.mobile10}>
                          <img
                            className={styles.icon1}
                            alt=""
                            src="/icon10.svg"
                          />
                          <div className={styles.label30}>Link</div>
                          <div className={styles.asteroidIndicator12}>
                            <div className={styles.basebadge}>
                              <div className={styles.label1}>2</div>
                            </div>
                          </div>
                        </div>
                        <img
                          className={styles.arrowDropDownIcon}
                          alt=""
                          src="/arrowdropdown.svg"
                        />
                      </div>
                      <div className={styles.border6} />
                    </div>
                    <div className={styles.asteroidIndicator1}>
                      <div className={styles.basebadge}>
                        <div className={styles.label1}>2</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.nav1}>
                  <div className={styles.basenavitem6}>
                    <div className={styles.container2}>
                      <div className={styles.container3}>
                        <div className={styles.desktop6}>
                          <img
                            className={styles.icon16}
                            alt=""
                            src="/icon10.svg"
                          />
                          <div className={styles.label38}>Link</div>
                          <div className={styles.badgenew}>
                            <div className={styles.basebadge4}>
                              <div className={styles.label9}>2</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.mobile10}>
                          <img
                            className={styles.icon1}
                            alt=""
                            src="/icon10.svg"
                          />
                          <div className={styles.label30}>Link</div>
                          <div className={styles.asteroidIndicator12}>
                            <div className={styles.basebadge}>
                              <div className={styles.label1}>2</div>
                            </div>
                          </div>
                        </div>
                        <img
                          className={styles.arrowDropDownIcon}
                          alt=""
                          src="/arrowdropdown.svg"
                        />
                      </div>
                      <div className={styles.border6} />
                    </div>
                    <div className={styles.asteroidIndicator1}>
                      <div className={styles.basebadge}>
                        <div className={styles.label1}>2</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.homeindicator}>
            <div className={styles.homeIndicator} />
          </div>
        </div>
      </div>
      <div className={styles.promptInputContainer}>
        <div className={styles.mainContainer1}>
          <div className={styles.generalContainer}>
            <div className={styles.inputComponentContainer}>
              <div className={styles.input}>
                <div className={styles.content}>
                  <img
                    className={styles.hourglass01Icon}
                    alt=""
                    src="/leadingicon.svg"
                  />
                  <div className={styles.text4}>Type here...</div>
                  <img
                    className={styles.hourglass01Icon}
                    alt=""
                    src="/trailingicon.svg"
                  />
                </div>
              </div>
            </div>
            <div className={styles.sendAction}>
              <img
                className={styles.hourglass01Icon}
                alt=""
                src="/arrowup.svg"
              />
            </div>
          </div>
          <div className={styles.hintTextWrapper}>
            <div className={styles.askYourQuestionsGetInstanWrapper}>
              <div className={styles.hintText1}>
                Nora Health is not a substitute for a physician. Please consult
                a doctor for any diagnosis.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GloriaStartingPage;
