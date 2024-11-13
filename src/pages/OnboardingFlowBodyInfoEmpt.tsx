import { FunctionComponent } from "react";
import ProgressBar from "../components/ProgressBar";
import ActionsContainer from "../components/ActionsContainer";
import OnboardingHeader from "../components/OnboardingHeader";
import styles from "./OnboardingFlowBodyInfoEmpt.module.css";

const OnboardingFlowBodyInfoEmpt: FunctionComponent = () => {
  return (
    <div className={styles.onboardingFlowBodyInfoEmpt}>
      <div className={styles.onboardingMainContainer}>
        <ProgressBar
          label={false}
          progress="20%"
          progressBarAlignSelf="unset"
          progressBarWidth="398px"
        />
        <div className={styles.questionMainContainer}>
          <div className={styles.questionContainer}>
            <div className={styles.question}>
              Ok Tia, let’s create your custom plan
            </div>
            <div className={styles.subHeading}>
              This will be used to calibrate your custom plan
            </div>
          </div>
          <div className={styles.optionsContainer}>
            <div className={styles.labelParent}>
              <div className={styles.label}>What is your gender?</div>
              <div className={styles.checkboxGroupItemParent}>
                <div className={styles.checkboxGroupItem}>
                  <div className={styles.content}>
                    <div className={styles.input}>
                      <div className={styles.checkboxBase} />
                    </div>
                    <div className={styles.textAndSupportingText}>
                      <div className={styles.textAndSubtext}>
                        <i className={styles.text}>Male</i>
                        <i className={styles.subtext}>$10/month</i>
                      </div>
                      <div className={styles.supportingText}>
                        Includes up to 10 users, 20GB individual data and access
                        to all features.
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.checkboxGroupItem}>
                  <div className={styles.content}>
                    <div className={styles.input}>
                      <div className={styles.checkboxBase} />
                    </div>
                    <div className={styles.textAndSupportingText}>
                      <div className={styles.textAndSubtext}>
                        <i className={styles.text}>Female</i>
                        <i className={styles.subtext}>$20/month</i>
                      </div>
                      <div className={styles.includesUpTo}>
                        Includes up to 20 users, 40GB individual data and access
                        to all features.
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.checkboxGroupItem}>
                  <div className={styles.content}>
                    <div className={styles.input}>
                      <div className={styles.checkboxBase} />
                    </div>
                    <div className={styles.textAndSupportingText}>
                      <div className={styles.textAndSubtext}>
                        <i className={styles.text}>Other</i>
                        <i className={styles.subtext}>$40/month</i>
                      </div>
                      <div className={styles.includesUpTo}>
                        Unlimited users, unlimited individual data and access to
                        all features.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.inputField}>
              <div className={styles.inputWithLabel}>
                <div className={styles.text}>How old are you?</div>
                <div className={styles.input3}>
                  <div className={styles.content3}>
                    <div className={styles.text3}>33</div>
                  </div>
                  <img className={styles.helpIcon} alt="" />
                </div>
              </div>
              <div className={styles.hintText}>
                This is a hint text to help user.
              </div>
            </div>
            <div className={styles.inputField}>
              <div className={styles.inputWithLabel}>
                <div className={styles.text}>What is your height?</div>
                <div className={styles.input4}>
                  <div className={styles.content4}>
                    <div className={styles.textInput}>
                      <div className={styles.leadingText}>$</div>
                      <div className={styles.text4}>185</div>
                    </div>
                    <img className={styles.helpIcon} alt="" />
                  </div>
                  <div className={styles.dropdown}>
                    <div className={styles.dropdownText}>cm</div>
                    <img
                      className={styles.chevronDownIcon}
                      alt=""
                      src="/chevrondown.svg"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.hintText}>
                This is a hint text to help user.
              </div>
            </div>
          </div>
        </div>
      </div>
      <ActionsContainer
        hasBackButton={false}
        actionsContainerBottom="34px"
        showButtonsButton={false}
        showButtonsButton1
        iconLeading={false}
        iconTrailing={false}
      />
      <OnboardingHeader
        isStartingPoint={false}
        onboardingHeaderLeft="calc(50% - 215px)"
        onboardingHeaderRight="unset"
        showActions
        onboardingHeaderTop="55px"
        clipPathGroup="/clip-path-group.svg"
        vector="/vector.svg"
      />
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
      <div className={styles.homeindicator}>
        <div className={styles.homeIndicator} />
      </div>
      <div className={styles.tabbar}>
        <div className={styles.asteroidTabbar}>
          <div className={styles.container}>
            <div className={styles.secondary}>
              <div className={styles.basenavbarnavsecondary}>
                <div className={styles.asteroidNav}>
                  <div className={styles.item11}>
                    <div className={styles.basenavitem}>
                      <div className={styles.textAndSupportingText}>
                        <div className={styles.container2}>
                          <div className={styles.desktop}>
                            <img
                              className={styles.icon}
                              alt=""
                              src="/icon11.svg"
                            />
                            <div className={styles.label3}>Link</div>
                            <div className={styles.badgenew}>
                              <div className={styles.basebadge}>
                                <div className={styles.label4}>2</div>
                              </div>
                            </div>
                          </div>
                          <div className={styles.mobile}>
                            <img
                              className={styles.icon}
                              alt=""
                              src="/icon11.svg"
                            />
                            <div className={styles.label5}>Home</div>
                            <div className={styles.asteroidIndicator}>
                              <div className={styles.basebadge1}>
                                <div className={styles.label6}>2</div>
                              </div>
                            </div>
                          </div>
                          <img
                            className={styles.helpIcon}
                            alt=""
                            src="/arrowdropdown.svg"
                          />
                        </div>
                        <div className={styles.border1} />
                      </div>
                      <div className={styles.asteroidIndicator1}>
                        <div className={styles.basebadge1}>
                          <div className={styles.label6}>2</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.item04}>
                    <div className={styles.basenavitem}>
                      <div className={styles.textAndSupportingText}>
                        <div className={styles.container2}>
                          <div className={styles.desktop}>
                            <img
                              className={styles.icon2}
                              alt=""
                              src="/icon4.svg"
                            />
                            <div className={styles.label3}>Link</div>
                            <div className={styles.badgenew}>
                              <div className={styles.basebadge}>
                                <div className={styles.label4}>2</div>
                              </div>
                            </div>
                          </div>
                          <div className={styles.mobile1}>
                            <img
                              className={styles.icon2}
                              alt=""
                              src="/icon12.svg"
                            />
                            <div className={styles.label5}>Discover</div>
                            <div className={styles.asteroidIndicator}>
                              <div className={styles.basebadge1}>
                                <div className={styles.label6}>2</div>
                              </div>
                            </div>
                          </div>
                          <img
                            className={styles.helpIcon}
                            alt=""
                            src="/arrowdropdown.svg"
                          />
                        </div>
                        <div className={styles.border1} />
                      </div>
                      <div className={styles.asteroidIndicator1}>
                        <div className={styles.basebadge1}>
                          <div className={styles.label6}>2</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.item9}>
                    <div className={styles.basenavitem}>
                      <div className={styles.textAndSupportingText}>
                        <div className={styles.container2}>
                          <div className={styles.desktop}>
                            <img
                              className={styles.icon2}
                              alt=""
                              src="/icon4.svg"
                            />
                            <div className={styles.label3}>Link</div>
                            <div className={styles.badgenew}>
                              <div className={styles.basebadge}>
                                <div className={styles.label4}>2</div>
                              </div>
                            </div>
                          </div>
                          <div className={styles.mobile1}>
                            <img
                              className={styles.icon2}
                              alt=""
                              src="/icon12.svg"
                            />
                            <div className={styles.label5}>Conversations</div>
                            <div className={styles.asteroidIndicator}>
                              <div className={styles.basebadge1}>
                                <div className={styles.label6}>2</div>
                              </div>
                            </div>
                          </div>
                          <img
                            className={styles.helpIcon}
                            alt=""
                            src="/arrowdropdown.svg"
                          />
                        </div>
                        <div className={styles.border1} />
                      </div>
                      <div className={styles.asteroidIndicator1}>
                        <div className={styles.basebadge1}>
                          <div className={styles.label6}>2</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.item10}>
                    <div className={styles.basenavitem}>
                      <div className={styles.textAndSupportingText}>
                        <div className={styles.container2}>
                          <div className={styles.desktop}>
                            <img
                              className={styles.icon}
                              alt=""
                              src="/icon4.svg"
                            />
                            <div className={styles.label3}>Link</div>
                            <div className={styles.badgenew}>
                              <div className={styles.basebadge}>
                                <div className={styles.label4}>2</div>
                              </div>
                            </div>
                          </div>
                          <div className={styles.mobile1}>
                            <img
                              className={styles.icon}
                              alt=""
                              src="/icon12.svg"
                            />
                            <div className={styles.label5}>Researches</div>
                            <div className={styles.asteroidIndicator}>
                              <div className={styles.basebadge1}>
                                <div className={styles.label6}>2</div>
                              </div>
                            </div>
                          </div>
                          <img
                            className={styles.helpIcon}
                            alt=""
                            src="/arrowdropdown.svg"
                          />
                        </div>
                        <div className={styles.border1} />
                      </div>
                      <div className={styles.asteroidIndicator1}>
                        <div className={styles.basebadge1}>
                          <div className={styles.label6}>2</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.item02}>
                    <div className={styles.basenavitem4}>
                      <div className={styles.textAndSupportingText}>
                        <div className={styles.container2}>
                          <div className={styles.desktop}>
                            <img
                              className={styles.icon2}
                              alt=""
                              src="/icon6.svg"
                            />
                            <div className={styles.label3}>Link</div>
                            <div className={styles.badgenew}>
                              <div className={styles.basebadge}>
                                <div className={styles.label4}>2</div>
                              </div>
                            </div>
                          </div>
                          <div className={styles.mobile4}>
                            <img
                              className={styles.icon2}
                              alt=""
                              src="/icon7.svg"
                            />
                            <div className={styles.label25}>Symptoms</div>
                            <div className={styles.asteroidIndicator8}>
                              <div className={styles.basebadge1}>
                                <div className={styles.label6}>2</div>
                              </div>
                            </div>
                          </div>
                          <img
                            className={styles.helpIcon}
                            alt=""
                            src="/arrowdropdown.svg"
                          />
                        </div>
                        <div className={styles.border5} />
                      </div>
                      <div className={styles.asteroidIndicator1}>
                        <div className={styles.basebadge1}>
                          <div className={styles.label6}>2</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.item03}>
                    <div className={styles.basenavitem}>
                      <div className={styles.textAndSupportingText}>
                        <div className={styles.container2}>
                          <div className={styles.desktop}>
                            <img
                              className={styles.icon}
                              alt=""
                              src="/icon8.svg"
                            />
                            <div className={styles.label3}>Link</div>
                            <div className={styles.badgenew}>
                              <div className={styles.basebadge}>
                                <div className={styles.label4}>2</div>
                              </div>
                            </div>
                          </div>
                          <div className={styles.mobile}>
                            <img
                              className={styles.icon}
                              alt=""
                              src="/icon13.svg"
                            />
                            <div className={styles.label5}>Blog</div>
                            <div className={styles.asteroidIndicator}>
                              <div className={styles.basebadge1}>
                                <div className={styles.label6}>2</div>
                              </div>
                            </div>
                          </div>
                          <img
                            className={styles.helpIcon}
                            alt=""
                            src="/arrowdropdown.svg"
                          />
                        </div>
                        <div className={styles.border6} />
                      </div>
                      <div className={styles.asteroidIndicator1}>
                        <div className={styles.basebadge1}>
                          <div className={styles.label6}>2</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.item06}>
                    <div className={styles.basenavitem6}>
                      <div className={styles.textAndSupportingText}>
                        <div className={styles.container2}>
                          <div className={styles.desktop6}>
                            <img
                              className={styles.icon12}
                              alt=""
                              src="/icon10.svg"
                            />
                            <div className={styles.label33}>Link</div>
                            <div className={styles.badgenew}>
                              <div className={styles.basebadge}>
                                <div className={styles.label4}>2</div>
                              </div>
                            </div>
                          </div>
                          <div className={styles.mobile6}>
                            <img
                              className={styles.icon2}
                              alt=""
                              src="/icon10.svg"
                            />
                            <div className={styles.label25}>Link</div>
                            <div className={styles.asteroidIndicator12}>
                              <div className={styles.basebadge1}>
                                <div className={styles.label6}>2</div>
                              </div>
                            </div>
                          </div>
                          <img
                            className={styles.helpIcon}
                            alt=""
                            src="/arrowdropdown.svg"
                          />
                        </div>
                        <div className={styles.border7} />
                      </div>
                      <div className={styles.asteroidIndicator1}>
                        <div className={styles.basebadge1}>
                          <div className={styles.label6}>2</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.item06}>
                    <div className={styles.basenavitem6}>
                      <div className={styles.textAndSupportingText}>
                        <div className={styles.container2}>
                          <div className={styles.desktop6}>
                            <img
                              className={styles.icon12}
                              alt=""
                              src="/icon10.svg"
                            />
                            <div className={styles.label33}>Link</div>
                            <div className={styles.badgenew}>
                              <div className={styles.basebadge}>
                                <div className={styles.label4}>2</div>
                              </div>
                            </div>
                          </div>
                          <div className={styles.mobile6}>
                            <img
                              className={styles.icon2}
                              alt=""
                              src="/icon10.svg"
                            />
                            <div className={styles.label25}>Link</div>
                            <div className={styles.asteroidIndicator12}>
                              <div className={styles.basebadge1}>
                                <div className={styles.label6}>2</div>
                              </div>
                            </div>
                          </div>
                          <img
                            className={styles.helpIcon}
                            alt=""
                            src="/arrowdropdown.svg"
                          />
                        </div>
                        <div className={styles.border7} />
                      </div>
                      <div className={styles.asteroidIndicator1}>
                        <div className={styles.basebadge1}>
                          <div className={styles.label6}>2</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.item06}>
                    <div className={styles.basenavitem6}>
                      <div className={styles.textAndSupportingText}>
                        <div className={styles.container2}>
                          <div className={styles.desktop6}>
                            <img
                              className={styles.icon12}
                              alt=""
                              src="/icon10.svg"
                            />
                            <div className={styles.label33}>Link</div>
                            <div className={styles.badgenew}>
                              <div className={styles.basebadge}>
                                <div className={styles.label4}>2</div>
                              </div>
                            </div>
                          </div>
                          <div className={styles.mobile6}>
                            <img
                              className={styles.icon2}
                              alt=""
                              src="/icon10.svg"
                            />
                            <div className={styles.label25}>Link</div>
                            <div className={styles.asteroidIndicator12}>
                              <div className={styles.basebadge1}>
                                <div className={styles.label6}>2</div>
                              </div>
                            </div>
                          </div>
                          <img
                            className={styles.helpIcon}
                            alt=""
                            src="/arrowdropdown.svg"
                          />
                        </div>
                        <div className={styles.border7} />
                      </div>
                      <div className={styles.asteroidIndicator1}>
                        <div className={styles.basebadge1}>
                          <div className={styles.label6}>2</div>
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
              <div className={styles.asteroidNav1}>
                <div className={styles.nav1}>
                  <div className={styles.basenavitem6}>
                    <div className={styles.textAndSupportingText}>
                      <div className={styles.container2}>
                        <div className={styles.desktop6}>
                          <img
                            className={styles.icon12}
                            alt=""
                            src="/icon10.svg"
                          />
                          <div className={styles.label33}>Link</div>
                          <div className={styles.badgenew}>
                            <div className={styles.basebadge}>
                              <div className={styles.label4}>2</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.mobile6}>
                          <img
                            className={styles.icon2}
                            alt=""
                            src="/icon10.svg"
                          />
                          <div className={styles.label25}>Link</div>
                          <div className={styles.asteroidIndicator12}>
                            <div className={styles.basebadge1}>
                              <div className={styles.label6}>2</div>
                            </div>
                          </div>
                        </div>
                        <img
                          className={styles.helpIcon}
                          alt=""
                          src="/arrowdropdown.svg"
                        />
                      </div>
                      <div className={styles.border7} />
                    </div>
                    <div className={styles.asteroidIndicator1}>
                      <div className={styles.basebadge1}>
                        <div className={styles.label6}>2</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.nav1}>
                  <div className={styles.basenavitem6}>
                    <div className={styles.textAndSupportingText}>
                      <div className={styles.container2}>
                        <div className={styles.desktop6}>
                          <img
                            className={styles.icon12}
                            alt=""
                            src="/icon10.svg"
                          />
                          <div className={styles.label33}>Link</div>
                          <div className={styles.badgenew}>
                            <div className={styles.basebadge}>
                              <div className={styles.label4}>2</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.mobile6}>
                          <img
                            className={styles.icon2}
                            alt=""
                            src="/icon10.svg"
                          />
                          <div className={styles.label25}>Link</div>
                          <div className={styles.asteroidIndicator12}>
                            <div className={styles.basebadge1}>
                              <div className={styles.label6}>2</div>
                            </div>
                          </div>
                        </div>
                        <img
                          className={styles.helpIcon}
                          alt=""
                          src="/arrowdropdown.svg"
                        />
                      </div>
                      <div className={styles.border7} />
                    </div>
                    <div className={styles.asteroidIndicator1}>
                      <div className={styles.basebadge1}>
                        <div className={styles.label6}>2</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.nav1}>
                  <div className={styles.basenavitem6}>
                    <div className={styles.textAndSupportingText}>
                      <div className={styles.container2}>
                        <div className={styles.desktop6}>
                          <img
                            className={styles.icon12}
                            alt=""
                            src="/icon10.svg"
                          />
                          <div className={styles.label33}>Link</div>
                          <div className={styles.badgenew}>
                            <div className={styles.basebadge}>
                              <div className={styles.label4}>2</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.mobile6}>
                          <img
                            className={styles.icon2}
                            alt=""
                            src="/icon10.svg"
                          />
                          <div className={styles.label25}>Link</div>
                          <div className={styles.asteroidIndicator12}>
                            <div className={styles.basebadge1}>
                              <div className={styles.label6}>2</div>
                            </div>
                          </div>
                        </div>
                        <img
                          className={styles.helpIcon}
                          alt=""
                          src="/arrowdropdown.svg"
                        />
                      </div>
                      <div className={styles.border7} />
                    </div>
                    <div className={styles.asteroidIndicator1}>
                      <div className={styles.basebadge1}>
                        <div className={styles.label6}>2</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.nav1}>
                  <div className={styles.basenavitem6}>
                    <div className={styles.textAndSupportingText}>
                      <div className={styles.container2}>
                        <div className={styles.desktop6}>
                          <img
                            className={styles.icon12}
                            alt=""
                            src="/icon10.svg"
                          />
                          <div className={styles.label33}>Link</div>
                          <div className={styles.badgenew}>
                            <div className={styles.basebadge}>
                              <div className={styles.label4}>2</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.mobile6}>
                          <img
                            className={styles.icon2}
                            alt=""
                            src="/icon10.svg"
                          />
                          <div className={styles.label25}>Link</div>
                          <div className={styles.asteroidIndicator12}>
                            <div className={styles.basebadge1}>
                              <div className={styles.label6}>2</div>
                            </div>
                          </div>
                        </div>
                        <img
                          className={styles.helpIcon}
                          alt=""
                          src="/arrowdropdown.svg"
                        />
                      </div>
                      <div className={styles.border7} />
                    </div>
                    <div className={styles.asteroidIndicator1}>
                      <div className={styles.basebadge1}>
                        <div className={styles.label6}>2</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.nav1}>
                  <div className={styles.basenavitem6}>
                    <div className={styles.textAndSupportingText}>
                      <div className={styles.container2}>
                        <div className={styles.desktop6}>
                          <img
                            className={styles.icon12}
                            alt=""
                            src="/icon10.svg"
                          />
                          <div className={styles.label33}>Link</div>
                          <div className={styles.badgenew}>
                            <div className={styles.basebadge}>
                              <div className={styles.label4}>2</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.mobile6}>
                          <img
                            className={styles.icon2}
                            alt=""
                            src="/icon10.svg"
                          />
                          <div className={styles.label25}>Link</div>
                          <div className={styles.asteroidIndicator12}>
                            <div className={styles.basebadge1}>
                              <div className={styles.label6}>2</div>
                            </div>
                          </div>
                        </div>
                        <img
                          className={styles.helpIcon}
                          alt=""
                          src="/arrowdropdown.svg"
                        />
                      </div>
                      <div className={styles.border7} />
                    </div>
                    <div className={styles.asteroidIndicator1}>
                      <div className={styles.basebadge1}>
                        <div className={styles.label6}>2</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.nav1}>
                  <div className={styles.basenavitem6}>
                    <div className={styles.textAndSupportingText}>
                      <div className={styles.container2}>
                        <div className={styles.desktop6}>
                          <img
                            className={styles.icon12}
                            alt=""
                            src="/icon10.svg"
                          />
                          <div className={styles.label33}>Link</div>
                          <div className={styles.badgenew}>
                            <div className={styles.basebadge}>
                              <div className={styles.label4}>2</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.mobile6}>
                          <img
                            className={styles.icon2}
                            alt=""
                            src="/icon10.svg"
                          />
                          <div className={styles.label25}>Link</div>
                          <div className={styles.asteroidIndicator12}>
                            <div className={styles.basebadge1}>
                              <div className={styles.label6}>2</div>
                            </div>
                          </div>
                        </div>
                        <img
                          className={styles.helpIcon}
                          alt=""
                          src="/arrowdropdown.svg"
                        />
                      </div>
                      <div className={styles.border7} />
                    </div>
                    <div className={styles.asteroidIndicator1}>
                      <div className={styles.basebadge1}>
                        <div className={styles.label6}>2</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.nav1}>
                  <div className={styles.basenavitem6}>
                    <div className={styles.textAndSupportingText}>
                      <div className={styles.container2}>
                        <div className={styles.desktop6}>
                          <img
                            className={styles.icon12}
                            alt=""
                            src="/icon10.svg"
                          />
                          <div className={styles.label33}>Link</div>
                          <div className={styles.badgenew}>
                            <div className={styles.basebadge}>
                              <div className={styles.label4}>2</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.mobile6}>
                          <img
                            className={styles.icon2}
                            alt=""
                            src="/icon10.svg"
                          />
                          <div className={styles.label25}>Link</div>
                          <div className={styles.asteroidIndicator12}>
                            <div className={styles.basebadge1}>
                              <div className={styles.label6}>2</div>
                            </div>
                          </div>
                        </div>
                        <img
                          className={styles.helpIcon}
                          alt=""
                          src="/arrowdropdown.svg"
                        />
                      </div>
                      <div className={styles.border7} />
                    </div>
                    <div className={styles.asteroidIndicator1}>
                      <div className={styles.basebadge1}>
                        <div className={styles.label6}>2</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.nav1}>
                  <div className={styles.basenavitem6}>
                    <div className={styles.textAndSupportingText}>
                      <div className={styles.container2}>
                        <div className={styles.desktop6}>
                          <img
                            className={styles.icon12}
                            alt=""
                            src="/icon10.svg"
                          />
                          <div className={styles.label33}>Link</div>
                          <div className={styles.badgenew}>
                            <div className={styles.basebadge}>
                              <div className={styles.label4}>2</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.mobile6}>
                          <img
                            className={styles.icon2}
                            alt=""
                            src="/icon10.svg"
                          />
                          <div className={styles.label25}>Link</div>
                          <div className={styles.asteroidIndicator12}>
                            <div className={styles.basebadge1}>
                              <div className={styles.label6}>2</div>
                            </div>
                          </div>
                        </div>
                        <img
                          className={styles.helpIcon}
                          alt=""
                          src="/arrowdropdown.svg"
                        />
                      </div>
                      <div className={styles.border7} />
                    </div>
                    <div className={styles.asteroidIndicator1}>
                      <div className={styles.basebadge1}>
                        <div className={styles.label6}>2</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.homeindicator1}>
            <div className={styles.homeIndicator} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnboardingFlowBodyInfoEmpt;
