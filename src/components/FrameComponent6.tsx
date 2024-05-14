import { FunctionComponent } from "react";
import styles from "./FrameComponent6.module.css";

const FrameComponent6: FunctionComponent = () => {
  return (
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
        <img className={styles.userIcon} alt="" src="/user.svg" />
        <img className={styles.userIcon1} alt="" src="/user-1.svg" />
      </div>
    </div>
  );
};

export default FrameComponent6;
