import { FunctionComponent } from "react";
import GroupComponent7 from "./GroupComponent7";
import styles from "./InstanceWrapper.module.css";

const InstanceWrapper: FunctionComponent = () => {
  return (
    <section className={styles.instanceWrapper}>
      <GroupComponent7 />
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <h1 className={styles.returnPolicy}>Return Policy</h1>
      </div>
    </section>
  );
};

export default InstanceWrapper;
