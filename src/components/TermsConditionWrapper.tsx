import { FunctionComponent } from "react";
import styles from "./TermsConditionWrapper.module.css";

export type TermsConditionWrapperType = {
  termsCondition?: string;
};

const TermsConditionWrapper: FunctionComponent<TermsConditionWrapperType> = ({
  termsCondition,
}) => {
  return (
    <section className={styles.termsConditionWrapper}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <h1 className={styles.termsCondition}>{termsCondition}</h1>
      </div>
    </section>
  );
};

export default TermsConditionWrapper;
