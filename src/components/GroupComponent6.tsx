import { FunctionComponent } from "react";
import styles from "./GroupComponent6.module.css";

const GroupComponent6: FunctionComponent = () => {
  return (
    <header className={styles.rectangleParent}>
      <div className={styles.instanceChild} />
      <div className={styles.frameParent}>
        <div className={styles.frameWrapper}>
          <div className={styles.frameGroup}>
            <div className={styles.groupParent}>
              <img className={styles.groupIcon} alt="" src="/group.svg" />
              <img className={styles.groupIcon1} alt="" src="/group-1.svg" />
              <div className={styles.group}>
                <img className={styles.groupIcon2} alt="" src="/group-2.svg" />
                <img className={styles.groupIcon3} alt="" src="/group-3.svg" />
              </div>
              <img className={styles.groupIcon4} alt="" src="/group-4.svg" />
            </div>
            <div className={styles.probioticsalwaysWrapper}>
              <div className={styles.probioticsalways}>Probioticsalways</div>
            </div>
          </div>
        </div>
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
        <div className={styles.frameContainer}>
          <div className={styles.frameParent1}>
            <div className={styles.userWrapper}>
              <img className={styles.userIcon} alt="" src="/user.svg" />
            </div>
            <img className={styles.userIcon1} alt="" src="/user-3.svg" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default GroupComponent6;
