import { FunctionComponent } from "react";
import styles from "./Ingredients.module.css";

const Ingredients: FunctionComponent = () => {
  return (
    <section className={styles.ingredients}>
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.frameWrapper}>
            <div className={styles.naturesFinestIngredientsParent}>
              <h1 className={styles.naturesFinestIngredients}>
                Nature's Finest Ingredients
              </h1>
              <div className={styles.atTheHeartContainer}>
                <p className={styles.atTheHeart}>
                  At the heart of Probiotic Harmony lies a selection of nature's
                  finest ingredients. We meticulously source premium probiotic
                  strains, each chosen for its proven efficacy in promoting gut
                  health and overall well-being.
                </p>
                <p className={styles.blankLine}>&nbsp;</p>
                <p className={styles.ourCommitmentTo}>
                  Our commitment to wellness extends to the planet. Probiotic
                  Harmony comes in eco-friendly, sustainable packaging,
                  reflecting our dedication to both your health and the health
                  of the environment. Join us in a journey towards holistic
                  well-being, harmonizing with nature every step of the way.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.maskGroupParent}>
            <img
              className={styles.maskGroupIcon}
              loading="lazy"
              alt=""
              src="/mask-group1@2x.png"
            />
            <img
              className={styles.maskGroupIcon1}
              alt=""
              src="/mask-group-11@2x.png"
            />
          </div>
        </div>
        <div className={styles.precision}>
          <img
            className={styles.maskGroupIcon2}
            alt=""
            src="/mask-group-21@2x.png"
          />
          <div className={styles.precisionInner}>
            <div className={styles.precisionInFormulationParent}>
              <h1 className={styles.precisionInFormulation}>
                Precision in Formulation
              </h1>
              <div className={styles.craftingThePerfectContainer}>
                <p className={styles.craftingThePerfect}>
                  Crafting the perfect harmony requires precision. Our team of
                  experts employs cutting-edge formulation techniques to ensure
                  each capsule of Probiotic Harmony contains the optimal blend
                  of probiotics, offering maximum benefits for your digestive
                  system.
                </p>
                <p className={styles.blankLine1}>&nbsp;</p>
                <p className={styles.probioticHarmonyIs}>
                  Probiotic Harmony is designed for optimal absorption. Our
                  formulation includes elements that enhance bioavailability,
                  ensuring that the beneficial bacteria reach your gut in their
                  most active and potent form, ready to support your digestive
                  ecosystem.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ingredients;
