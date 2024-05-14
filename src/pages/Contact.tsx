import { FunctionComponent } from "react";
import GroupComponent2 from "../components/GroupComponent2";
import FrameComponent5 from "../components/FrameComponent5";
import GroupComponent3 from "../components/GroupComponent3";
import styles from "./Contact.module.css";

const Contact: FunctionComponent = () => {
  return (
    <div className={styles.contact}>
      <div className={styles.probiotics}>
        <h3 className={styles.probioticsalways}>probioticsalways</h3>
        <div className={styles.productsGrid}>
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
      <div className={styles.contactInner}>
        <img className={styles.frameChild} alt="" src="/group-1000005946.svg" />
      </div>
      <main className={styles.content}>
        <GroupComponent2 />
        <FrameComponent5 contact="Contact" />
        <GroupComponent3 />
      </main>
    </div>
  );
};

export default Contact;
