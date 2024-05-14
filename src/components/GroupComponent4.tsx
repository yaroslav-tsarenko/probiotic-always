import { FunctionComponent } from "react";
import { Button } from "@mui/material";
import styles from "./GroupComponent4.module.css";

const GroupComponent4: FunctionComponent = () => {
  return (
    <footer className={styles.rectangleParent}>
      <div className={styles.instanceChild} />
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.frameWrapper}>
            <div className={styles.frameContainer}>
              <div className={styles.frameDiv}>
                <div className={styles.groupParent}>
                  <img className={styles.groupIcon} alt="" src="/group-5.svg" />
                  <img
                    className={styles.groupIcon1}
                    alt=""
                    src="/group-6.svg"
                  />
                  <div className={styles.group}>
                    <img
                      className={styles.groupIcon2}
                      alt=""
                      src="/group-7.svg"
                    />
                    <img
                      className={styles.groupIcon3}
                      alt=""
                      src="/group-8.svg"
                    />
                  </div>
                  <img
                    className={styles.groupIcon4}
                    alt=""
                    src="/group-9.svg"
                  />
                </div>
                <div className={styles.probioticsalwaysWrapper}>
                  <div className={styles.probioticsalways}>
                    Probioticsalways
                  </div>
                </div>
              </div>
              <h3
                className={styles.discoverTheSynergy}
              >{`Discover the synergy of science and nature as we unveil a range of meticulously crafted supplements designed to elevate every aspect of your health. `}</h3>
              <div className={styles.frameParent1}>
                <div className={styles.yourEmailWrapper}>
                  <div className={styles.yourEmail}>yOUR EMAIL....</div>
                </div>
                <Button
                  className={styles.frameChild}
                  disableElevation={true}
                  variant="outlined"
                  sx={{
                    color: "#343434",
                    fontSize: "16",
                    borderColor: "#343434",
                    borderRadius: "0px 8px 8px 0px",
                    "&:hover": { borderColor: "#343434" },
                    width: 147,
                    height: 72,
                  }}
                >
                  sUBSCRIBE
                </Button>
              </div>
              <div className={styles.icon}>
                <div className={styles.div}></div>
                <div className={styles.div1}></div>
                <div className={styles.div2}></div>
              </div>
            </div>
          </div>
          <div className={styles.frameParent2}>
            <div className={styles.homeParent}>
              <div className={styles.home}>HOME</div>
              <div className={styles.products}>PRODUCTS</div>
              <div className={styles.credit}>CREDIT</div>
              <div className={styles.aboutUs}>ABOUT US</div>
              <div className={styles.contact}>CONTACT</div>
            </div>
            <div className={styles.howItMadeParent}>
              <div className={styles.howItMade}>hOW IT MADE</div>
              <div className={styles.subscribeSave}>{`sUBSCRIBE & SAVE`}</div>
              <div className={styles.privacyPolicy}>pRIVACY POLICY</div>
              <div className={styles.termsCondition}>{`TERMS & CONDITION`}</div>
              <div className={styles.cancellationPolicy}>
                CANCELLATION POLICY
              </div>
              <div className={styles.returnPolicy}>RETURN POLICY</div>
            </div>
          </div>
        </div>
        <div className={styles.copyright2023ProbioticsalwaWrapper}>
          <div className={styles.copyright2023ProbioticsalwaContainer}>
            <span></span>
            <span className={styles.copyright2023Probioticsalwa}>
              {" "}
              Copyright 2023. probioticsalways.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default GroupComponent4;
