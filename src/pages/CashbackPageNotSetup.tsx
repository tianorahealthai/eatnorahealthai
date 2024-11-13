import { FunctionComponent } from "react";
import CashbackStepContainer from "../components/CashbackStepContainer";
import Tabbar from "../components/Tabbar";
import styles from "./CashbackPageNotSetup.module.css";

const CashbackPageNotSetup: FunctionComponent = () => {
  return (
    <div className={styles.cashbackPageNotSetup}>
      <div className={styles.mainContainer}>
        <div className={styles.mainContentContainer}>
          <div className={styles.pageTitleContainer}>
            <div className={styles.pageTitle}>
              Last steps to redeem your first $15 welcome bonus + 10% cashback
              🎉
            </div>
          </div>
          <CashbackStepContainer
            cashbackStepLabel="STEP 1"
            cashbackStepTitle="Enter your Venmo"
            cashbackStepDescription="Let us Venmo you when you eat healthy and upload the receipt"
            hierarchy="Primary"
            showButtonsButton1
            iconLeading={false}
            iconTrailing
          />
          <CashbackStepContainer
            cashbackStepContainerGap="8px"
            cashbackStepLabel="STEP 2"
            cashbackStepTitle="Upload a receipt"
            cashbackStepDescription="Upload a receipt when you eat healthy so we know when to Venmo you"
            hierarchy="Primary"
            showButtonsButton1
            iconLeading
            iconTrailing={false}
          />
        </div>
      </div>
      <Tabbar page="Cashback" />
      <div className={styles.appHeader}>
        <div className={styles.noraLogo}>
          <div className={styles.logo}>
            <img className={styles.clipPathGroup} alt="" />
            <img className={styles.vectorIcon} alt="" />
          </div>
        </div>
        <div className={styles.actions}>
          <div className={styles.buttonsbutton}>
            <img className={styles.helpCircleIcon} alt="" />
          </div>
          <div className={styles.buttonsbutton}>
            <img className={styles.helpCircleIcon} alt="" />
          </div>
          <div className={styles.buttonsbutton2}>
            <img
              className={styles.helpCircleIcon}
              alt=""
              src="/infocircle.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.tabbar}>
        <div className={styles.asteroidTabbar}>
          <div className={styles.container}>
            <div className={styles.secondary}>
              <div className={styles.basenavbarnavsecondary}>
                <div className={styles.asteroidNav}>
                  <div className={styles.item11}>
                    <div className={styles.basenavitem}>
                      <div className={styles.container1}>
                        <div className={styles.container2}>
                          <div className={styles.desktop}>
                            <img
                              className={styles.icon}
                              alt=""
                              src="/icon11.svg"
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
                              src="/icon11.svg"
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
                        <div className={styles.border} />
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
                      <div className={styles.container1}>
                        <div className={styles.container2}>
                          <div className={styles.desktop}>
                            <img
                              className={styles.icon2}
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
                              className={styles.icon2}
                              alt=""
                              src="/icon12.svg"
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
                        <div className={styles.border} />
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
                      <div className={styles.container1}>
                        <div className={styles.container2}>
                          <div className={styles.desktop}>
                            <img
                              className={styles.icon2}
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
                              className={styles.icon2}
                              alt=""
                              src="/icon12.svg"
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
                        <div className={styles.border} />
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
                      <div className={styles.container1}>
                        <div className={styles.container2}>
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
                              src="/icon12.svg"
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
                        <div className={styles.border} />
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
                      <div className={styles.container1}>
                        <div className={styles.container2}>
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
                        <div className={styles.border4} />
                      </div>
                      <div className={styles.asteroidIndicator1}>
                        <div className={styles.basebadge1}>
                          <div className={styles.label3}>2</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.item03}>
                    <div className={styles.basenavitem}>
                      <div className={styles.container1}>
                        <div className={styles.container2}>
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
                              src="/icon13.svg"
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
                        <div className={styles.border5} />
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
                      <div className={styles.container1}>
                        <div className={styles.container2}>
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
                      <div className={styles.container1}>
                        <div className={styles.container2}>
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
                      <div className={styles.container1}>
                        <div className={styles.container2}>
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
                        <div className={styles.border6} />
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
              <div className={styles.noraLogo}>
                <div className={styles.nav1}>
                  <div className={styles.basenavitem6}>
                    <div className={styles.container1}>
                      <div className={styles.container2}>
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
                      <div className={styles.border6} />
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
                    <div className={styles.container1}>
                      <div className={styles.container2}>
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
                      <div className={styles.border6} />
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
                    <div className={styles.container1}>
                      <div className={styles.container2}>
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
                      <div className={styles.border6} />
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
                    <div className={styles.container1}>
                      <div className={styles.container2}>
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
                      <div className={styles.border6} />
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
                    <div className={styles.container1}>
                      <div className={styles.container2}>
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
                      <div className={styles.border6} />
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
                    <div className={styles.container1}>
                      <div className={styles.container2}>
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
                      <div className={styles.border6} />
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
                    <div className={styles.container1}>
                      <div className={styles.container2}>
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
                      <div className={styles.border6} />
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
                    <div className={styles.container1}>
                      <div className={styles.container2}>
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
                      <div className={styles.border6} />
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
          <div className={styles.homeindicator}>
            <div className={styles.homeIndicator} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CashbackPageNotSetup;
