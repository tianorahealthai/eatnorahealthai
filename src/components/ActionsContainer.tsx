import { FunctionComponent, useMemo, type CSSProperties } from "react";
import Button from "./Button";
import styles from "./ActionsContainer.module.css";

export type ActionsContainerType = {
  className?: string;
  showButtonsButton?: boolean;
  showButtonsButton1?: boolean;
  iconLeading?: boolean;
  iconTrailing?: boolean;

  /** Variant props */
  hasBackButton?: boolean;

  /** Style props */
  actionsContainerBottom?: CSSProperties["bottom"];
};

const ActionsContainer: FunctionComponent<ActionsContainerType> = ({
  className = "",
  hasBackButton = true,
  actionsContainerBottom,
  showButtonsButton,
  showButtonsButton1,
  iconLeading,
  iconTrailing,
}) => {
  const actionsContainerStyle: CSSProperties = useMemo(() => {
    return {
      bottom: actionsContainerBottom,
    };
  }, [actionsContainerBottom]);

  return (
    <div
      className={[styles.root, className].join(" ")}
      data-hasBackButton={hasBackButton}
      style={actionsContainerStyle}
    >
      {showButtonsButton && (
        <div className={styles.buttonsbutton}>
          <img className={styles.arrowLeftIcon} alt="" src="/arrowleft.svg" />
        </div>
      )}
      <Button
        hierarchy="Primary"
        icon="Default"
        size="lg"
        state="Disabled"
        iconTrailing={iconTrailing}
        iconLeading={iconLeading}
        placeholder="/placeholder2.svg"
        text="Next"
        placeholder1="/placeholder2.svg"
        showButtonsButton={showButtonsButton1}
      />
    </div>
  );
};

export default ActionsContainer;
