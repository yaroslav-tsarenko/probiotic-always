import { FunctionComponent } from "react";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent4 from "../components/FrameComponent4";
import GroupComponent1 from "../components/GroupComponent1";
import styles from "./Credit.module.css";

const Credit: FunctionComponent = () => {
  return (
    <div className={styles.credit}>
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
          <img
            className={styles.userIcon1}
            loading="lazy"
            alt=""
            src="/user-1.svg"
          />
        </div>
      </div>
      <div className={styles.creditInner}>
        <img className={styles.frameChild} alt="" src="/group-1000005946.svg" />
      </div>
      <main className={styles.frameParent}>
        <FrameComponent2 blogListing="Credit" />
        <FrameComponent4 />
        <GroupComponent1 />
      </main>
    </div>
  );
};

export default Credit;
