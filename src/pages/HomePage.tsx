import { FunctionComponent } from "react";
import FrameComponent6 from "../components/FrameComponent6";
import FrameComponent5 from "../components/FrameComponent5";
import GroupComponent3 from "../components/GroupComponent3";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent1 from "../components/FrameComponent1";
import GroupComponent2 from "../components/GroupComponent2";
import GroupComponent1 from "../components/GroupComponent1";
import GroupComponent from "../components/GroupComponent";
import styles from "./HomePage.module.css";

const HomePage: FunctionComponent = () => {
  return (
    <div className={styles.homePage}>
      <FrameComponent6 />
      <div className={styles.homePageChild} />
      <div className={styles.homePageInner}>
        <img className={styles.frameChild} alt="" src="/group-1000005946.svg" />
      </div>
      <main className={styles.frameParent}>
        <FrameComponent5 />
        <GroupComponent3 />
        <section className={styles.frameWrapper}>
          <div className={styles.rectangleParent}>
            <div className={styles.frameItem} />
            <h1 className={styles.exploreAndEmbrace}>
              explore, and embrace the transformative power of nature.
            </h1>
          </div>
        </section>
        <FrameComponent3 />
        <FrameComponent2 />
        <FrameComponent1 />
        <section className={styles.frameContainer}>
          <div className={styles.frameGroup}>
            <div className={styles.frameDiv}>
              <div className={styles.unleashNaturesPotencyUncoParent}>
                <h1 className={styles.unleashNaturesPotency}>
                  Unleash Nature's Potency, Uncover Your Best Self
                </h1>
                <div className={styles.delveIntoThe}>
                  Delve into the transformative power of nature's finest.
                  Elevate your vitality with our meticulously crafted
                  supplements. Dive into a realm of health and wellness, where
                  each product is a step towards your peak potential. Discover
                  the art of nourishing your body and mind, and unlock a more
                  vibrant, resilient you.
                </div>
              </div>
            </div>
            <img
              className={styles.frameInner}
              loading="lazy"
              alt=""
              src="/rectangle-4669@2x.png"
            />
          </div>
        </section>
        <GroupComponent2 />
        <GroupComponent1 />
        <GroupComponent />
      </main>
    </div>
  );
};

export default HomePage;
