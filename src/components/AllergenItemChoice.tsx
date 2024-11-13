import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./AllergenItemChoice.module.css";

export type AllergenItemChoiceType = {
  className?: string;
  allergenName?: string;
  allergenImage?: string;

  /** Variant props */
  isSelected?: boolean;

  /** Style props */
  allergenImageBackground?: CSSProperties["background"];
  allergenImageIconBorderRadius?: CSSProperties["borderRadius"];
};

const AllergenItemChoice: FunctionComponent<AllergenItemChoiceType> = ({
  className = "",
  isSelected = false,
  allergenImageBackground,
  allergenName,
  allergenImage,
  allergenImageIconBorderRadius,
}) => {
  const allergenImageIconStyle: CSSProperties = useMemo(() => {
    return {
      background: allergenImageBackground,
      borderRadius: allergenImageIconBorderRadius,
    };
  }, [allergenImageBackground, allergenImageIconBorderRadius]);

  return (
    <div
      className={[styles.allergenItemChoice, className].join(" ")}
      data-isSelected={isSelected}
    >
      <img
        className={styles.allergenImageIcon}
        alt=""
        src={allergenImage}
        style={allergenImageIconStyle}
      />
      <div className={styles.allergenItemName}>{allergenName}</div>
    </div>
  );
};

export default AllergenItemChoice;
