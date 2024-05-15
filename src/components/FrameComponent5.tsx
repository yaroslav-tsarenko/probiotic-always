import {FC, FunctionComponent} from "react";
import styles from "./FrameComponent5.module.css";
import {Link} from "react-router-dom";

interface FrameComponent5Props {
  contact?: string;
}

const FrameComponent5: FC<FrameComponent5Props> = (props) => {
  return (
    <header className={styles.frameParent}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.freeDeliveryOn}>
          FREE delivery on all orders over $50
        </div>
      </div>
      <div className={styles.rectangleGroup}>
        <div className={styles.instanceChild} />
        <div className={styles.frameGroup}>
          <div className={styles.frameWrapper}>
            <div className={styles.frameContainer}>
              <div className={styles.groupParent}>
                <img className={styles.groupIcon} alt="" src="/group.svg" />
                <img className={styles.groupIcon1} alt="" src="/group-1.svg" />
                <div className={styles.group}>
                  <img
                    className={styles.groupIcon2}
                    alt=""
                    src="/group-2.svg"
                  />
                  <img
                    className={styles.groupIcon3}
                    alt=""
                    src="/group-3.svg"
                  />
                </div>
                <img className={styles.groupIcon4} alt="" src="/group-4.svg" />
              </div>
              <div className={styles.probioticsalwaysWrapper}>
                <div className={styles.probioticsalways}>Probioticsalways</div>
              </div>
            </div>
          </div>
          <div className={styles.instanceParent}>
            <Link to="/" className={styles.productsWrapper}>
              <div className={styles.products}>Home</div>
            </Link>
            <Link to="/product-listing" className={styles.productsContainer}>
              <div className={styles.products1}>PRODUCTS</div>
            </Link>
            <Link to="/about-us" className={styles.productsFrame}>
              <div className={styles.products2}>About Us</div>
            </Link>
            <Link to="/blog" className={styles.frameDiv}>
              <div className={styles.products3}>Blog</div>
            </Link>
            <Link to="/contact-us" className={styles.productsWrapper1}>
              <div className={styles.products4}>Contact Us</div>
            </Link>
          </div>
          <div className={styles.frameWrapper1}>
            <div className={styles.frameParent1}>
              <div className={styles.userWrapper}>
                <img className={styles.userIcon} alt="" src="/user.svg" />
              </div>
              <img className={styles.userIcon1} alt="" src="/user-3.svg" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default FrameComponent5;
