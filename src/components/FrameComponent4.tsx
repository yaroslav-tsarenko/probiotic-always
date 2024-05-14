import { FunctionComponent, useMemo, type CSSProperties } from "react";
import { Button } from "@mui/material";
import styles from "./FrameComponent4.module.css";
import {FrameComponentProps} from "./FrameComponent";

export type FrameComponent4Type = {
  rectangle4668?: string;
  greenVitalityBlend?: string;
  revitalizeWithNutrientRic?: string;
  frame1000003519?: string;
  frame1000003520?: string;
  propWidth?: CSSProperties["width"];
  propFlexWrap?: CSSProperties["flexWrap"];
  propMinWidth?: CSSProperties["minWidth"];
  propFlex?: CSSProperties["flex"];
  propWidth1?: CSSProperties["width"];
  propWidth2?: CSSProperties["width"];
  propFlex1?: CSSProperties["flex"];
  propMinWidth1?: CSSProperties["minWidth"];
};

interface FrameComponent4Props {
    rectangle4668?: string;
    greenVitalityBlend?: string;
    revitalizeWithNutrientRic?: string;
    frame1000003519?: string;
    frame1000003520?: string;
    propWidth?: CSSProperties["width"];
    propFlexWrap?: CSSProperties["flexWrap"];
    propMinWidth?: CSSProperties["minWidth"];
    propFlex?: CSSProperties["flex"];
    propWidth1?: CSSProperties["width"];
    propWidth2?: CSSProperties["width"];
    propFlex1?: CSSProperties["flex"];
    propMinWidth1?: CSSProperties["minWidth"];
    cancellationWindow?: string;
    youHaveTheOpportunityToCa?: string;
    youCanCancelYourOrderWith?: string;
    afterTheCancellationWindo?: string;
    contactOurCustomerSupport?: string;
    propDisplay?: CSSProperties["display"];
}

const FrameComponent4: FunctionComponent<FrameComponent4Props> = ({

}) => {

  return (
    <div className={styles.frameParent}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <img
          className={styles.frameItem}
          loading="lazy"
          alt=""
        />
      </div>
      <div className={styles.frameGroup}>
        <div className={styles.greenVitalityBlendParent}>
          <div className={styles.revitalizeWithNutrientRich}>
          </div>
        </div>
        <div className={styles.parent}>
          <div className={styles.div}>$29.99</div>
          <div className={styles.starParent}>
            <img
              className={styles.frameInner}
              loading="lazy"
              alt=""
              src="/star-1.svg"
            />
            <div className={styles.div1}>4.9</div>
          </div>
        </div>
        <div className={styles.frameContainer}>
          <Button
            className={styles.frameButton}
            disableElevation={true}
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#343434",
              fontSize: "14",
              background: "#efefef",
              borderRadius: "24px",
              "&:hover": { background: "#efefef" },
              height: 37,
            }}
          >

          </Button>
          <Button
            className={styles.frameChild1}
            disableElevation={true}
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#343434",
              fontSize: "14",
              background: "#efefef",
              borderRadius: "24px",
              "&:hover": { background: "#efefef" },
              width: 151,
              height: 37,
            }}
          >
          </Button>
        </div>
        <Button
          className={styles.button}
          disableElevation={true}
          variant="contained"
          sx={{
            color: "#fff",
            fontSize: "16",
            background: "#6e9e24",
            borderRadius: "0px 0px 0px 0px",
            "&:hover": { background: "#6e9e24" },
            height: 56,
          }}
        >
          Shop Now
        </Button>
      </div>
    </div>
  );
};

export default FrameComponent4;
