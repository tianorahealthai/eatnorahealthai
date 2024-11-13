import { FunctionComponent } from "react";
import FeaturedMeal from "../components/FeaturedMeal";
import Button from "../components/Button";
import MealCardContainer from "../components/MealCardContainer";
import ContentItem from "../components/ContentItem";
import PromotionalBannerContainer from "../components/PromotionalBannerContainer";
import Tabbar from "../components/Tabbar";
import styles from "./Homepage.module.css";

const Homepage: FunctionComponent = () => {
  return (
    <div className={styles.homepage}>
      <div className={styles.mainContainer}>
        <FeaturedMeal
          isFirstOrder
          isHomepage
          restaurantName="CHLOE"
          mealItemName="Kale Caesar Salad"
          benefitItemValue1="Focus"
          benefitItemValue3="Nutrient Dense"
          benefitItemValue2="Sustained Energy"
        />
        <Button
          hierarchy="Tertiary gray"
          icon="Default"
          size="sm"
          state="Default"
          iconTrailing={false}
          iconLeading
          buttonsButtonFlex="unset"
          buttonsButtonWidth="unset"
          buttonsButtonAlignSelf="unset"
          buttonsButtonHeight="unset"
          placeholder="/refreshcw02.svg"
          placeholderIconOverflow="hidden"
          placeholderIconTransform="unset"
          text="New meal of the day"
          placeholder1="/placeholder7.svg"
          showButtonsButton
        />
        <div className={styles.generalContainer}>
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
            <MealCardContainer
              isHomepage
              mealImage="/mealimage@2x.png"
              mealName="PB Acai Bowl"
              restaurantName="JUICE GENERATION"
              distance="0.5mil"
              healthScore="4.8"
              mealPrice="$12.95"
              mealCashback="10%"
              benefitItemValue1="Focus"
              benefitItemValue2="Sustained Energy"
              benefitItemValue3="Nutrient Dense"
              paddingTop={false}
              paddingBottom={false}
              showMeasureSpacingGuide
              spacingGuide
              spacingGuide1
              measureLines
            />
          </div>
          <ContentItem
            breakpoint="Mobile"
            size="sm"
            type="Divider"
            spacingGuide={false}
            paddingTop={false}
            paddingBottom={false}
            endpoint2="/endpoint2.svg"
            endpoint3="/endpoint2.svg"
            divider="/divider1.svg"
            showMeasureSpacingGuide={false}
            endpoint6="/endpoint2.svg"
            endpoint7="/endpoint2.svg"
            spacingGuide1={false}
            measureLines
          />
          <PromotionalBannerContainer />
          <ContentItem
            breakpoint="Mobile"
            size="sm"
            type="Divider"
            spacingGuide={false}
            paddingTop={false}
            paddingBottom={false}
            endpoint2="/endpoint2.svg"
            endpoint3="/endpoint2.svg"
            divider="/divider1.svg"
            showMeasureSpacingGuide={false}
            endpoint6="/endpoint2.svg"
            endpoint7="/endpoint2.svg"
            spacingGuide1={false}
            measureLines
          />
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
            <MealCardContainer
              isHomepage
              mealImage="/mealimage1@2x.png"
              mealName="Hail to Kale Smoothie"
              mealImageBackground="unset"
              restaurantName="JUICE GENERATION"
              distance="0.5mil"
              healthScore="4.8"
              mealPrice="$12.95"
              mealCashback="10%"
              benefitItemValue1="Focus"
              benefitItemValue2="Sustained Energy"
              benefitItemValue3="Nutrient Dense"
              avatarBackground="unset"
              paddingTop={false}
              paddingBottom={false}
              showMeasureSpacingGuide
              spacingGuide
              spacingGuide1
              measureLines
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
            <img className={styles.vectorIcon} alt="" src="/vector3.svg" />
          </div>
        </div>
        <div className={styles.actions}>
          <div className={styles.buttonsbutton2}>
            <img
              className={styles.refreshCw02Icon}
              alt=""
              src="/helpcircle1.svg"
            />
          </div>
          <div className={styles.avatar}>
            <div className={styles.contrastBorder} />
          </div>
        </div>
      </div>
      <Tabbar page="Conversations" />
    </div>
  );
};

export default Homepage;
