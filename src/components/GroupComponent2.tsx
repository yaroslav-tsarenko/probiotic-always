import { FunctionComponent } from "react";
import FrameComponent from "./FrameComponent";
import styles from "./GroupComponent2.module.css";

const GroupComponent2: FunctionComponent = () => {
  return (
    <section className={styles.rectangleParent}>
      <div className={styles.instanceChild} />
      <div className={styles.frameParent}>
        <div className={styles.customerReviewsWrapper}>
          <h1 className={styles.customerReviews}>Customer Reviews</h1>
        </div>
        <div className={styles.frameGroup}>
          <FrameComponent
            ellipse86="/ellipse-86@2x.png"
            alexandra="Alexandra"
            newYorkNY="New York, NY"
            greenVitalityBlendHasBeco="Green Vitality Blend has become my daily essential. The organic ingredients make me feel invigorated, and the immune support is unmatched. It's a game-changer for my overall well-being!"
          />
          <FrameComponent
            ellipse86="/ellipse-86-1@2x.png"
            alexandra="Michael"
            newYorkNY="Austin, TX"
            greenVitalityBlendHasBeco="“Pure Glow Collagen is my beauty secret. My skin feels rejuvenated and hydrated. The noticeable radiance is incredible. A must for anyone wanting healthy, glowing skin.”"
            propPadding="0px 0px 0px"
          />
          <FrameComponent
            ellipse86="/ellipse-86-2@2x.png"
            alexandra="Emily"
            newYorkNY="New York, NY"
            greenVitalityBlendHasBeco="“Mood Magic Gummies are my go-to stress buster. The taste is fantastic, and they truly work wonders. I feel calmer and more centered after a hectic day.”"
            propPadding="0px 0px 0px"
          />
          <FrameComponent
            ellipse86="/ellipse-86@2x.png"
            alexandra="Carlos"
            newYorkNY="Miami, FL"
            greenVitalityBlendHasBeco="“Sleep Serenity Capsules have transformed my nights. The natural relaxation is remarkable. I wake up refreshed and ready to tackle the day. Highly recommend for quality sleep!”"
            propPadding="0px 0px 0px"
          />
        </div>
      </div>
    </section>
  );
};

export default GroupComponent2;
