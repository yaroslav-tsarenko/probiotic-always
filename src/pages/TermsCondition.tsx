import { FunctionComponent } from "react";
import GroupComponent3 from "../components/GroupComponent3";
import TermsConditionWrapper from "../components/TermsConditionWrapper";
import InformationAccuracy from "../components/InformationAccuracy";
import GroupComponent from "../components/GroupComponent";
import styles from "./TermsCondition.module.css";

const TermsCondition: FunctionComponent = () => {
  return (
    <div className={styles.termsCondition}>
      <div className={styles.termsCondition1}>
        <h3 className={styles.probioticsalways}>probioticsalways</h3>
        <div className={styles.mainContent}>
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
      <div className={styles.termsConditionInner}>
        <img className={styles.frameChild} alt="" src="/group-1000005946.svg" />
      </div>
      <main className={styles.instanceWrapper}>
        <GroupComponent3 />
        <TermsConditionWrapper termsCondition={`Terms & Condition`} />
        <InformationAccuracy />
        <GroupComponent />
      </main>
    </div>
  );
};

export default TermsCondition;
