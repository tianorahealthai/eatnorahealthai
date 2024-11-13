import { FunctionComponent } from "react";
import WelcomeBonusBanner from "./WelcomeBonusBanner";
import styles from "./PromotionalBannerContainer.module.css";

export type PromotionalBannerContainerType = {
  className?: string;
};

const PromotionalBannerContainer: FunctionComponent<
  PromotionalBannerContainerType
> = ({ className = "" }) => {
  return (
    <div className={[styles.promotionalBannerContainer, className].join(" ")}>
      <WelcomeBonusBanner />
    </div>
  );
};

export default PromotionalBannerContainer;
