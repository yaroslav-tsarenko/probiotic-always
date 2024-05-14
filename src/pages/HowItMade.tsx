import { FunctionComponent } from "react";
import GroupComponent6 from "../components/GroupComponent6";
import FrameComponent5 from "../components/FrameComponent5";
import GroupComponent5 from "../components/GroupComponent5";
import GroupComponent4 from "../components/GroupComponent4";
import styles from "./HowItMade.module.css";

const HowItMade: FunctionComponent = () => {
  return (
    <div className={styles.howItMade}>
      <div className={styles.made}>
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
        <div className={styles.users}>
          <img
            className={styles.userIcon}
            loading="lazy"
            alt=""
            src="/user.svg"
          />
          <img className={styles.userIcon1} alt="" src="/user-1.svg" />
        </div>
      </div>
      <div className={styles.howItMadeInner}>
        <img className={styles.frameChild} alt="" src="/group-1000005946.svg" />
      </div>
      <main className={styles.instanceGroup}>
        <GroupComponent6 />
        <FrameComponent5 contact="Crafting Probiotic Harmony" />
        <GroupComponent5 />
        <GroupComponent4 />
      </main>
    </div>
  );
};

export default HowItMade;
