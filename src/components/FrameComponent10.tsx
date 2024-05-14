import { FunctionComponent } from "react";
import { Button } from "@mui/material";
import styles from "./FrameComponent10.module.css";

const FrameComponent10: FunctionComponent = () => {
  return (
    <section className={styles.frameWrapper}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.factsTable}>
          <div className={styles.rectangleGroup}>
            <div className={styles.frameItem} />
            <div className={styles.supplementFactsTitleWrapper}>
              <Button
                className={styles.supplementFactsTitle}
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
            <div className={styles.servingInfo}>
              <div className={styles.servingSize}>
                <div className={styles.servingSizeParent}>
                  <div className={styles.servingSize1}>SERVING SIZE</div>
                  <h3 className={styles.capsules}>2 Capsules</h3>
                </div>
                <div className={styles.servingCount}>
                  <div className={styles.servingsPerContainer}>
                    SERVINGS PER CONTAINER
                  </div>
                  <b className={styles.servingCountValue}>30</b>
                </div>
              </div>
            </div>
            <div className={styles.nutrientTable}>
              <div className={styles.nutrientRows}>
                <div className={styles.perServingInfo}>
                  <div className={styles.caloriesLabelWrapper}>
                    <div className={styles.caloriesLabel}>
                      <div className={styles.amountPerServing}>
                        AMOUNT PER SERVING
                      </div>
                      <div className={styles.dailyValue}>% DAILY VALUE</div>
                    </div>
                  </div>
                  <div className={styles.caloriesValue}>
                    <h3 className={styles.calories}>Calories</h3>
                    <h3 className={styles.perServing}>5 per serving</h3>
                  </div>
                </div>
                <div className={styles.nutrientColumns}>
                  <div className={styles.energeticFuel1g}>
                    Energetic Fuel: 1g
                  </div>
                  <b className={styles.nutrientValues}> (10%)</b>
                </div>
                <div className={styles.nutrientColumns1}>
                  <div className={styles.powerCalorics1g}>
                    Power Calorics: 1g
                  </div>
                  <b className={styles.b}>15%</b>
                </div>
                <div className={styles.nutrientColumns2}>
                  <div className={styles.energyEssence1g}>
                    Energy Essence: 1g
                  </div>
                  <b className={styles.b1}>0%</b>
                </div>
                <div className={styles.nutrientColumns3}>
                  <div className={styles.vitalityQuotient1mg}>
                    Vitality Quotient: 1mg (0%)
                  </div>
                  <b className={styles.b2}>3%</b>
                </div>
                <div className={styles.nutrientColumns4}>
                  <div className={styles.fuelIntensity1g}>
                    Fuel Intensity: 1g (0%)
                  </div>
                  <b className={styles.b3}>8%</b>
                </div>
                <div className={styles.nutrientColumns5}>
                  <div className={styles.dynamicCalories1g}>
                    Dynamic Calories: 1g (0%)
                  </div>
                  <b className={styles.b4}>11%</b>
                </div>
                <div className={styles.nutrientColumns6}>
                  <div className={styles.vigorCalories1g}>
                    Vigor Calories: 1g
                  </div>
                  <b className={styles.b5}>1%</b>
                </div>
                <div className={styles.nutrientColumns7}>
                  <div className={styles.nourishPower1g}>Nourish Power: 1g</div>
                  <b className={styles.b6}>10%</b>
                </div>
              </div>
            </div>
            <div className={styles.frameContainer}>
              <div className={styles.vitaminsParent}>
                <div className={styles.vitamins}>
                  <div className={styles.vitaminColumns}>
                    <div className={styles.essentialNutrients}>
                      Essential Nutrients (% Daily Value)
                    </div>
                    <b className={styles.vitaminSeparator}>0%</b>
                  </div>
                  <div className={styles.vitaminColumns1}>
                    <div className={styles.vitaminC}>{`Vitamin C: `}</div>
                    <b className={styles.b7}>8%</b>
                  </div>
                </div>
                <div className={styles.minerals}>
                  <div className={styles.calcium}>Calcium</div>
                  <b className={styles.mineralSeparator}>10%</b>
                </div>
                <div className={styles.minerals1}>
                  <div className={styles.iron}>Iron</div>
                  <b className={styles.b8}>4%</b>
                </div>
              </div>
            </div>
            <div className={styles.supplementInfo}>
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
          <div className={styles.ingredientInstructionsWrapper}>
            <div className={styles.ingredientInstructions}>
              <div className={styles.productInfo}>
                <h1 className={styles.productInformation}>
                  Product Information
                </h1>
                <div className={styles.revitalizeWithOrganic}>
                  Revitalize with organic superfoods like spirulina and kale.
                  Mix one scoop with water daily for an energy boost.
                </div>
              </div>
              <div className={styles.frameParent}>
                <div className={styles.headingRowsParent}>
                  <div className={styles.headingRows}>
                    <b className={styles.keyIngredients}>Key Ingredients</b>
                    <div className={styles.fiSsAngleDownWrapper}>
                      <img
                        className={styles.fiSsAngleDownIcon}
                        alt=""
                        src="/fissangledown@2x.png"
                      />
                    </div>
                  </div>
                  <div className={styles.frameInner} />
                </div>
                <div className={styles.spirulinaKaleWheatgrassContainer}>
                  <ul className={styles.spirulinaKaleWheatgrassBarl}>
                    <li className={styles.spirulina}>Spirulina</li>
                    <li className={styles.kale}>Kale</li>
                    <li className={styles.wheatgrass}>Wheatgrass</li>
                    <li className={styles.barleyGrass}>Barley grass</li>
                    <li className={styles.chlorella}>Chlorella</li>
                    <li>Spinach</li>
                  </ul>
                </div>
              </div>
              <div className={styles.frameGroup}>
                <div className={styles.frameDiv}>
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
                  <div className={styles.lineDiv} />
                </div>
                <div className={styles.mixOneScoop}>
                  Mix one scoop with water daily for an energy boost. Best taken
                  in the morning for a revitalizing start.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent10;
