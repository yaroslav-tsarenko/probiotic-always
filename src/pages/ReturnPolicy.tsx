import { FunctionComponent } from "react";
import InstanceWrapper from "../components/InstanceWrapper";
import EligibilityContainer from "../components/EligibilityContainer";
import GroupComponent6 from "../components/GroupComponent6";
import styles from "./ReturnPolicy.module.css";

const ReturnPolicy: FunctionComponent = () => {
  return (
    <div className={styles.returnPolicy}>
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
      <div className={styles.returnPolicyInner}>
        <img className={styles.frameChild} alt="" src="/group-1000005946.svg" />
      </div>
      <main className={styles.instanceWrapperParent}>
        <InstanceWrapper />
        <EligibilityContainer />
        <GroupComponent6 />
      </main>
    </div>
  );
};

export default ReturnPolicy;
