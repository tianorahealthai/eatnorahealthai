import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Button.module.css";

export type ButtonType = {
  className?: string;
  iconTrailing?: boolean;
  iconLeading?: boolean;
  placeholder?: string;
  text?: string;
  placeholder1?: string;
  showButtonsButton?: boolean;

  /** Variant props */
  hierarchy?: "Primary" | "Secondary gray" | "Tertiary gray";
  icon?: "Default";
  size?: "lg" | "md" | "sm";
  state?: "Disabled" | "Default";

  /** Style props */
  buttonsButtonFlex?: CSSProperties["flex"];
  buttonsButtonWidth?: CSSProperties["width"];
  buttonsButtonAlignSelf?: CSSProperties["alignSelf"];
  buttonsButtonHeight?: CSSProperties["height"];
  placeholderIconOverflow?: CSSProperties["overflow"];
  placeholderIconTransform?: CSSProperties["transform"];
};

const Button: FunctionComponent<ButtonType> = ({
  className = "",
  hierarchy = "Primary",
  icon = "Dot leading",
  size = "md",
  state = "Default",
  iconTrailing = false,
  iconLeading = false,
  buttonsButtonFlex,
  buttonsButtonWidth,
  buttonsButtonAlignSelf,
  buttonsButtonHeight,
  placeholder,
  placeholderIconOverflow,
  placeholderIconTransform,
  text,
  placeholder1,
  showButtonsButton,
}) => {
  const buttonsButtonStyle: CSSProperties = useMemo(() => {
    return {
      flex: buttonsButtonFlex,
      width: buttonsButtonWidth,
      alignSelf: buttonsButtonAlignSelf,
      height: buttonsButtonHeight,
    };
  }, [
    buttonsButtonFlex,
    buttonsButtonWidth,
    buttonsButtonAlignSelf,
    buttonsButtonHeight,
  ]);

  const placeholderIconStyle: CSSProperties = useMemo(() => {
    return {
      overflow: placeholderIconOverflow,
      transform: placeholderIconTransform,
    };
  }, [placeholderIconOverflow, placeholderIconTransform]);

  return (
    showButtonsButton && (
      <div
        className={[styles.root, className].join(" ")}
        data-hierarchy={hierarchy}
        data-icon={icon}
        data-size={size}
        data-state={state}
        style={buttonsButtonStyle}
      >
        {iconLeading && (
          <img
            className={styles.placeholderIcon}
            alt=""
            src={placeholder}
            style={placeholderIconStyle}
          />
        )}
        <div className={styles.textPadding}>
          <div className={styles.text}>{text}</div>
        </div>
        {iconTrailing && (
          <img className={styles.placeholderIcon1} alt="" src={placeholder1} />
        )}
      </div>
    )
  );
};

export default Button;
