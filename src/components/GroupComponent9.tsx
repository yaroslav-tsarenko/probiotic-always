import { FunctionComponent } from "react";
import styles from "./GroupComponent9.module.css";

export type GroupComponent9Type = {
  organicSuperfoodFusion?: string;
  greenVitalityBlendCombine?: string;
};

const GroupComponent9: FunctionComponent<GroupComponent9Type> = ({
  organicSuperfoodFusion,
  greenVitalityBlendCombine,
}) => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.frameGroup}>
        <img
          className={styles.frameChild}
          loading="lazy"
          alt=""
          src="/group-14@2x.png"
        />
        <h3 className={styles.organicSuperfoodFusion}>
          {organicSuperfoodFusion}
        </h3>
      </div>
      <div className={styles.greenVitalityBlendCombinesWrapper}>
        <div className={styles.greenVitalityBlend}>
          {greenVitalityBlendCombine}
        </div>
      </div>
    </div>
  );
};

export default GroupComponent9;
