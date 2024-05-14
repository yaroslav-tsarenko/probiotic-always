import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./FrameComponent.module.css";

export interface FrameComponentProps {
  group1000005946?: string;
  premiumSourcingAndFormula?: string;
  wePrioritizeTheQualityOfE?: string;
  propWidth?: string;
  propHeight?: string;
  propWidth1?: string;
  ellipse86?: string;
  alexandra?: string;
  newYorkNY?: string;
  greenVitalityBlendHasBeco?: string;
  propPadding?: string;
}

const FrameComponent: FunctionComponent<FrameComponentProps> = ({
                                                                  ellipse86,
                                                                  alexandra,
                                                                  newYorkNY,
                                                                  greenVitalityBlendHasBeco,
                                                                  propPadding,
                                                                }) => {
  const frameDiv1Style: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div className={styles.frameParent} style={frameDiv1Style}>
      <div className={styles.ellipseParent}>
        <img
          className={styles.frameChild}
          loading="lazy"
          alt=""
          src={ellipse86}
        />
        <div className={styles.alexandraParent}>
          <b className={styles.alexandra}>{alexandra}</b>
          <div className={styles.newYorkNy}>{newYorkNY}</div>
        </div>
      </div>
      <div className={styles.greenVitalityBlend}>
        {greenVitalityBlendHasBeco}
      </div>
      <div className={styles.fiveStar}>
        <img
          className={styles.vectorIcon}
          loading="lazy"
          alt=""
          src="/vector.svg"
        />
        <img className={styles.vectorIcon1} alt="" src="/vector-1.svg" />
        <img className={styles.vectorIcon2} alt="" src="/vector-2.svg" />
        <img className={styles.vectorIcon3} alt="" src="/vector-3.svg" />
        <img className={styles.vectorIcon4} alt="" src="/vector-4.svg" />
      </div>
      <img className={styles.icon} loading="lazy" alt="" src="/.svg" />
    </div>
  );
};

export default FrameComponent;
