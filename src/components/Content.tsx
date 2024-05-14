import { FunctionComponent } from "react";
import styles from "./Content.module.css";

const Content: FunctionComponent = () => {
  return (
    <div className={styles.content}>
      <h3 className={styles.probioticsalways}>probioticsalways</h3>
      <div className={styles.productGrid}>
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
        <img
          className={styles.userIcon1}
          loading="lazy"
          alt=""
          src="/user-1.svg"
        />
      </div>
    </div>
  );
};

export default Content;
