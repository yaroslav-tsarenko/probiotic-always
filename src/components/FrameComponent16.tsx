import { FunctionComponent, useMemo, type CSSProperties } from "react";
import { Button } from "@mui/material";
import styles from "./FrameComponent16.module.css";

export type FrameComponent16Type = {
  boostMoodAndImmunityWithV?: string;
  vitaminDCholecalciferol?: string;
  vitaminB12Methylcobalamin?: string;
  vitaminK2?: string;
  vitaminA?: string;
  vitaminE?: string;
  vitaminC?: string;
  place1MlUnderTheTongueDai?: string;

  /** Style props */
  frameDivPadding?: CSSProperties["padding"];
};

const FrameComponent16: FunctionComponent<FrameComponent16Type> = ({
  boostMoodAndImmunityWithV,
  vitaminDCholecalciferol,
  vitaminB12Methylcobalamin,
  vitaminK2,
  vitaminA,
  vitaminE,
  vitaminC,
  place1MlUnderTheTongueDai,
  frameDivPadding,
}) => {
  const frameDiv2Style: CSSProperties = useMemo(() => {
    return {
      padding: frameDivPadding,
    };
  }, [frameDivPadding]);

  return (
    <section className={styles.productDetails3Inner}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.frameParent}>
          <div className={styles.rectangleGroup}>
            <div className={styles.frameItem} />
            <div className={styles.frameWrapper}>
              <Button
                className={styles.frameInner}
                disableElevation={true}
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#fff",
                  fontSize: "32",
                  background: "#343434",
                  borderRadius: "12px 12px 0px 0px",
                  "&:hover": { background: "#343434" },
                  height: 118,
                }}
              >
                Suppplement Fact
              </Button>
            </div>
            <div className={styles.frameContainer}>
              <div className={styles.frameGroup}>
                <div className={styles.servingSizeParent}>
                  <div className={styles.servingSize}>SERVING SIZE</div>
                  <h3 className={styles.capsules}>2 Capsules</h3>
                </div>
                <div className={styles.servingsPerContainerParent}>
                  <div className={styles.servingsPerContainer}>
                    SERVINGS PER CONTAINER
                  </div>
                  <b className={styles.b}>30</b>
                </div>
              </div>
            </div>
            <div className={styles.frameDiv}>
              <div className={styles.frameParent1}>
                <div className={styles.frameParent2}>
                  <div className={styles.frameWrapper1}>
                    <div className={styles.amountPerServingParent}>
                      <div className={styles.amountPerServing}>
                        AMOUNT PER SERVING
                      </div>
                      <div className={styles.dailyValue}>% DAILY VALUE</div>
                    </div>
                  </div>
                  <div className={styles.caloriesParent}>
                    <h3 className={styles.calories}>Calories</h3>
                    <h3 className={styles.perServing}>5 per serving</h3>
                  </div>
                </div>
                <div className={styles.energeticFuel1gParent}>
                  <div className={styles.energeticFuel1g}>
                    Energetic Fuel: 1g
                  </div>
                  <b className={styles.b1}> (10%)</b>
                </div>
                <div className={styles.powerCalorics1gParent}>
                  <div className={styles.powerCalorics1g}>
                    Power Calorics: 1g
                  </div>
                  <b className={styles.b2}>15%</b>
                </div>
                <div className={styles.energyEssence1gParent}>
                  <div className={styles.energyEssence1g}>
                    Energy Essence: 1g
                  </div>
                  <b className={styles.b3}>0%</b>
                </div>
                <div className={styles.vitalityQuotient1mg0Parent}>
                  <div className={styles.vitalityQuotient1mg}>
                    Vitality Quotient: 1mg (0%)
                  </div>
                  <b className={styles.b4}>3%</b>
                </div>
                <div className={styles.fuelIntensity1g0Parent}>
                  <div className={styles.fuelIntensity1g}>
                    Fuel Intensity: 1g (0%)
                  </div>
                  <b className={styles.b5}>8%</b>
                </div>
                <div className={styles.dynamicCalories1g0Parent}>
                  <div className={styles.dynamicCalories1g}>
                    Dynamic Calories: 1g (0%)
                  </div>
                  <b className={styles.b6}>11%</b>
                </div>
                <div className={styles.vigorCalories1gParent}>
                  <div className={styles.vigorCalories1g}>
                    Vigor Calories: 1g
                  </div>
                  <b className={styles.b7}>1%</b>
                </div>
                <div className={styles.nourishPower1gParent}>
                  <div className={styles.nourishPower1g}>Nourish Power: 1g</div>
                  <b className={styles.b8}>10%</b>
                </div>
              </div>
            </div>
            <div className={styles.frameWrapper2}>
              <div className={styles.groupDiv}>
                <div className={styles.frameParent3}>
                  <div className={styles.essentialNutrientsDailyVParent}>
                    <div className={styles.essentialNutrients}>
                      Essential Nutrients (% Daily Value)
                    </div>
                    <b className={styles.b9}>0%</b>
                  </div>
                  <div className={styles.vitaminCParent}>
                    <div className={styles.vitaminC}>{`Vitamin C: `}</div>
                    <b className={styles.b10}>8%</b>
                  </div>
                </div>
                <div className={styles.calciumParent}>
                  <div className={styles.calcium}>Calcium</div>
                  <b className={styles.b11}>10%</b>
                </div>
                <div className={styles.ironParent}>
                  <div className={styles.iron}>Iron</div>
                  <b className={styles.b12}>4%</b>
                </div>
              </div>
            </div>
            <div className={styles.pureCleanseCapsulesAreADiWrapper}>
              <div className={styles.pureCleanseCapsules}>
                /* Pure Cleanse Capsules are a dietary supplement designed to
                support natural detoxification. Please consult with a healthcare
                professional before incorporating any new supplement into your
                routine. These statements have not been evaluated by the Food
                and Drug Administration. This product is not intended to
                diagnose, treat, cure, or prevent any disease.
              </div>
            </div>
          </div>
          <div className={styles.frameWrapper3} style={frameDiv2Style}>
            <div className={styles.frameParent4}>
              <div className={styles.productInformationParent}>
                <h1 className={styles.productInformation}>
                  Product Information
                </h1>
                <div className={styles.boostMoodAndImmunityWithVWrapper}>
                  <div className={styles.boostMoodAnd}>
                    {boostMoodAndImmunityWithV}
                  </div>
                </div>
                <div className={styles.frameParent5}>
                  <div className={styles.keyIngredientsParent}>
                    <h3 className={styles.keyIngredients}>Key Ingredients</h3>
                    <div className={styles.fiSsAngleDownWrapper}>
                      <img
                        className={styles.fiSsAngleDownIcon}
                        loading="lazy"
                        alt=""
                        src="/fissangledown@2x.png"
                      />
                    </div>
                  </div>
                  <div className={styles.lineDiv} />
                </div>
                <div className={styles.vitaminDCholecalciferolContainer}>
                  <ul className={styles.vitaminDCholecalciferolVi}>
                    <li className={styles.vitaminDCholecalciferol}>
                      {vitaminDCholecalciferol}
                    </li>
                    <li className={styles.vitaminB12Methylcobalamin}>
                      Vitamin B12 (Methylcobalamin)
                    </li>
                    <li className={styles.vitaminK2}>Vitamin K2</li>
                    <li className={styles.vitaminA}>Vitamin A</li>
                    <li className={styles.vitaminE}>Vitamin E</li>
                    <li>Vitamin C</li>
                  </ul>
                </div>
              </div>
              <div className={styles.frameParent6}>
                <div className={styles.frameParent7}>
                  <div className={styles.usageInstructionsParent}>
                    <b className={styles.usageInstructions}>
                      Usage Instructions
                    </b>
                    <div className={styles.fiSsAngleDownContainer}>
                      <img
                        className={styles.fiSsAngleDownIcon1}
                        alt=""
                        src="/fissangledown@2x.png"
                      />
                    </div>
                  </div>
                  <div className={styles.frameChild1} />
                </div>
                <div className={styles.place1Ml}>
                  {place1MlUnderTheTongueDai}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent16;
