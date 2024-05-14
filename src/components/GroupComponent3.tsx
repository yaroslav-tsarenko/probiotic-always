import { FunctionComponent } from "react";
import { Button } from "@mui/material";
import styles from "./GroupComponent3.module.css";

const GroupComponent3: FunctionComponent = () => {
  return (
    <section className={styles.rectangleParent}>
      <img className={styles.frameChild} alt="" src="/rectangle-4665@2x.png" />
      <div className={styles.frameParent}>
        <div className={styles.elevateYourHealthWithNaturParent}>
          <h1 className={styles.elevateYourHealth}>
            Elevate Your Health with Nature's Best
          </h1>
          <h3 className={styles.weBelieveIn}>
            we believe in harnessing the power of nature to support your
            well-being. Our range of probiotic supplements is carefully curated
            to promote a balanced, healthy lifestyle. Discover the benefits of
            incorporating probiotics into your daily routine and experience the
            difference they can make.
          </h3>
        </div>
        <div className={styles.buttonParent}>
          <Button
            className={styles.button}
            endIcon={<img width="28.4px" height="16.4px" src="/group-1.svg" />}
            disableElevation={true}
            variant="contained"
            sx={{
              color: "#fff",
              fontSize: "16",
              background: "#be3982",
              border: "#fdfdfd solid 1px",
              borderRadius: "8px",
              "&:hover": { background: "#be3982" },
              height: 64,
            }}
          >
            SHOP ROUTINES
          </Button>
          <Button
            className={styles.button1}
            disableElevation={true}
            variant="contained"
            sx={{
              color: "#fff",
              fontSize: "16",
              background: "#6e9e24",
              borderRadius: "8px",
              "&:hover": { background: "#6e9e24" },
              width: 215,
              height: 64,
            }}
          >
            CLINICAL STUDY
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GroupComponent3;
