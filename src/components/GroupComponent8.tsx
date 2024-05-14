import { FunctionComponent } from "react";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import styles from "./GroupComponent8.module.css";

const GroupComponent8: FunctionComponent = () => {
  return (
    <section className={styles.fAQBackgroundParent}>
      <div className={styles.fAQBackground} />
      <div className={styles.frameParent}>
        <div className={styles.frequentlyAskedQuestionsWrapper}>
          <h1 className={styles.frequentlyAskedQuestions}>
            Frequently Asked Questions
          </h1>
        </div>
        <div className={styles.fAQListParent}>
          <div className={styles.fAQList}>
            <div className={styles.fAQEntry}>
              <div className={styles.fAQBackground1} />
              <div className={styles.frameGroup}>
                <div className={styles.areProbioticsSafeForChildrParent}>
                  <h3 className={styles.areProbioticsSafe}>
                    Are probiotics safe for children?
                  </h3>
                  <div className={styles.frameWrapper}>
                    <img
                      className={styles.frameChild}
                      loading="lazy"
                      alt=""
                      src="/group-1000005947.svg"
                    />
                  </div>
                </div>
                <div className={styles.yesProbioticsAre}>
                  Yes, probiotics are generally safe for children. We offer a
                  range of probiotic supplements specially formulated for kids.
                  However, it's recommended to consult with a pediatrician
                  before introducing any new supplements to your child's
                  routine.
                </div>
              </div>
            </div>
            <div className={styles.fAQIconParent}>
              <div className={styles.fAQIcon} />
              <div className={styles.canITakeProbioticsWhilePrParent}>
                <b className={styles.canITake}>
                  Can I take probiotics while pregnant or breastfeeding?
                </b>
                <div className={styles.frameContainer}>
                  <img
                    className={styles.frameItem}
                    alt=""
                    src="/group-1000005950.svg"
                  />
                </div>
              </div>
            </div>
            <TextField
              className={styles.fAQListChild}
              placeholder="Are probiotics suitable for vegetarians?"
              variant="outlined"
              InputProps={{
                endAdornment: (
                  <img
                    width="25px"
                    height="25px"
                    src="/group-1000005950-1.svg"
                  />
                ),
              }}
              sx={{
                "& fieldset": { borderColor: "#fdfdfd" },
                "& .MuiInputBase-root": {
                  height: "109px",
                  paddingRight: "47px",
                  borderRadius: "8px",
                  fontSize: "22px",
                },
                "& .MuiInputBase-input": { color: "#fff" },
              }}
            />
          </div>
          <img
            className={styles.maskGroupIcon}
            loading="lazy"
            alt=""
            src="/mask-group@2x.png"
          />
        </div>
      </div>
    </section>
  );
};

export default GroupComponent8;
