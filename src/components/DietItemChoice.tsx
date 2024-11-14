import { FunctionComponent } from "react";
import styles from "./DietItemChoice.module.css";

export type DietItemChoiceType = {
  className?: string;
  dietImage?: string;
  dietItemName?: string;
};

const DietItemChoice: FunctionComponent<DietItemChoiceType> = ({
  className = "",
  dietImage,
  dietItemName,
}) => {
  return (
    <div className={[styles.dietItemChoice, className].join(" ")}>
      <img className={styles.dietImageIcon} alt="" src={dietImage} />
      <div className={styles.dietItemName}>{dietItemName}</div>
    </div>
  );
};

export default DietItemChoice;
