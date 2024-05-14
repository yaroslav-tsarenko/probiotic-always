import { FunctionComponent } from "react";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import GroupComponent from "../components/GroupComponent";
import styles from "./SubscribeSave.module.css";

const SubscribeSave: FunctionComponent = () => {
  return (
    <div className={styles.subscribeSave}>
      <FrameComponent3 />
      <div className={styles.subscribeSaveInner}>
        <img className={styles.frameChild} alt="" src="/group-1000005946.svg" />
      </div>
      <main className={styles.frameParent}>
        <FrameComponent2 />
        <FrameComponent1 />
        <FrameComponent />
        <GroupComponent />
      </main>
    </div>
  );
};

export default SubscribeSave;
