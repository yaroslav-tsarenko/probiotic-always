import { FunctionComponent } from "react";
import { Button } from "@mui/material";
import styles from "./FrameComponent9.module.css";

const FrameComponent9: FunctionComponent = () => {
  return (
    <section className={styles.frameWrapper}>
      <div className={styles.frameParent}>
        <div className={styles.frameContainer}>
          <div className={styles.featuredProductsParent}>
            <h1 className={styles.featuredProducts}>Featured Products</h1>
            <div className={styles.elevateYourHealth}>
              Elevate Your Health with Our Premium Probiotic Supplements
            </div>
          </div>
        </div>
        <div className={styles.instanceWrapper}>
          <div className={styles.frameGroup}>
            <div className={styles.frameDiv}>
              <div className={styles.rectangleParent}>
                <div className={styles.frameChild} />
                <img
                  className={styles.frameItem}
                  loading="lazy"
                  alt=""
                  src="/rectangle-4668@2x.png"
                />
              </div>
              <div className={styles.frameParent1}>
                <div className={styles.greenVitalityBlendParent}>
                  <h3 className={styles.greenVitalityBlend}>
                    Green Vitality Blend
                  </h3>
                  <div className={styles.revitalizeWithNutrientRich}>
                    Revitalize with nutrient-rich greens. Boost energy and
                    immunity. Organic and delicious.
                  </div>
                </div>
                <div className={styles.parent}>
                  <div className={styles.div}>$29.99</div>
                  <div className={styles.starParent}>
                    <img
                      className={styles.frameInner}
                      alt=""
                      src="/star-1.svg"
                    />
                    <div className={styles.div1}>4.9</div>
                  </div>
                </div>
                <div className={styles.frameParent2}>
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
                    Organic Ingredients
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
                    Immune Support
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
            <div className={styles.frameParent3}>
              <div className={styles.rectangleGroup}>
                <div className={styles.rectangleDiv} />
                <img
                  className={styles.rectangleIcon}
                  alt=""
                  src="/rectangle-4668-11@2x.png"
                />
              </div>
              <div className={styles.frameParent4}>
                <div className={styles.omegaBlissCapsulesParent}>
                  <h3 className={styles.omegaBlissCapsules}>
                    Omega Bliss Capsules
                  </h3>
                  <div className={styles.essentialFattyAcids}>
                    Essential fatty acids for heart and brain health. Sustain
                    energy and promote well-being.
                  </div>
                </div>
                <div className={styles.group}>
                  <div className={styles.div2}>$29.99</div>
                  <div className={styles.starGroup}>
                    <img className={styles.starIcon} alt="" src="/star-1.svg" />
                    <div className={styles.div3}>4.9</div>
                  </div>
                </div>
                <div className={styles.frameParent5}>
                  <Button
                    className={styles.frameChild2}
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
                    Heart Support
                  </Button>
                  <Button
                    className={styles.frameChild3}
                    disableElevation={true}
                    variant="contained"
                    sx={{
                      textTransform: "none",
                      color: "#343434",
                      fontSize: "14",
                      background: "#efefef",
                      borderRadius: "24px",
                      "&:hover": { background: "#efefef" },
                      width: 118,
                      height: 37,
                    }}
                  >
                    Brain Boost
                  </Button>
                </div>
                <Button
                  className={styles.button1}
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
            <div className={styles.frameParent6}>
              <div className={styles.rectangleContainer}>
                <div className={styles.frameChild4} />
                <img
                  className={styles.frameChild5}
                  alt=""
                  src="/rectangle-4668-21@2x.png"
                />
              </div>
              <div className={styles.frameParent7}>
                <div className={styles.sunriseWellnessDropsParent}>
                  <h3 className={styles.sunriseWellnessDrops}>
                    Sunrise Wellness Drops
                  </h3>
                  <div className={styles.startYourDay}>
                    Start your day right. Support mental clarity and mood.
                    Natural and fast-acting.
                  </div>
                </div>
                <div className={styles.container}>
                  <div className={styles.div4}>$29.99</div>
                  <div className={styles.starContainer}>
                    <img
                      className={styles.frameChild6}
                      alt=""
                      src="/star-1.svg"
                    />
                    <div className={styles.div5}>4.9</div>
                  </div>
                </div>
                <div className={styles.frameParent8}>
                  <Button
                    className={styles.frameChild7}
                    disableElevation={true}
                    variant="contained"
                    sx={{
                      textTransform: "none",
                      color: "#343434",
                      fontSize: "14",
                      background: "#efefef",
                      borderRadius: "24px",
                      "&:hover": { background: "#efefef" },
                      width: 134,
                      height: 37,
                    }}
                  >
                    Mental Clarity
                  </Button>
                  <Button
                    className={styles.frameChild8}
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
                    Fast Absorption
                  </Button>
                </div>
                <Button
                  className={styles.button2}
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
            <div className={styles.frameParent9}>
              <div className={styles.groupDiv}>
                <div className={styles.frameChild9} />
                <img
                  className={styles.frameChild10}
                  alt=""
                  src="/rectangle-4668-3@2x.png"
                />
              </div>
              <div className={styles.frameParent10}>
                <div className={styles.probioticHarmonyParent}>
                  <h3 className={styles.probioticHarmony}>Probiotic Harmony</h3>
                  <div className={styles.gutHealthChampion}>
                    Gut health champion. Balance digestion and enhance immunity.
                    Clinically proven strains.
                  </div>
                </div>
                <div className={styles.parent1}>
                  <div className={styles.div6}>$29.99</div>
                  <div className={styles.starParent1}>
                    <img
                      className={styles.frameChild11}
                      alt=""
                      src="/star-1.svg"
                    />
                    <div className={styles.div7}>4.9</div>
                  </div>
                </div>
                <div className={styles.frameParent11}>
                  <Button
                    className={styles.frameChild12}
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
                    Digestive Balance
                  </Button>
                  <Button
                    className={styles.frameChild13}
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
                    Immune Defense
                  </Button>
                </div>
                <Button
                  className={styles.button3}
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
          </div>
        </div>
        <div className={styles.frameParent12}>
          <div className={styles.frameParent13}>
            <div className={styles.rectangleParent1}>
              <div className={styles.frameChild14} />
              <img
                className={styles.frameChild15}
                alt=""
                src="/rectangle-4668-4@2x.png"
              />
            </div>
            <div className={styles.frameParent14}>
              <div className={styles.greenVitalityBlendGroup}>
                <h3 className={styles.greenVitalityBlend1}>
                  Pure Glow Collagen
                </h3>
                <div className={styles.revitalizeWithNutrientRich1}>
                  Radiant skin from within. Enhance elasticity and hydration.
                  Premium collagen peptides.
                </div>
              </div>
              <div className={styles.parent2}>
                <div className={styles.div8}>$29.99</div>
                <div className={styles.starParent2}>
                  <img
                    className={styles.frameChild16}
                    alt=""
                    src="/star-1.svg"
                  />
                  <div className={styles.div9}>4.9</div>
                </div>
              </div>
              <div className={styles.frameParent15}>
                <Button
                  className={styles.frameChild17}
                  disableElevation={true}
                  variant="contained"
                  sx={{
                    textTransform: "none",
                    color: "#343434",
                    fontSize: "14",
                    background: "#efefef",
                    borderRadius: "24px",
                    "&:hover": { background: "#efefef" },
                    width: 135,
                    height: 37,
                  }}
                >
                  Skin Radiance
                </Button>
                <Button
                  className={styles.frameChild18}
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
                  Hydration Boost
                </Button>
              </div>
              <Button
                className={styles.button4}
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
          <div className={styles.frameParent16}>
            <div className={styles.rectangleParent2}>
              <div className={styles.frameChild19} />
              <img
                className={styles.frameChild20}
                alt=""
                src="/rectangle-4668-5@2x.png"
              />
            </div>
            <div className={styles.frameParent17}>
              <div className={styles.omegaBlissCapsulesGroup}>
                <h3 className={styles.omegaBlissCapsules1}>Turmeric Elixir</h3>
                <div className={styles.essentialFattyAcids1}>
                  Natural anti-inflammatory. Ease joint pain and support overall
                  well-being. Potent curcumin.
                </div>
              </div>
              <div className={styles.parent3}>
                <div className={styles.div10}>$29.99</div>
                <div className={styles.starParent3}>
                  <img
                    className={styles.frameChild21}
                    alt=""
                    src="/star-1.svg"
                  />
                  <div className={styles.div11}>4.9</div>
                </div>
              </div>
              <div className={styles.frameParent18}>
                <Button
                  className={styles.frameChild22}
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
                  Anti-Inflammatory
                </Button>
                <Button
                  className={styles.frameChild23}
                  disableElevation={true}
                  variant="contained"
                  sx={{
                    textTransform: "none",
                    color: "#343434",
                    fontSize: "14",
                    background: "#efefef",
                    borderRadius: "24px",
                    "&:hover": { background: "#efefef" },
                    width: 131,
                    height: 37,
                  }}
                >
                  Joint Support
                </Button>
              </div>
              <Button
                className={styles.button5}
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
          <div className={styles.frameParent19}>
            <div className={styles.rectangleParent3}>
              <div className={styles.frameChild24} />
              <img
                className={styles.frameChild25}
                alt=""
                src="/rectangle-4668-6@2x.png"
              />
            </div>
            <div className={styles.frameParent20}>
              <div className={styles.sunriseWellnessDropsGroup}>
                <h3 className={styles.sunriseWellnessDrops1}>
                  Mood Magic Gummies
                </h3>
                <div className={styles.startYourDay1}>
                  Chase away stress naturally. Uplift mood and calm the mind.
                  Tasty and effective.
                </div>
              </div>
              <div className={styles.parent4}>
                <div className={styles.div12}>$29.99</div>
                <div className={styles.starParent4}>
                  <img
                    className={styles.frameChild26}
                    alt=""
                    src="/star-1.svg"
                  />
                  <div className={styles.div13}>4.9</div>
                </div>
              </div>
              <div className={styles.frameParent21}>
                <Button
                  className={styles.frameChild27}
                  disableElevation={true}
                  variant="contained"
                  sx={{
                    textTransform: "none",
                    color: "#343434",
                    fontSize: "14",
                    background: "#efefef",
                    borderRadius: "24px",
                    "&:hover": { background: "#efefef" },
                    width: 124,
                    height: 37,
                  }}
                >
                  Stress Relief
                </Button>
                <Button
                  className={styles.frameChild28}
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
                  Tasty Wellness
                </Button>
              </div>
              <Button
                className={styles.button6}
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
          <div className={styles.frameParent22}>
            <div className={styles.rectangleParent4}>
              <div className={styles.frameChild29} />
              <img
                className={styles.frameChild30}
                alt=""
                src="/rectangle-4668-7@2x.png"
              />
            </div>
            <div className={styles.frameParent23}>
              <div className={styles.probioticHarmonyGroup}>
                <h3 className={styles.probioticHarmony1}>
                  Sleep Serenity Capsules
                </h3>
                <div className={styles.gutHealthChampion1}>
                  Nourish your sleep. Relax and restore with natural herbs. Wake
                  up refreshed and revitalized.
                </div>
              </div>
              <div className={styles.parent5}>
                <div className={styles.div14}>$29.99</div>
                <div className={styles.starParent5}>
                  <img
                    className={styles.frameChild31}
                    alt=""
                    src="/star-1.svg"
                  />
                  <div className={styles.div15}>4.9</div>
                </div>
              </div>
              <div className={styles.frameParent24}>
                <Button
                  className={styles.frameChild32}
                  disableElevation={true}
                  variant="contained"
                  sx={{
                    textTransform: "none",
                    color: "#343434",
                    fontSize: "14",
                    background: "#efefef",
                    borderRadius: "24px",
                    "&:hover": { background: "#efefef" },
                    width: 136,
                    height: 37,
                  }}
                >
                  Sleep Support
                </Button>
                <Button
                  className={styles.frameChild33}
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
                  Natural Relaxation
                </Button>
              </div>
              <Button
                className={styles.button7}
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
        </div>
      </div>
    </section>
  );
};

export default FrameComponent9;
