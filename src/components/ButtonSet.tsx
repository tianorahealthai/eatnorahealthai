import { FunctionComponent } from "react";
import Button from "./Button";
import styles from "./ButtonSet.module.css";

export type ButtonSetType = {
  className?: string;
};

const ButtonSet: FunctionComponent<ButtonSetType> = ({ className = "" }) => {
  return (
    <div className={[styles.button, className].join(" ")}>
      <Button
        disabled={false}
        hasIcon={false}
        hierarchy="Primary"
        buttonLabel="Button CTA"
      />
      <Button
        disabled={false}
        hasIcon={false}
        hierarchy="Secondary"
        buttonTop="182px"
        buttonHeight="48px"
        buttonLabel="Button CTA"
      />
      <Button
        disabled
        hasIcon={false}
        hierarchy="Secondary"
        buttonTop="254px"
        buttonHeight="48px"
        buttonLabel="Button CTA"
      />
      <Button
        disabled={false}
        hasIcon={false}
        hierarchy="Tertiary"
        buttonTop="334px"
        buttonHeight="48px"
        buttonLabel="Button CTA"
      />
      <Button
        disabled
        hasIcon={false}
        hierarchy="Tertiary"
        buttonTop="400px"
        buttonHeight="48px"
        buttonLabel="Button CTA"
      />
      <Button
        disabled={false}
        hasIcon={false}
        hierarchy="Link"
        buttonTop="466px"
        buttonHeight="unset"
        buttonLabel="Button CTA"
      />
      <Button
        disabled
        hasIcon={false}
        hierarchy="Link"
        buttonTop="512px"
        buttonHeight="unset"
        buttonLabel="Button CTA"
      />
      <Button
        disabled
        hasIcon={false}
        hierarchy="Primary"
        buttonTop="89px"
        buttonHeight="48px"
        buttonLabel="Button CTA"
      />
      <div className={styles.disablednoHierarchyprimary}>
        <img
          className={styles.placeholderIcon}
          alt=""
          src="/placeholder6.svg"
        />
        <div className={styles.buttonLabel}>Button CTA</div>
      </div>
      <div className={styles.disablednoHierarchyseconda}>
        <img
          className={styles.placeholderIcon}
          alt=""
          src="/placeholder1.svg"
        />
        <div className={styles.buttonLabel}>Button CTA</div>
      </div>
      <div className={styles.disabledyesHierarchysecond}>
        <img
          className={styles.placeholderIcon}
          alt=""
          src="/placeholder19.svg"
        />
        <div className={styles.buttonLabel}>Button CTA</div>
      </div>
      <div className={styles.disablednoHierarchytertiar}>
        <img
          className={styles.placeholderIcon}
          alt=""
          src="/placeholder7.svg"
        />
        <div className={styles.buttonLabel}>Button CTA</div>
      </div>
      <div className={styles.disabledyesHierarchytertia}>
        <img
          className={styles.placeholderIcon}
          alt=""
          src="/placeholder19.svg"
        />
        <div className={styles.buttonLabel}>Button CTA</div>
      </div>
      <div className={styles.disablednoHierarchylinkH}>
        <img
          className={styles.placeholderIcon}
          alt=""
          src="/placeholder3.svg"
        />
        <div className={styles.buttonLabel}>Button CTA</div>
      </div>
      <div className={styles.disabledyesHierarchylink}>
        <img
          className={styles.placeholderIcon}
          alt=""
          src="/placeholder19.svg"
        />
        <div className={styles.buttonLabel}>Button CTA</div>
      </div>
      <div className={styles.disabledyesHierarchyprimar}>
        <img
          className={styles.placeholderIcon}
          alt=""
          src="/placeholder19.svg"
        />
        <div className={styles.buttonLabel}>Button CTA</div>
      </div>
      <div className={styles.disablednoHierarchyprimary1}>
        <div className={styles.buttonLabel}>Button CTA</div>
        <img
          className={styles.placeholderIcon}
          alt=""
          src="/placeholder6.svg"
        />
      </div>
      <div className={styles.disablednoHierarchyprimary2}>
        <img
          className={styles.placeholderIcon}
          alt=""
          src="/placeholder20.svg"
        />
      </div>
      <div className={styles.disablednoHierarchyseconda1}>
        <div className={styles.buttonLabel}>Button CTA</div>
        <img
          className={styles.placeholderIcon}
          alt=""
          src="/placeholder1.svg"
        />
      </div>
      <div className={styles.disablednoHierarchyseconda2}>
        <img className={styles.placeholderIcon} alt="" src="/arrowleft1.svg" />
      </div>
      <div className={styles.disabledyesHierarchysecond1}>
        <div className={styles.buttonLabel}>Button CTA</div>
        <img
          className={styles.placeholderIcon}
          alt=""
          src="/placeholder19.svg"
        />
      </div>
      <div className={styles.disabledyesHierarchysecond2}>
        <img
          className={styles.placeholderIcon}
          alt=""
          src="/placeholder21.svg"
        />
      </div>
      <div className={styles.disablednoHierarchytertiar1}>
        <div className={styles.buttonLabel}>Button CTA</div>
        <img
          className={styles.placeholderIcon}
          alt=""
          src="/placeholder7.svg"
        />
      </div>
      <div className={styles.disablednoHierarchytertiar2}>
        <img
          className={styles.placeholderIcon}
          alt=""
          src="/placeholder22.svg"
        />
      </div>
      <div className={styles.disabledyesHierarchytertia1}>
        <div className={styles.buttonLabel}>Button CTA</div>
        <img
          className={styles.placeholderIcon}
          alt=""
          src="/placeholder19.svg"
        />
      </div>
      <div className={styles.disabledyesHierarchytertia2}>
        <img
          className={styles.placeholderIcon17}
          alt=""
          src="/placeholder21.svg"
        />
        <img
          className={styles.placeholderIcon}
          alt=""
          src="/placeholder21.svg"
        />
      </div>
      <div className={styles.disablednoHierarchylinkH1}>
        <div className={styles.buttonLabel}>Button CTA</div>
        <img
          className={styles.placeholderIcon}
          alt=""
          src="/placeholder3.svg"
        />
      </div>
      <div className={styles.disablednoHierarchylinkH2}>
        <img
          className={styles.placeholderIcon}
          alt=""
          src="/placeholder23.svg"
        />
      </div>
      <div className={styles.disabledyesHierarchylink1}>
        <div className={styles.buttonLabel}>Button CTA</div>
        <img
          className={styles.placeholderIcon}
          alt=""
          src="/placeholder19.svg"
        />
      </div>
      <div className={styles.disabledyesHierarchylink2}>
        <img
          className={styles.placeholderIcon}
          alt=""
          src="/placeholder21.svg"
        />
      </div>
      <div className={styles.disabledyesHierarchyprimar1}>
        <div className={styles.buttonLabel}>Button CTA</div>
        <img
          className={styles.placeholderIcon}
          alt=""
          src="/placeholder19.svg"
        />
      </div>
      <div className={styles.disabledyesHierarchyprimar2}>
        <img
          className={styles.placeholderIcon}
          alt=""
          src="/placeholder21.svg"
        />
      </div>
    </div>
  );
};

export default ButtonSet;
