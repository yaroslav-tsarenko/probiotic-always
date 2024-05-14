import {FC, FunctionComponent} from "react";
import { Button } from "@mui/material";
import FrameComponent4 from "./FrameComponent4";
import styles from "./FrameComponent3.module.css";

interface FrameComponentProps {
    group1000005946?: string;
    premiumSourcingAndFormula?: string;
    wePrioritizeTheQualityOfE?: string;
    propWidth?: string;
    propHeight?: string;
    propWidth1?: string;
}

interface FrameComponent3Props extends FrameComponentProps {
    productInformationAccurac?: string;
    youHaveTheRightToAccessUp?: string;
}

const FrameComponent3: FC<FrameComponent3Props> = (props) => {
  return (
    <section className={styles.frameWrapper}>
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.frameContainer}>
            <div className={styles.featuredProductsParent}>
              <h1 className={styles.featuredProducts}>Featured Products</h1>
              <div className={styles.elevateYourHealth}>
                Elevate Your Health with Our Premium Probiotic Supplements
              </div>
            </div>
          </div>
          <div className={styles.frameDiv}>
            <FrameComponent4
              rectangle4668="/rectangle-4668@2x.png"
              greenVitalityBlend="Green Vitality Blend"
              revitalizeWithNutrientRic="Revitalize with nutrient-rich greens. Boost energy and immunity. Organic and delicious."
              frame1000003519="Organic Ingredients"
              frame1000003520="Immune Support"
            />
            <FrameComponent4
              rectangle4668="/rectangle-4668-1@2x.png"
              greenVitalityBlend="Omega Bliss Capsules"
              revitalizeWithNutrientRic="Essential fatty acids for heart and brain health. Sustain energy and promote well-being."
              frame1000003519="Heart Support"
              frame1000003520="Brain Boost"
              propWidth="265px"
              propFlexWrap="unset"
              propMinWidth="unset"
              propFlex="1"
              propWidth1="unset"
              propWidth2="118px"
              propFlex1="unset"
              propMinWidth1="unset"
            />
            <FrameComponent4
              rectangle4668="/rectangle-4668-2@2x.png"
              greenVitalityBlend="Sunrise Wellness Drops"
              revitalizeWithNutrientRic="Start your day right. Support mental clarity and mood. Natural and fast-acting."
              frame1000003519="Mental Clarity"
              frame1000003520="Fast Absorption"
              propWidth="293px"
              propFlexWrap="unset"
              propMinWidth="unset"
              propFlex="unset"
              propWidth1="134px"
              propWidth2="unset"
              propFlex1="1"
              propMinWidth1="unset"
            />
            <FrameComponent4
              rectangle4668="/rectangle-4668-3@2x.png"
              greenVitalityBlend="Probiotic Harmony"
              revitalizeWithNutrientRic="Gut health champion. Balance digestion and enhance immunity. Clinically proven strains."
              frame1000003519="Digestive Balance"
              frame1000003520="Immune Defense"
              propWidth="328px"
              propFlexWrap="wrap"
              propMinWidth="105px"
              propFlex="1"
              propWidth1="unset"
              propWidth2="unset"
              propFlex1="1"
              propMinWidth1="100px"
            />
          </div>
        </div>
        <div className={styles.frameParent1}>
          <div className={styles.frameWrapper1}>
            <div className={styles.frameParent2}>
              <div className={styles.immuneSystemBoostingComplexParent}>
                <div className={styles.immuneSystemBoosting}>
                  Immune System Boosting Complex
                </div>
                <h1 className={styles.armorForYour}>
                  Armor for Your Body, Naturally
                </h1>
                <div className={styles.frameParent3}>
                  <Button
                    className={styles.frameChild}
                    disableElevation={true}
                    variant="contained"
                    sx={{
                      textTransform: "none",
                      color: "#343434",
                      fontSize: "16",
                      background: "#efefef",
                      borderRadius: "24px",
                      "&:hover": { background: "#efefef" },
                      width: 139,
                      height: 44,
                    }}
                  >
                    Vital Immunity
                  </Button>
                  <Button
                    className={styles.frameItem}
                    disableElevation={true}
                    variant="contained"
                    sx={{
                      textTransform: "none",
                      color: "#343434",
                      fontSize: "16",
                      background: "#efefef",
                      borderRadius: "24px",
                      "&:hover": { background: "#efefef" },
                      height: 44,
                    }}
                  >
                    Defender Formula
                  </Button>
                  <Button
                    className={styles.frameInner}
                    disableElevation={true}
                    variant="contained"
                    sx={{
                      textTransform: "none",
                      color: "#343434",
                      fontSize: "16",
                      background: "#efefef",
                      borderRadius: "24px",
                      "&:hover": { background: "#efefef" },
                      width: 149,
                      height: 44,
                    }}
                  >{`Guardian Blend `}</Button>
                </div>
                <div className={styles.supportYourImmune}>
                  Support your immune system's daily battles with this
                  synergistic blend of probiotics and potent immune-boosting
                  herbs.
                </div>
              </div>
              <Button
                className={styles.button}
                endIcon={
                  <img width="28.4px" height="16.4px" src="/group-1-1.svg" />
                }
                disableElevation={true}
                variant="contained"
                sx={{
                  color: "#fff",
                  fontSize: "16",
                  background: "#be3982",
                  border: "#fdfdfd solid 1px",
                  borderRadius: "8px",
                  "&:hover": { background: "#be3982" },
                  width: 195.4,
                  height: 64,
                }}
              >
                SHOP Now
              </Button>
            </div>
          </div>
          <div className={styles.rectangleParent}>
            <div className={styles.rectangleDiv} />
            <img
              className={styles.naturalBodymock2x1}
              loading="lazy"
              alt=""
              src="/natural-bodymock2x-1@2x.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent3;
