import { FunctionComponent } from "react";
import { Button } from "@mui/material";
import FrameComponent13 from "../components/FrameComponent13";
import FrameComponent12 from "../components/FrameComponent12";
import FrameComponent11 from "../components/FrameComponent11";
import FrameComponent10 from "../components/FrameComponent10";
import GroupComponent8 from "../components/GroupComponent8";
import GroupComponent7 from "../components/GroupComponent7";
import styles from "./ProductDetails.module.css";

const ProductDetails: FunctionComponent = () => {
  return (
    <div className={styles.productDetails2}>
      <div className={styles.probioticsalwaysParent}>
        <h3 className={styles.probioticsalways}>probioticsalways</h3>
        <div className={styles.instanceParent}>
          <div className={styles.productsWrapper}>
            <div className={styles.products}>Home</div>
          </div>
          <div className={styles.productsContainer}>
            <div className={styles.products1}>PRODUCTS</div>
          </div>
          <div className={styles.productsFrame}>
            <div className={styles.products2}>About Us</div>
          </div>
          <div className={styles.frameDiv}>
            <div className={styles.products3}>Blog</div>
          </div>
          <div className={styles.productsWrapper1}>
            <div className={styles.products4}>Contact Us</div>
          </div>
        </div>
        <div className={styles.userParent}>
          <img
            className={styles.userIcon}
            loading="lazy"
            alt=""
            src="/user.svg"
          />
          <img className={styles.userIcon1} alt="" src="/user-1.svg" />
        </div>
      </div>
      <div className={styles.productDetails2Child} />
      <div className={styles.productDetails2Inner}>
        <img
          className={styles.frameChild}
          loading="lazy"
          alt=""
          src="/group-1000005946.svg"
        />
      </div>
      <main className={styles.frameParent}>
        <FrameComponent13 />
        <FrameComponent12 />
        <FrameComponent11 />
        <FrameComponent10 />
        <section className={styles.frameWrapper}>
          <div className={styles.bestsellersHeadingParent}>
            <div className={styles.bestsellersHeading}>
              <div className={styles.bestsellersTitle}>
                <h1 className={styles.discoverBestsellers}>
                  Discover Bestsellers
                </h1>
                <div className={styles.bestsellersDescription}>
                  <div className={styles.elevateYourWellBeing}>
                    Elevate your well-being with Nature's Best - where science
                    meets nature for optimal health.
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.frameGroup}>
              <div className={styles.frameContainer}>
                <div className={styles.rectangleParent}>
                  <div className={styles.frameItem} />
                  <img
                    className={styles.imageContainersIcon}
                    loading="lazy"
                    alt=""
                    src="/rectangle-4668@2x.png"
                  />
                </div>
                <div className={styles.productDetails}>
                  <div className={styles.greenVitalityBlendParent}>
                    <h3 className={styles.greenVitalityBlend}>
                      Green Vitality Blend
                    </h3>
                    <div className={styles.revitalizeWithNutrientRich}>
                      Revitalize with nutrient-rich greens. Boost energy and
                      immunity. Organic and delicious.
                    </div>
                  </div>
                  <div className={styles.productRatings}>
                    <div className={styles.starContainers}>$29.99</div>
                    <div className={styles.starsParent}>
                      <img
                        className={styles.starsIcon}
                        alt=""
                        src="/star-1.svg"
                      />
                      <div className={styles.emptyStars}>4.9</div>
                    </div>
                  </div>
                  <div className={styles.tagContainers}>
                    <Button
                      className={styles.tagContainersChild}
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
                      className={styles.secondaryTags}
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
              <div className={styles.frameParent1}>
                <div className={styles.rectangleGroup}>
                  <div className={styles.frameInner} />
                  <img
                    className={styles.rectangleIcon}
                    alt=""
                    src="/rectangle-4668-1@2x.png"
                  />
                </div>
                <div className={styles.frameParent2}>
                  <div className={styles.omegaBlissCapsulesParent}>
                    <h3 className={styles.omegaBlissCapsules}>
                      Omega Bliss Capsules
                    </h3>
                    <div className={styles.essentialFattyAcids}>
                      Essential fatty acids for heart and brain health. Sustain
                      energy and promote well-being.
                    </div>
                  </div>
                  <div className={styles.parent}>
                    <div className={styles.div}>$29.99</div>
                    <div className={styles.starParent}>
                      <img
                        className={styles.starIcon}
                        alt=""
                        src="/star-1.svg"
                      />
                      <div className={styles.div1}>4.9</div>
                    </div>
                  </div>
                  <div className={styles.frameParent3}>
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
                      Heart Support
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
              <div className={styles.frameParent4}>
                <div className={styles.rectangleContainer}>
                  <div className={styles.rectangleDiv} />
                  <img
                    className={styles.frameChild2}
                    alt=""
                    src="/rectangle-4668-2@2x.png"
                  />
                </div>
                <div className={styles.frameParent5}>
                  <div className={styles.sunriseWellnessDropsParent}>
                    <h3 className={styles.sunriseWellnessDrops}>
                      Sunrise Wellness Drops
                    </h3>
                    <div className={styles.startYourDay}>
                      Start your day right. Support mental clarity and mood.
                      Natural and fast-acting.
                    </div>
                  </div>
                  <div className={styles.group}>
                    <div className={styles.div2}>$29.99</div>
                    <div className={styles.starGroup}>
                      <img
                        className={styles.frameChild3}
                        alt=""
                        src="/star-1.svg"
                      />
                      <div className={styles.div3}>4.9</div>
                    </div>
                  </div>
                  <div className={styles.frameParent6}>
                    <Button
                      className={styles.frameChild4}
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
                      className={styles.frameChild5}
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
              <div className={styles.frameParent7}>
                <div className={styles.groupDiv}>
                  <div className={styles.frameChild6} />
                  <img
                    className={styles.frameChild7}
                    alt=""
                    src="/rectangle-4668-3@2x.png"
                  />
                </div>
                <div className={styles.frameParent8}>
                  <div className={styles.probioticHarmonyParent}>
                    <h3 className={styles.probioticHarmony}>
                      Probiotic Harmony
                    </h3>
                    <div className={styles.gutHealthChampion}>
                      Gut health champion. Balance digestion and enhance
                      immunity. Clinically proven strains.
                    </div>
                  </div>
                  <div className={styles.container}>
                    <div className={styles.div4}>$29.99</div>
                    <div className={styles.starContainer}>
                      <img
                        className={styles.frameChild8}
                        alt=""
                        src="/star-1.svg"
                      />
                      <div className={styles.div5}>4.9</div>
                    </div>
                  </div>
                  <div className={styles.frameParent9}>
                    <Button
                      className={styles.frameChild9}
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
                      className={styles.frameChild10}
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
        </section>
        <section className={styles.reviewBackgroundParent}>
          <div className={styles.reviewBackground} />
          <div className={styles.reviews}>
            <div className={styles.reviewHeading}>
              <h1 className={styles.customerReviews}>Customer Reviews</h1>
            </div>
            <div className={styles.customerReviews1}>
              <div className={styles.customerReviewContainer}>
                <div className={styles.ellipseParent}>
                  <img
                    className={styles.ellipseIcon}
                    loading="lazy"
                    alt=""
                    src="/ellipse-86@2x.png"
                  />
                  <div className={styles.alexandraParent}>
                    <b className={styles.alexandra}>Alexandra</b>
                    <div className={styles.newYorkNy}>New York, NY</div>
                  </div>
                </div>
                <div className={styles.greenVitalityBlend1}>
                  Green Vitality Blend has become my daily essential. The
                  organic ingredients make me feel invigorated, and the immune
                  support is unmatched. It's a game-changer for my overall
                  well-being!
                </div>
                <div className={styles.fiveStar}>
                  <img className={styles.vectorIcon} alt="" src="/vector.svg" />
                  <img
                    className={styles.vectorIcon1}
                    alt=""
                    src="/vector-1.svg"
                  />
                  <img
                    className={styles.vectorIcon2}
                    alt=""
                    src="/vector-2.svg"
                  />
                  <img
                    className={styles.vectorIcon3}
                    alt=""
                    src="/vector-3.svg"
                  />
                  <img
                    className={styles.vectorIcon4}
                    alt=""
                    src="/vector-4.svg"
                  />
                </div>
                <img
                  className={styles.icon}
                  loading="lazy"
                  alt=""
                  src="/.svg"
                />
              </div>
              <div className={styles.customerReviewContainer1}>
                <div className={styles.ellipseGroup}>
                  <img
                    className={styles.frameChild11}
                    alt=""
                    src="/ellipse-86-1@2x.png"
                  />
                  <div className={styles.michaelParent}>
                    <b className={styles.michael}>Michael</b>
                    <div className={styles.austinTx}>Austin, TX</div>
                  </div>
                </div>
                <div className={styles.pureGlowCollagen}>
                  “Pure Glow Collagen is my beauty secret. My skin feels
                  rejuvenated and hydrated. The noticeable radiance is
                  incredible. A must for anyone wanting healthy, glowing skin.”
                </div>
                <div className={styles.fiveStar1}>
                  <img
                    className={styles.vectorIcon5}
                    alt=""
                    src="/vector.svg"
                  />
                  <img
                    className={styles.vectorIcon6}
                    alt=""
                    src="/vector-1.svg"
                  />
                  <img
                    className={styles.vectorIcon7}
                    alt=""
                    src="/vector-2.svg"
                  />
                  <img
                    className={styles.vectorIcon8}
                    alt=""
                    src="/vector-3.svg"
                  />
                  <img
                    className={styles.vectorIcon9}
                    alt=""
                    src="/vector-4.svg"
                  />
                </div>
                <img className={styles.icon1} alt="" src="/.svg" />
              </div>
              <div className={styles.customerReviewContainer2}>
                <div className={styles.ellipseContainer}>
                  <img
                    className={styles.frameChild12}
                    alt=""
                    src="/ellipse-86-2@2x.png"
                  />
                  <div className={styles.emilyParent}>
                    <b className={styles.emily}>Emily</b>
                    <div className={styles.newYorkNy1}>New York, NY</div>
                  </div>
                </div>
                <div className={styles.moodMagicGummies}>
                  “Mood Magic Gummies are my go-to stress buster. The taste is
                  fantastic, and they truly work wonders. I feel calmer and more
                  centered after a hectic day.”
                </div>
                <div className={styles.fiveStar2}>
                  <img
                    className={styles.vectorIcon10}
                    alt=""
                    src="/vector.svg"
                  />
                  <img
                    className={styles.vectorIcon11}
                    alt=""
                    src="/vector-1.svg"
                  />
                  <img
                    className={styles.vectorIcon12}
                    alt=""
                    src="/vector-2.svg"
                  />
                  <img
                    className={styles.vectorIcon13}
                    alt=""
                    src="/vector-3.svg"
                  />
                  <img
                    className={styles.vectorIcon14}
                    alt=""
                    src="/vector-4.svg"
                  />
                </div>
                <img className={styles.icon2} alt="" src="/.svg" />
              </div>
              <div className={styles.customerReviewContainer3}>
                <div className={styles.ellipseParent1}>
                  <img
                    className={styles.frameChild13}
                    alt=""
                    src="/ellipse-86@2x.png"
                  />
                  <div className={styles.carlosParent}>
                    <b className={styles.carlos}>Carlos</b>
                    <div className={styles.miamiFl}>Miami, FL</div>
                  </div>
                </div>
                <div className={styles.sleepSerenityCapsules}>
                  “Sleep Serenity Capsules have transformed my nights. The
                  natural relaxation is remarkable. I wake up refreshed and
                  ready to tackle the day. Highly recommend for quality sleep!”
                </div>
                <div className={styles.fiveStar3}>
                  <img
                    className={styles.vectorIcon15}
                    alt=""
                    src="/vector.svg"
                  />
                  <img
                    className={styles.vectorIcon16}
                    alt=""
                    src="/vector-1.svg"
                  />
                  <img
                    className={styles.vectorIcon17}
                    alt=""
                    src="/vector-2.svg"
                  />
                  <img
                    className={styles.vectorIcon18}
                    alt=""
                    src="/vector-3.svg"
                  />
                  <img
                    className={styles.vectorIcon19}
                    alt=""
                    src="/vector-4.svg"
                  />
                </div>
                <img className={styles.icon3} alt="" src="/.svg" />
              </div>
            </div>
          </div>
        </section>
        <GroupComponent8 />
        <GroupComponent7 />
      </main>
    </div>
  );
};

export default ProductDetails;
