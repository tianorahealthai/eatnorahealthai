import { FunctionComponent } from "react";
import Button from "../components/Button";
import ActionsContainer from "../components/ActionsContainer";
import OnboardingHeader from "../components/OnboardingHeader";
import styles from "./OnboardingWelcomeAndPrivacy.module.css";

const OnboardingWelcomeAndPrivacy: FunctionComponent = () => {
  return (
    <div className={styles.onboardingWelcomeAndPrivacy}>
      <div className={styles.mainContainer}>
        <div className={styles.chatMainContainer}>
          <div className={styles.container}>
            <div className={styles.aiContents}>
              <div className={styles.aiQuestion}>Welcome to Nora!</div>
              <div className={styles.aiQuestion1}>
                You’re going to love it here.
              </div>
            </div>
            <div className={styles.iconAndText}>
              <img
                className={styles.featuredIcon}
                alt=""
                src="/featured-icon.svg"
              />
              <div className={styles.aiContents1}>
                <div className={styles.aiQuestion2}>How does Nora work?</div>
                <div className={styles.aiQuestion3}>Small description</div>
              </div>
            </div>
            <div className={styles.iconAndText}>
              <img
                className={styles.featuredIcon}
                alt=""
                src="/featured-icon.svg"
              />
              <div className={styles.aiContents1}>
                <div className={styles.aiQuestion2}>How does Nora work?</div>
                <div className={styles.aiQuestion3}>Small description</div>
              </div>
            </div>
            <div className={styles.iconAndText}>
              <img
                className={styles.featuredIcon}
                alt=""
                src="/featured-icon.svg"
              />
              <div className={styles.aiContents1}>
                <div className={styles.aiQuestion2}>How does Nora work?</div>
                <div className={styles.aiQuestion3}>Small description</div>
              </div>
            </div>
            <Button
              hierarchy="Primary"
              icon="Default"
              size="md"
              state="Default"
              iconTrailing={false}
              iconLeading={false}
              buttonsButtonFlex="unset"
              buttonsButtonWidth="398px"
              buttonsButtonAlignSelf="unset"
              buttonsButtonHeight="unset"
              placeholder="/placeholder6.svg"
              placeholderIconOverflow="hidden"
              placeholderIconTransform="unset"
              text="Action"
              placeholder1="/placeholder6.svg"
              showButtonsButton={false}
            />
          </div>
        </div>
        <div className={styles.footer}>
          <div className={styles.footerLinks}>
            <div className={styles.termsLink}>{`Terms & Conditions`}</div>
            <div className={styles.privacyLink}>Privacy policy</div>
          </div>
          <div className={styles.checkboxAndText}>
            <div className={styles.checkbox}>
              <div className={styles.input}>
                <div className={styles.checkboxBase} />
              </div>
              <div className={styles.textAndSupportingText}>
                <div className={styles.text}>
                  I have read and accepted the terms and conditions and the
                  privacy policy
                </div>
                <div className={styles.supportingText}>
                  Save my login details for next time.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.buttonsbutton}>
        <img className={styles.bookmarkIcon} alt="" src="/bookmark.svg" />
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
                              src="/icon.svg"
                            />
                            <div className={styles.label}>Link</div>
                            <div className={styles.badgenew}>
                              <div className={styles.basebadge}>
                                <div className={styles.label1}>2</div>
                              </div>
                            </div>
                          </div>
                          <div className={styles.mobile}>
                            <img
                              className={styles.icon}
                              alt=""
                              src="/icon1.svg"
                            />
                            <div className={styles.label2}>Home</div>
                            <div className={styles.asteroidIndicator}>
                              <div className={styles.basebadge1}>
                                <div className={styles.label3}>2</div>
                              </div>
                            </div>
                          </div>
                          <img
                            className={styles.arrowDropDownIcon}
                            alt=""
                            src="/arrowdropdown.svg"
                          />
                        </div>
                        <div className={styles.border1} />
                      </div>
                      <div className={styles.asteroidIndicator1}>
                        <div className={styles.basebadge1}>
                          <div className={styles.label3}>2</div>
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
                              className={styles.icon2}
                              alt=""
                              src="/icon2.svg"
                            />
                            <div className={styles.label}>Link</div>
                            <div className={styles.badgenew}>
                              <div className={styles.basebadge}>
                                <div className={styles.label1}>2</div>
                              </div>
                            </div>
                          </div>
                          <div className={styles.mobile1}>
                            <img
                              className={styles.icon2}
                              alt=""
                              src="/icon2.svg"
                            />
                            <div className={styles.label2}>Discover</div>
                            <div className={styles.asteroidIndicator}>
                              <div className={styles.basebadge1}>
                                <div className={styles.label3}>2</div>
                              </div>
                            </div>
                          </div>
                          <img
                            className={styles.arrowDropDownIcon}
                            alt=""
                            src="/arrowdropdown.svg"
                          />
                        </div>
                        <div className={styles.border1} />
                      </div>
                      <div className={styles.asteroidIndicator1}>
                        <div className={styles.basebadge1}>
                          <div className={styles.label3}>2</div>
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
                              className={styles.icon2}
                              alt=""
                              src="/icon3.svg"
                            />
                            <div className={styles.label}>Link</div>
                            <div className={styles.badgenew}>
                              <div className={styles.basebadge}>
                                <div className={styles.label1}>2</div>
                              </div>
                            </div>
                          </div>
                          <div className={styles.mobile1}>
                            <img
                              className={styles.icon2}
                              alt=""
                              src="/icon3.svg"
                            />
                            <div className={styles.label2}>Conversations</div>
                            <div className={styles.asteroidIndicator}>
                              <div className={styles.basebadge1}>
                                <div className={styles.label3}>2</div>
                              </div>
                            </div>
                          </div>
                          <img
                            className={styles.arrowDropDownIcon}
                            alt=""
                            src="/arrowdropdown.svg"
                          />
                        </div>
                        <div className={styles.border1} />
                      </div>
                      <div className={styles.asteroidIndicator1}>
                        <div className={styles.basebadge1}>
                          <div className={styles.label3}>2</div>
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
                            <div className={styles.label}>Link</div>
                            <div className={styles.badgenew}>
                              <div className={styles.basebadge}>
                                <div className={styles.label1}>2</div>
                              </div>
                            </div>
                          </div>
                          <div className={styles.mobile1}>
                            <img
                              className={styles.icon}
                              alt=""
                              src="/icon5.svg"
                            />
                            <div className={styles.label2}>Researches</div>
                            <div className={styles.asteroidIndicator}>
                              <div className={styles.basebadge1}>
                                <div className={styles.label3}>2</div>
                              </div>
                            </div>
                          </div>
                          <img
                            className={styles.arrowDropDownIcon}
                            alt=""
                            src="/arrowdropdown.svg"
                          />
                        </div>
                        <div className={styles.border1} />
                      </div>
                      <div className={styles.asteroidIndicator1}>
                        <div className={styles.basebadge1}>
                          <div className={styles.label3}>2</div>
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
                              className={styles.icon2}
                              alt=""
                              src="/icon6.svg"
                            />
                            <div className={styles.label}>Link</div>
                            <div className={styles.badgenew}>
                              <div className={styles.basebadge}>
                                <div className={styles.label1}>2</div>
                              </div>
                            </div>
                          </div>
                          <div className={styles.mobile4}>
                            <img
                              className={styles.icon2}
                              alt=""
                              src="/icon7.svg"
                            />
                            <div className={styles.label22}>Symptoms</div>
                            <div className={styles.asteroidIndicator8}>
                              <div className={styles.basebadge1}>
                                <div className={styles.label3}>2</div>
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
                        <div className={styles.basebadge1}>
                          <div className={styles.label3}>2</div>
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
                              src="/icon8.svg"
                            />
                            <div className={styles.label}>Link</div>
                            <div className={styles.badgenew}>
                              <div className={styles.basebadge}>
                                <div className={styles.label1}>2</div>
                              </div>
                            </div>
                          </div>
                          <div className={styles.mobile}>
                            <img
                              className={styles.icon}
                              alt=""
                              src="/icon9.svg"
                            />
                            <div className={styles.label2}>Blog</div>
                            <div className={styles.asteroidIndicator}>
                              <div className={styles.basebadge1}>
                                <div className={styles.label3}>2</div>
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
                        <div className={styles.basebadge1}>
                          <div className={styles.label3}>2</div>
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
                              className={styles.icon12}
                              alt=""
                              src="/icon10.svg"
                            />
                            <div className={styles.label30}>Link</div>
                            <div className={styles.badgenew}>
                              <div className={styles.basebadge}>
                                <div className={styles.label1}>2</div>
                              </div>
                            </div>
                          </div>
                          <div className={styles.mobile6}>
                            <img
                              className={styles.icon2}
                              alt=""
                              src="/icon10.svg"
                            />
                            <div className={styles.label22}>Link</div>
                            <div className={styles.asteroidIndicator12}>
                              <div className={styles.basebadge1}>
                                <div className={styles.label3}>2</div>
                              </div>
                            </div>
                          </div>
                          <img
                            className={styles.arrowDropDownIcon}
                            alt=""
                            src="/arrowdropdown.svg"
                          />
                        </div>
                        <div className={styles.border7} />
                      </div>
                      <div className={styles.asteroidIndicator1}>
                        <div className={styles.basebadge1}>
                          <div className={styles.label3}>2</div>
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
                              className={styles.icon12}
                              alt=""
                              src="/icon10.svg"
                            />
                            <div className={styles.label30}>Link</div>
                            <div className={styles.badgenew}>
                              <div className={styles.basebadge}>
                                <div className={styles.label1}>2</div>
                              </div>
                            </div>
                          </div>
                          <div className={styles.mobile6}>
                            <img
                              className={styles.icon2}
                              alt=""
                              src="/icon10.svg"
                            />
                            <div className={styles.label22}>Link</div>
                            <div className={styles.asteroidIndicator12}>
                              <div className={styles.basebadge1}>
                                <div className={styles.label3}>2</div>
                              </div>
                            </div>
                          </div>
                          <img
                            className={styles.arrowDropDownIcon}
                            alt=""
                            src="/arrowdropdown.svg"
                          />
                        </div>
                        <div className={styles.border7} />
                      </div>
                      <div className={styles.asteroidIndicator1}>
                        <div className={styles.basebadge1}>
                          <div className={styles.label3}>2</div>
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
                              className={styles.icon12}
                              alt=""
                              src="/icon10.svg"
                            />
                            <div className={styles.label30}>Link</div>
                            <div className={styles.badgenew}>
                              <div className={styles.basebadge}>
                                <div className={styles.label1}>2</div>
                              </div>
                            </div>
                          </div>
                          <div className={styles.mobile6}>
                            <img
                              className={styles.icon2}
                              alt=""
                              src="/icon10.svg"
                            />
                            <div className={styles.label22}>Link</div>
                            <div className={styles.asteroidIndicator12}>
                              <div className={styles.basebadge1}>
                                <div className={styles.label3}>2</div>
                              </div>
                            </div>
                          </div>
                          <img
                            className={styles.arrowDropDownIcon}
                            alt=""
                            src="/arrowdropdown.svg"
                          />
                        </div>
                        <div className={styles.border7} />
                      </div>
                      <div className={styles.asteroidIndicator1}>
                        <div className={styles.basebadge1}>
                          <div className={styles.label3}>2</div>
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
                    <div className={styles.container2}>
                      <div className={styles.container3}>
                        <div className={styles.desktop6}>
                          <img
                            className={styles.icon12}
                            alt=""
                            src="/icon10.svg"
                          />
                          <div className={styles.label30}>Link</div>
                          <div className={styles.badgenew}>
                            <div className={styles.basebadge}>
                              <div className={styles.label1}>2</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.mobile6}>
                          <img
                            className={styles.icon2}
                            alt=""
                            src="/icon10.svg"
                          />
                          <div className={styles.label22}>Link</div>
                          <div className={styles.asteroidIndicator12}>
                            <div className={styles.basebadge1}>
                              <div className={styles.label3}>2</div>
                            </div>
                          </div>
                        </div>
                        <img
                          className={styles.arrowDropDownIcon}
                          alt=""
                          src="/arrowdropdown.svg"
                        />
                      </div>
                      <div className={styles.border7} />
                    </div>
                    <div className={styles.asteroidIndicator1}>
                      <div className={styles.basebadge1}>
                        <div className={styles.label3}>2</div>
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
                            className={styles.icon12}
                            alt=""
                            src="/icon10.svg"
                          />
                          <div className={styles.label30}>Link</div>
                          <div className={styles.badgenew}>
                            <div className={styles.basebadge}>
                              <div className={styles.label1}>2</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.mobile6}>
                          <img
                            className={styles.icon2}
                            alt=""
                            src="/icon10.svg"
                          />
                          <div className={styles.label22}>Link</div>
                          <div className={styles.asteroidIndicator12}>
                            <div className={styles.basebadge1}>
                              <div className={styles.label3}>2</div>
                            </div>
                          </div>
                        </div>
                        <img
                          className={styles.arrowDropDownIcon}
                          alt=""
                          src="/arrowdropdown.svg"
                        />
                      </div>
                      <div className={styles.border7} />
                    </div>
                    <div className={styles.asteroidIndicator1}>
                      <div className={styles.basebadge1}>
                        <div className={styles.label3}>2</div>
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
                            className={styles.icon12}
                            alt=""
                            src="/icon10.svg"
                          />
                          <div className={styles.label30}>Link</div>
                          <div className={styles.badgenew}>
                            <div className={styles.basebadge}>
                              <div className={styles.label1}>2</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.mobile6}>
                          <img
                            className={styles.icon2}
                            alt=""
                            src="/icon10.svg"
                          />
                          <div className={styles.label22}>Link</div>
                          <div className={styles.asteroidIndicator12}>
                            <div className={styles.basebadge1}>
                              <div className={styles.label3}>2</div>
                            </div>
                          </div>
                        </div>
                        <img
                          className={styles.arrowDropDownIcon}
                          alt=""
                          src="/arrowdropdown.svg"
                        />
                      </div>
                      <div className={styles.border7} />
                    </div>
                    <div className={styles.asteroidIndicator1}>
                      <div className={styles.basebadge1}>
                        <div className={styles.label3}>2</div>
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
                            className={styles.icon12}
                            alt=""
                            src="/icon10.svg"
                          />
                          <div className={styles.label30}>Link</div>
                          <div className={styles.badgenew}>
                            <div className={styles.basebadge}>
                              <div className={styles.label1}>2</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.mobile6}>
                          <img
                            className={styles.icon2}
                            alt=""
                            src="/icon10.svg"
                          />
                          <div className={styles.label22}>Link</div>
                          <div className={styles.asteroidIndicator12}>
                            <div className={styles.basebadge1}>
                              <div className={styles.label3}>2</div>
                            </div>
                          </div>
                        </div>
                        <img
                          className={styles.arrowDropDownIcon}
                          alt=""
                          src="/arrowdropdown.svg"
                        />
                      </div>
                      <div className={styles.border7} />
                    </div>
                    <div className={styles.asteroidIndicator1}>
                      <div className={styles.basebadge1}>
                        <div className={styles.label3}>2</div>
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
                            className={styles.icon12}
                            alt=""
                            src="/icon10.svg"
                          />
                          <div className={styles.label30}>Link</div>
                          <div className={styles.badgenew}>
                            <div className={styles.basebadge}>
                              <div className={styles.label1}>2</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.mobile6}>
                          <img
                            className={styles.icon2}
                            alt=""
                            src="/icon10.svg"
                          />
                          <div className={styles.label22}>Link</div>
                          <div className={styles.asteroidIndicator12}>
                            <div className={styles.basebadge1}>
                              <div className={styles.label3}>2</div>
                            </div>
                          </div>
                        </div>
                        <img
                          className={styles.arrowDropDownIcon}
                          alt=""
                          src="/arrowdropdown.svg"
                        />
                      </div>
                      <div className={styles.border7} />
                    </div>
                    <div className={styles.asteroidIndicator1}>
                      <div className={styles.basebadge1}>
                        <div className={styles.label3}>2</div>
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
                            className={styles.icon12}
                            alt=""
                            src="/icon10.svg"
                          />
                          <div className={styles.label30}>Link</div>
                          <div className={styles.badgenew}>
                            <div className={styles.basebadge}>
                              <div className={styles.label1}>2</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.mobile6}>
                          <img
                            className={styles.icon2}
                            alt=""
                            src="/icon10.svg"
                          />
                          <div className={styles.label22}>Link</div>
                          <div className={styles.asteroidIndicator12}>
                            <div className={styles.basebadge1}>
                              <div className={styles.label3}>2</div>
                            </div>
                          </div>
                        </div>
                        <img
                          className={styles.arrowDropDownIcon}
                          alt=""
                          src="/arrowdropdown.svg"
                        />
                      </div>
                      <div className={styles.border7} />
                    </div>
                    <div className={styles.asteroidIndicator1}>
                      <div className={styles.basebadge1}>
                        <div className={styles.label3}>2</div>
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
                            className={styles.icon12}
                            alt=""
                            src="/icon10.svg"
                          />
                          <div className={styles.label30}>Link</div>
                          <div className={styles.badgenew}>
                            <div className={styles.basebadge}>
                              <div className={styles.label1}>2</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.mobile6}>
                          <img
                            className={styles.icon2}
                            alt=""
                            src="/icon10.svg"
                          />
                          <div className={styles.label22}>Link</div>
                          <div className={styles.asteroidIndicator12}>
                            <div className={styles.basebadge1}>
                              <div className={styles.label3}>2</div>
                            </div>
                          </div>
                        </div>
                        <img
                          className={styles.arrowDropDownIcon}
                          alt=""
                          src="/arrowdropdown.svg"
                        />
                      </div>
                      <div className={styles.border7} />
                    </div>
                    <div className={styles.asteroidIndicator1}>
                      <div className={styles.basebadge1}>
                        <div className={styles.label3}>2</div>
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
                            className={styles.icon12}
                            alt=""
                            src="/icon10.svg"
                          />
                          <div className={styles.label30}>Link</div>
                          <div className={styles.badgenew}>
                            <div className={styles.basebadge}>
                              <div className={styles.label1}>2</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.mobile6}>
                          <img
                            className={styles.icon2}
                            alt=""
                            src="/icon10.svg"
                          />
                          <div className={styles.label22}>Link</div>
                          <div className={styles.asteroidIndicator12}>
                            <div className={styles.basebadge1}>
                              <div className={styles.label3}>2</div>
                            </div>
                          </div>
                        </div>
                        <img
                          className={styles.arrowDropDownIcon}
                          alt=""
                          src="/arrowdropdown.svg"
                        />
                      </div>
                      <div className={styles.border7} />
                    </div>
                    <div className={styles.asteroidIndicator1}>
                      <div className={styles.basebadge1}>
                        <div className={styles.label3}>2</div>
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

export default OnboardingWelcomeAndPrivacy;
