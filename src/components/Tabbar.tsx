import { FunctionComponent } from "react";
import NavItem from "./NavItem";
import styles from "./Tabbar.module.css";

export type TabbarType = {
  className?: string;

  /** Variant props */
  page?: "Conversations";
};

const Tabbar: FunctionComponent<TabbarType> = ({
  className = "",
  page = "Conversations",
}) => {
  return (
    <div className={[styles.root, className].join(" ")} data-page={page}>
      <div className={styles.container16}>
        <NavItem
          isSelected
          viewport="Mobile"
          icon="/icon14.svg"
          label="Home"
          label1="Home"
          label2="Home"
        />
        <div className={styles.item04}>
          <div className={styles.basenavitem}>
            <div className={styles.container1}>
              <div className={styles.container}>
                <div className={styles.desktop}>
                  <img className={styles.icon} alt="" src="/icon15@2x.png" />
                  <div className={styles.label}>Link</div>
                  <div className={styles.badgenew}>
                    <div className={styles.basebadge}>
                      <div className={styles.label1}>2</div>
                    </div>
                  </div>
                </div>
                <div className={styles.mobile}>
                  <img className={styles.icon1} alt="" src="/icon16@2x.png" />
                  <div className={styles.label2}>Health Profile</div>
                  <div className={styles.asteroidIndicator}>
                    <div className={styles.basebadge1}>
                      <div className={styles.label3}>2</div>
                    </div>
                  </div>
                </div>
                <img
                  className={styles.arrowDropDownIcon}
                  alt=""
                  src="/arrowdropdown1.svg"
                />
              </div>
              <div className={styles.border} />
            </div>
            <div className={styles.asteroidIndicator1}>
              <div className={styles.basebadge2}>
                <div className={styles.label4}>2</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.item11}>
          <div className={styles.basenavitem1}>
            <div className={styles.container3}>
              <div className={styles.container2}>
                <div className={styles.desktop1}>
                  <img className={styles.icon2} alt="" src="/icon17.svg" />
                  <div className={styles.label5}>Link</div>
                  <div className={styles.badgenew1}>
                    <div className={styles.basebadge3}>
                      <div className={styles.label6}>2</div>
                    </div>
                  </div>
                </div>
                <div className={styles.mobile1}>
                  <img className={styles.icon3} alt="" src="/icon18.svg" />
                  <div className={styles.label7}>Marketplace</div>
                  <div className={styles.asteroidIndicator2}>
                    <div className={styles.basebadge4}>
                      <div className={styles.label8}>2</div>
                    </div>
                  </div>
                </div>
                <img
                  className={styles.arrowDropDownIcon1}
                  alt=""
                  src="/arrowdropdown1.svg"
                />
              </div>
              <div className={styles.border1} />
            </div>
            <div className={styles.asteroidIndicator3}>
              <div className={styles.basebadge5}>
                <div className={styles.label9}>2</div>
              </div>
            </div>
          </div>
        </div>
        <NavItem
          isSelected={false}
          viewport="Mobile"
          icon="/icon19.svg"
          iconOverflow="unset"
          label="Meals"
          baseBadgeBackgroundColor="#f1f0ee"
          label1="Meals"
          label2="Meals"
          navItemFlex="0.6784"
        />
        <NavItem
          isSelected={false}
          viewport="Mobile"
          icon="/icon20.svg"
          iconOverflow="hidden"
          label="Cashback"
          baseBadgeBackgroundColor="#f1f0ee"
          label1="Cashback"
          label2="Cashback"
          navItemFlex="0.6784"
        />
        <NavItem
          isSelected={false}
          viewport="Mobile"
          icon="/icon21.svg"
          iconOverflow="hidden"
          label="Gloria"
          baseBadgeBackgroundColor="#f1f0ee"
          label1="Gloria"
          label2="Gloria"
          navItemFlex="0.6784"
        />
        <div className={styles.item10}>
          <div className={styles.basenavitem2}>
            <div className={styles.container5}>
              <div className={styles.container4}>
                <div className={styles.desktop2}>
                  <img className={styles.icon4} alt="" src="/icon4.svg" />
                  <div className={styles.label10}>Link</div>
                  <div className={styles.badgenew2}>
                    <div className={styles.basebadge6}>
                      <div className={styles.label11}>2</div>
                    </div>
                  </div>
                </div>
                <div className={styles.mobile2}>
                  <img className={styles.icon5} alt="" src="/icon5.svg" />
                  <div className={styles.label12}>Researches</div>
                  <div className={styles.asteroidIndicator4}>
                    <div className={styles.basebadge7}>
                      <div className={styles.label13}>2</div>
                    </div>
                  </div>
                </div>
                <img
                  className={styles.arrowDropDownIcon2}
                  alt=""
                  src="/arrowdropdown.svg"
                />
              </div>
              <div className={styles.border2} />
            </div>
            <div className={styles.asteroidIndicator5}>
              <div className={styles.basebadge8}>
                <div className={styles.label14}>2</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.item02}>
          <div className={styles.basenavitem3}>
            <div className={styles.container7}>
              <div className={styles.container6}>
                <div className={styles.desktop3}>
                  <img className={styles.icon6} alt="" src="/icon6.svg" />
                  <div className={styles.label15}>Link</div>
                  <div className={styles.badgenew3}>
                    <div className={styles.basebadge9}>
                      <div className={styles.label16}>2</div>
                    </div>
                  </div>
                </div>
                <div className={styles.mobile3}>
                  <img className={styles.icon7} alt="" src="/icon22.svg" />
                  <div className={styles.label17}>Symptoms</div>
                  <div className={styles.asteroidIndicator6}>
                    <div className={styles.basebadge10}>
                      <div className={styles.label18}>2</div>
                    </div>
                  </div>
                </div>
                <img
                  className={styles.arrowDropDownIcon3}
                  alt=""
                  src="/arrowdropdown.svg"
                />
              </div>
              <div className={styles.border3} />
            </div>
            <div className={styles.asteroidIndicator7}>
              <div className={styles.basebadge11}>
                <div className={styles.label19}>2</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.item03}>
          <div className={styles.basenavitem4}>
            <div className={styles.container9}>
              <div className={styles.container8}>
                <div className={styles.desktop4}>
                  <img className={styles.icon8} alt="" src="/icon8.svg" />
                  <div className={styles.label20}>Link</div>
                  <div className={styles.badgenew4}>
                    <div className={styles.basebadge12}>
                      <div className={styles.label21}>2</div>
                    </div>
                  </div>
                </div>
                <div className={styles.mobile4}>
                  <img className={styles.icon9} alt="" src="/icon9.svg" />
                  <div className={styles.label22}>Blog</div>
                  <div className={styles.asteroidIndicator8}>
                    <div className={styles.basebadge13}>
                      <div className={styles.label23}>2</div>
                    </div>
                  </div>
                </div>
                <img
                  className={styles.arrowDropDownIcon4}
                  alt=""
                  src="/arrowdropdown.svg"
                />
              </div>
              <div className={styles.border4} />
            </div>
            <div className={styles.asteroidIndicator9}>
              <div className={styles.basebadge14}>
                <div className={styles.label24}>2</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.item06}>
          <div className={styles.basenavitem5}>
            <div className={styles.container11}>
              <div className={styles.container10}>
                <div className={styles.desktop5}>
                  <img className={styles.icon10} alt="" src="/icon10.svg" />
                  <div className={styles.label25}>Link</div>
                  <div className={styles.badgenew5}>
                    <div className={styles.basebadge15}>
                      <div className={styles.label26}>2</div>
                    </div>
                  </div>
                </div>
                <div className={styles.mobile5}>
                  <img className={styles.icon11} alt="" src="/icon10.svg" />
                  <div className={styles.label27}>Link</div>
                  <div className={styles.asteroidIndicator10}>
                    <div className={styles.basebadge16}>
                      <div className={styles.label28}>2</div>
                    </div>
                  </div>
                </div>
                <img
                  className={styles.arrowDropDownIcon5}
                  alt=""
                  src="/arrowdropdown.svg"
                />
              </div>
              <div className={styles.border5} />
            </div>
            <div className={styles.asteroidIndicator11}>
              <div className={styles.basebadge17}>
                <div className={styles.label29}>2</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.item07}>
          <div className={styles.basenavitem6}>
            <div className={styles.container13}>
              <div className={styles.container12}>
                <div className={styles.desktop6}>
                  <img className={styles.icon12} alt="" src="/icon10.svg" />
                  <div className={styles.label30}>Link</div>
                  <div className={styles.badgenew6}>
                    <div className={styles.basebadge18}>
                      <div className={styles.label31}>2</div>
                    </div>
                  </div>
                </div>
                <div className={styles.mobile6}>
                  <img className={styles.icon13} alt="" src="/icon10.svg" />
                  <div className={styles.label32}>Link</div>
                  <div className={styles.asteroidIndicator12}>
                    <div className={styles.basebadge19}>
                      <div className={styles.label33}>2</div>
                    </div>
                  </div>
                </div>
                <img
                  className={styles.arrowDropDownIcon6}
                  alt=""
                  src="/arrowdropdown.svg"
                />
              </div>
              <div className={styles.border6} />
            </div>
            <div className={styles.asteroidIndicator13}>
              <div className={styles.basebadge20}>
                <div className={styles.label34}>2</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.item08}>
          <div className={styles.basenavitem7}>
            <div className={styles.container15}>
              <div className={styles.container14}>
                <div className={styles.desktop7}>
                  <img className={styles.icon14} alt="" src="/icon10.svg" />
                  <div className={styles.label35}>Link</div>
                  <div className={styles.badgenew7}>
                    <div className={styles.basebadge21}>
                      <div className={styles.label36}>2</div>
                    </div>
                  </div>
                </div>
                <div className={styles.mobile7}>
                  <img className={styles.icon15} alt="" src="/icon10.svg" />
                  <div className={styles.label37}>Link</div>
                  <div className={styles.asteroidIndicator14}>
                    <div className={styles.basebadge22}>
                      <div className={styles.label38}>2</div>
                    </div>
                  </div>
                </div>
                <img
                  className={styles.arrowDropDownIcon7}
                  alt=""
                  src="/arrowdropdown.svg"
                />
              </div>
              <div className={styles.border7} />
            </div>
            <div className={styles.asteroidIndicator15}>
              <div className={styles.basebadge23}>
                <div className={styles.label39}>2</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.nav1}>
        <div className={styles.nav}>
          <div className={styles.asteroidNav}>
            <div className={styles.item01}>
              <div className={styles.basenavitem8}>
                <div className={styles.container18}>
                  <div className={styles.container17}>
                    <div className={styles.desktop8}>
                      <img className={styles.icon16} alt="" src="/icon10.svg" />
                      <div className={styles.label40}>Link</div>
                      <div className={styles.badgenew8}>
                        <div className={styles.basebadge24}>
                          <div className={styles.label41}>2</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.mobile8}>
                      <img className={styles.icon17} alt="" src="/icon10.svg" />
                      <div className={styles.label42}>Link</div>
                      <div className={styles.asteroidIndicator16}>
                        <div className={styles.basebadge25}>
                          <div className={styles.label43}>2</div>
                        </div>
                      </div>
                    </div>
                    <img
                      className={styles.arrowDropDownIcon8}
                      alt=""
                      src="/arrowdropdown.svg"
                    />
                  </div>
                  <div className={styles.border8} />
                </div>
                <div className={styles.asteroidIndicator17}>
                  <div className={styles.basebadge26}>
                    <div className={styles.label44}>2</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.item021}>
              <div className={styles.basenavitem9}>
                <div className={styles.container20}>
                  <div className={styles.container19}>
                    <div className={styles.desktop9}>
                      <img className={styles.icon18} alt="" src="/icon10.svg" />
                      <div className={styles.label45}>Link</div>
                      <div className={styles.badgenew9}>
                        <div className={styles.basebadge27}>
                          <div className={styles.label46}>2</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.mobile9}>
                      <img className={styles.icon19} alt="" src="/icon10.svg" />
                      <div className={styles.label47}>Link</div>
                      <div className={styles.asteroidIndicator18}>
                        <div className={styles.basebadge28}>
                          <div className={styles.label48}>2</div>
                        </div>
                      </div>
                    </div>
                    <img
                      className={styles.arrowDropDownIcon9}
                      alt=""
                      src="/arrowdropdown.svg"
                    />
                  </div>
                  <div className={styles.border9} />
                </div>
                <div className={styles.asteroidIndicator19}>
                  <div className={styles.basebadge29}>
                    <div className={styles.label49}>2</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.item031}>
              <div className={styles.basenavitem10}>
                <div className={styles.container22}>
                  <div className={styles.container21}>
                    <div className={styles.desktop10}>
                      <img className={styles.icon20} alt="" src="/icon10.svg" />
                      <div className={styles.label50}>Link</div>
                      <div className={styles.badgenew10}>
                        <div className={styles.basebadge30}>
                          <div className={styles.label51}>2</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.mobile10}>
                      <img className={styles.icon21} alt="" src="/icon10.svg" />
                      <div className={styles.label52}>Link</div>
                      <div className={styles.asteroidIndicator20}>
                        <div className={styles.basebadge31}>
                          <div className={styles.label53}>2</div>
                        </div>
                      </div>
                    </div>
                    <img
                      className={styles.arrowDropDownIcon10}
                      alt=""
                      src="/arrowdropdown.svg"
                    />
                  </div>
                  <div className={styles.border10} />
                </div>
                <div className={styles.asteroidIndicator21}>
                  <div className={styles.basebadge32}>
                    <div className={styles.label54}>2</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.item041}>
              <div className={styles.basenavitem11}>
                <div className={styles.container24}>
                  <div className={styles.container23}>
                    <div className={styles.desktop11}>
                      <img className={styles.icon22} alt="" src="/icon10.svg" />
                      <div className={styles.label55}>Link</div>
                      <div className={styles.badgenew11}>
                        <div className={styles.basebadge33}>
                          <div className={styles.label56}>2</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.mobile11}>
                      <img className={styles.icon23} alt="" src="/icon10.svg" />
                      <div className={styles.label57}>Link</div>
                      <div className={styles.asteroidIndicator22}>
                        <div className={styles.basebadge34}>
                          <div className={styles.label58}>2</div>
                        </div>
                      </div>
                    </div>
                    <img
                      className={styles.arrowDropDownIcon11}
                      alt=""
                      src="/arrowdropdown.svg"
                    />
                  </div>
                  <div className={styles.border11} />
                </div>
                <div className={styles.asteroidIndicator23}>
                  <div className={styles.basebadge35}>
                    <div className={styles.label59}>2</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.item05}>
              <div className={styles.basenavitem12}>
                <div className={styles.container26}>
                  <div className={styles.container25}>
                    <div className={styles.desktop12}>
                      <img className={styles.icon24} alt="" src="/icon10.svg" />
                      <div className={styles.label60}>Link</div>
                      <div className={styles.badgenew12}>
                        <div className={styles.basebadge36}>
                          <div className={styles.label61}>2</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.mobile12}>
                      <img className={styles.icon25} alt="" src="/icon10.svg" />
                      <div className={styles.label62}>Link</div>
                      <div className={styles.asteroidIndicator24}>
                        <div className={styles.basebadge37}>
                          <div className={styles.label63}>2</div>
                        </div>
                      </div>
                    </div>
                    <img
                      className={styles.arrowDropDownIcon12}
                      alt=""
                      src="/arrowdropdown.svg"
                    />
                  </div>
                  <div className={styles.border12} />
                </div>
                <div className={styles.asteroidIndicator25}>
                  <div className={styles.basebadge38}>
                    <div className={styles.label64}>2</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.item061}>
              <div className={styles.basenavitem13}>
                <div className={styles.container28}>
                  <div className={styles.container27}>
                    <div className={styles.desktop13}>
                      <img className={styles.icon26} alt="" src="/icon10.svg" />
                      <div className={styles.label65}>Link</div>
                      <div className={styles.badgenew13}>
                        <div className={styles.basebadge39}>
                          <div className={styles.label66}>2</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.mobile13}>
                      <img className={styles.icon27} alt="" src="/icon10.svg" />
                      <div className={styles.label67}>Link</div>
                      <div className={styles.asteroidIndicator26}>
                        <div className={styles.basebadge40}>
                          <div className={styles.label68}>2</div>
                        </div>
                      </div>
                    </div>
                    <img
                      className={styles.arrowDropDownIcon13}
                      alt=""
                      src="/arrowdropdown.svg"
                    />
                  </div>
                  <div className={styles.border13} />
                </div>
                <div className={styles.asteroidIndicator27}>
                  <div className={styles.basebadge41}>
                    <div className={styles.label69}>2</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.item071}>
              <div className={styles.basenavitem14}>
                <div className={styles.container30}>
                  <div className={styles.container29}>
                    <div className={styles.desktop14}>
                      <img className={styles.icon28} alt="" src="/icon10.svg" />
                      <div className={styles.label70}>Link</div>
                      <div className={styles.badgenew14}>
                        <div className={styles.basebadge42}>
                          <div className={styles.label71}>2</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.mobile14}>
                      <img className={styles.icon29} alt="" src="/icon10.svg" />
                      <div className={styles.label72}>Link</div>
                      <div className={styles.asteroidIndicator28}>
                        <div className={styles.basebadge43}>
                          <div className={styles.label73}>2</div>
                        </div>
                      </div>
                    </div>
                    <img
                      className={styles.arrowDropDownIcon14}
                      alt=""
                      src="/arrowdropdown.svg"
                    />
                  </div>
                  <div className={styles.border14} />
                </div>
                <div className={styles.asteroidIndicator29}>
                  <div className={styles.basebadge44}>
                    <div className={styles.label74}>2</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.item081}>
              <div className={styles.basenavitem15}>
                <div className={styles.container32}>
                  <div className={styles.container31}>
                    <div className={styles.desktop15}>
                      <img className={styles.icon30} alt="" src="/icon10.svg" />
                      <div className={styles.label75}>Link</div>
                      <div className={styles.badgenew15}>
                        <div className={styles.basebadge45}>
                          <div className={styles.label76}>2</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.mobile15}>
                      <img className={styles.icon31} alt="" src="/icon10.svg" />
                      <div className={styles.label77}>Link</div>
                      <div className={styles.asteroidIndicator30}>
                        <div className={styles.basebadge46}>
                          <div className={styles.label78}>2</div>
                        </div>
                      </div>
                    </div>
                    <img
                      className={styles.arrowDropDownIcon15}
                      alt=""
                      src="/arrowdropdown.svg"
                    />
                  </div>
                  <div className={styles.border15} />
                </div>
                <div className={styles.asteroidIndicator31}>
                  <div className={styles.basebadge47}>
                    <div className={styles.label79}>2</div>
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
  );
};

export default Tabbar;
