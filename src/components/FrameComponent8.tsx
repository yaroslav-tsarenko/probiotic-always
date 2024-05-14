import { FunctionComponent } from "react";
import { Button } from "@mui/material";
import styles from "./FrameComponent8.module.css";

const FrameComponent8: FunctionComponent = () => {
  return (
    <section className={styles.frameWrapper}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <img
          className={styles.frameItem}
          loading="lazy"
          alt=""
          src="/rectangle-46721@2x.png"
        />
        <div className={styles.frameContainer}>
          <div className={styles.frameParent}>
            <div className={styles.yourPathToHolisticWellnessParent}>
              <h1 className={styles.yourPathTo}>
                Your Path to Holistic Wellness
              </h1>
              <div className={styles.embarkOnA}>
                Embark on a journey to holistic well-being. Explore our curated
                selection of premium supplements designed to elevate your health
                naturally. From vibrant energy to serene sleep, find your
                balance with science-backed formulations and pure, potent
                ingredients. Welcome to a healthier, happier you.
              </div>
            </div>
            <Button
              className={styles.button}
              endIcon={
                <img width="28.4px" height="16.4px" src="/group-1.svg" />
              }
              disableElevation={true}
              variant="contained"
              sx={{
                color: "#fff",
                fontSize: "16",
                background: "#6e9e24",
                border: "#fdfdfd solid 1px",
                borderRadius: "8px",
                "&:hover": { background: "#6e9e24" },
                width: 243.4,
                height: 64,
              }}
            >
              SHOP ROUTINES
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent8;
