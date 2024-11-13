import { FunctionComponent } from "react";
import styles from "./SuggestedOptionItem.module.css";

export type SuggestedOptionItemType = {
  className?: string;
  emojiContent?: string;
  showEmojiContent?: boolean;
  suggestedOptionText?: string;
};

const SuggestedOptionItem: FunctionComponent<SuggestedOptionItemType> = ({
  className = "",
  emojiContent,
  showEmojiContent,
  suggestedOptionText,
}) => {
  return (
    <div className={[styles.suggestedoptionitem, className].join(" ")}>
      <div className={styles.emojicontainer}>
        {showEmojiContent && (
          <div className={styles.emojicontent}>{emojiContent}</div>
        )}
      </div>
      <div className={styles.suggestedoptioninfocontainer}>
        <div className={styles.suggestedoptioninnercontainer}>
          <div className={styles.suggestedoptiontext}>
            {suggestedOptionText}
          </div>
          <div className={styles.aicoachdescription}>
            <span>{`with `}</span>
            <i className={styles.nora}>Nora</i>
          </div>
        </div>
        <div className={styles.badge}>
          <div className={styles.text}>💰 8 Nora Coins</div>
        </div>
      </div>
    </div>
  );
};

export default SuggestedOptionItem;
