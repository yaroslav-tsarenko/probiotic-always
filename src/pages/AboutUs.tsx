import { FunctionComponent } from "react";
import FrameComponent1 from "../components/FrameComponent1";
import HealthJourneyContainer from "../components/HealthJourneyContainer";
import GroupComponent2 from "../components/GroupComponent2";
import GroupComponent1 from "../components/GroupComponent1";
import GroupComponent from "../components/GroupComponent";
import styles from "./AboutUs.module.css";

const AboutUs: FunctionComponent = () => {
  return (
    <div className={styles.aboutUs}>
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
      <div className={styles.aboutUsInner}>
        <img
          className={styles.frameChild}
          loading="lazy"
          alt=""
          src="/group-1000005946.svg"
        />
      </div>
      <main className={styles.frameParent}>
        <FrameComponent1 />
        <section className={styles.healthJourneyContainerWrapper}>
          <HealthJourneyContainer />
        </section>
        <GroupComponent2 />
        <GroupComponent1 />
        <GroupComponent />
      </main>
    </div>
  );
};

export default AboutUs;
