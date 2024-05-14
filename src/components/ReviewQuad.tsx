import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./ReviewQuad.module.css";

export type ReviewQuadType = {
  ellipse86?: string;
  alexandra?: string;
  newYorkNY?: string;
  greenVitalityBlendHasBeco?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
};

const ReviewQuad: FunctionComponent<ReviewQuadType> = ({
  ellipse86,
  alexandra,
  newYorkNY,
  greenVitalityBlendHasBeco,
  propPadding,
}) => {
  const reviewQuadStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div className={styles.reviewQuad} style={reviewQuadStyle}>
      <div className={styles.reviewContentQuad}>
        <img
          className={styles.reviewContentQuadChild}
          loading="lazy"
          alt=""
          src={ellipse86}
        />
        <div className={styles.reviewerQuad}>
          <b className={styles.alexandra}>{alexandra}</b>
          <div className={styles.newYorkNy}>{newYorkNY}</div>
        </div>
      </div>
      <div className={styles.greenVitalityBlend}>
        {greenVitalityBlendHasBeco}
      </div>
      <div className={styles.fiveStar}>
        <img className={styles.vectorIcon} alt="" src="/vector.svg" />
        <img className={styles.vectorIcon1} alt="" src="/vector-1.svg" />
        <img className={styles.vectorIcon2} alt="" src="/vector-2.svg" />
        <img className={styles.vectorIcon3} alt="" src="/vector-3.svg" />
        <img className={styles.vectorIcon4} alt="" src="/vector-4.svg" />
      </div>
      <img className={styles.icon} loading="lazy" alt="" src="/.svg" />
    </div>
  );
};

export default ReviewQuad;
