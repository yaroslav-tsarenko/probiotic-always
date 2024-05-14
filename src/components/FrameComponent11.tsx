import { FunctionComponent } from "react";
import GroupComponent9 from "./GroupComponent9";
import styles from "./FrameComponent11.module.css";

const FrameComponent11: FunctionComponent = () => {
  return (
    <section className={styles.frameWrapper}>
      <div className={styles.frameParent}>
        <div className={styles.featuresHeadingParent}>
          <div className={styles.featuresHeading}>
            <h1 className={styles.keyFeatures}>Key Features</h1>
          </div>
          <div className={styles.frameGroup}>
            <GroupComponent9
              organicSuperfoodFusion="Organic Superfood Fusion"
              greenVitalityBlendCombine="Green Vitality Blend combines organic superfoods, creating a nutrient-rich powerhouse to boost energy, vitality, and overall well-being."
            />
            <GroupComponent9
              organicSuperfoodFusion="Antioxidant-rich Immune Support"
              greenVitalityBlendCombine="Enhance immune defenses with Green Vitality Blend's antioxidant-rich formula, protecting against free radicals and promoting robust immune function."
            />
            <GroupComponent9
              organicSuperfoodFusion="Alkalizing Greens Blend"
              greenVitalityBlendCombine="Balance pH levels with Green Vitality Blend's alkalizing greens blend, supporting a healthy internal environment for optimal cellular function and vitality."
            />
          </div>
        </div>
        <div className={styles.frameContainer}>
          <GroupComponent9
            organicSuperfoodFusion="Detoxifying Plant Extracts"
            greenVitalityBlendCombine="Detoxify naturally with Green Vitality Blend's plant extracts, aiding the body's natural cleansing processes for enhanced energy and vitality."
          />
          <GroupComponent9
            organicSuperfoodFusion="Digestive Health Harmony"
            greenVitalityBlendCombine="Promote digestive well-being with Green Vitality Blend, featuring ingredients that support a healthy gut, reducing bloating and promoting nutrient absorption."
          />
          <GroupComponent9
            organicSuperfoodFusion="Convenient Daily Nutrition"
            greenVitalityBlendCombine="Enjoy the ease of daily nutrition with Green Vitality Blend, a convenient and delicious way to supplement your diet for sustained vitality."
          />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent11;
