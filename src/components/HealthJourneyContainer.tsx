import { FunctionComponent } from "react";
import { Button } from "@mui/material";
import FrameComponent from "./FrameComponent";
import styles from "./HealthJourneyContainer.module.css";

const HealthJourneyContainer: FunctionComponent = () => {
  return (
    <div className={styles.healthJourneyContainer}>
      <div className={styles.frameParent}>
        <div className={styles.frameWrapper}>
          <div className={styles.customerCentricFocusParent}>
            <h1 className={styles.customerCentricFocus}>
              Customer-Centric Focus
            </h1>
            <div className={styles.ourCustomersAreContainer}>
              <p className={styles.ourCustomersAre}>
                Our customers are at the heart of everything we do. Your health
                and satisfaction are our top priorities. We welcome your
                feedback, questions, and stories. Every interaction with
                ProbioticsAlways is an opportunity to enhance your well-being.
              </p>
              <p className={styles.blankLine}>&nbsp;</p>
              <p className={styles.ourFormulationsAre}>
                Our formulations are crafted with precision and backed by the
                latest scientific research. We stay at the forefront of
                probiotic innovation, constantly seeking out the most effective
                strains and complementary ingredients.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.maskGroupParent}>
          <img
            className={styles.maskGroupIcon}
            loading="lazy"
            alt=""
            src="/mask-group@2x.png"
          />
          <img
            className={styles.maskGroupIcon1}
            alt=""
            src="/mask-group-1@2x.png"
          />
        </div>
      </div>
      <div className={styles.maskGroupGroup}>
        <img
          className={styles.maskGroupIcon2}
          alt=""
          src="/mask-group-2@2x.png"
        />
        <div className={styles.empoweringJourneyPair}>
          <div className={styles.empoweringYourHealthJourneyParent}>
            <h1 className={styles.empoweringYourHealth}>
              Empowering Your Health Journey
            </h1>
            <div className={styles.wereMoreThanContainer}>
              <p className={styles.wereMoreThan}>
                we're more than just a supplement provider; we're your partner
                in achieving optimal health and well-being. We're committed to
                empowering you on your unique health journey with personalized
                guidance and top-quality products.
              </p>
              <p className={styles.weUnderstandThat}>
                We understand that every individual's health needs are unique.
                That's why our team of experts is here to offer personalized
                recommendations tailored to your specific goals, preferences,
                and dietary requirements.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.weBelieveInThePowerOfKnoWrapper}>
        <h1 className={styles.weBelieveIn}>
          We believe in the power of knowledge. Our blog is a treasure trove of
          expert insights, practical tips, and the latest research on probiotics
          and holistic health. It's a valuable resource for those seeking to
          make informed decisions about their well-being.
        </h1>
      </div>
      <div className={styles.frameGroup}>
        <div className={styles.frameContainer}>
          <div className={styles.supportiveCommunityParent}>
            <h1 className={styles.supportiveCommunity}>Supportive Community</h1>
            <div className={styles.joinOurThrivingContainer}>
              <p className={styles.joinOurThriving}>
                Join our thriving community of health enthusiasts, where you can
                connect, share experiences, and learn from others on similar
                health journeys. Together, we're building a community focused on
                well-being, positivity, and empowerment.
              </p>
              <p className={styles.yourHealthJourney}>
                Your health journey is dynamic, and we're here for every step.
                Whether you're just starting out or have been on this path for
                years, our team is dedicated to providing ongoing support,
                answering questions, and helping you navigate your wellness
                goals.
              </p>
            </div>
          </div>
        </div>
        <img
          className={styles.maskGroupIcon3}
          alt=""
          src="/mask-group-3@2x.png"
        />
      </div>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <img
          className={styles.maskGroupIcon4}
          alt=""
          src="/mask-group-4@2x.png"
        />
        <div className={styles.frameDiv}>
          <div className={styles.frameWrapper1}>
            <div className={styles.routineBuilderParent}>
              <div className={styles.routineBuilder}>ROUTINE BUILDER</div>
              <h1 className={styles.ourStory}>Our Story</h1>
              <div className={styles.withATeam}>
                With a team of dedicated experts in the fields of nutrition,
                microbiology, and holistic health, we set out to create a brand
                that prioritizes quality, transparency, and efficacy. Our
                journey began with a simple belief: that everyone deserves
                access to the benefits of probiotics, sourced and crafted with
                the utmost care.
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
                  background: "#be3982",
                  border: "#fdfdfd solid 1px",
                  borderRadius: "8px",
                  "&:hover": { background: "#be3982" },
                  width: 224.4,
                  height: 64,
                }}
              >
                Get started
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.healthJourneyContainerInner}>
        <div className={styles.ourCommitmentToQualityParent}>
          <h1 className={styles.ourCommitmentTo}>Our Commitment to Quality</h1>
          <div className={styles.frameParent1}>
            <FrameComponent
              group1000005946="/group-1000005946-1@2x.png"
              premiumSourcingAndFormula="Premium Sourcing and Formulation"
              wePrioritizeTheQualityOfE="We prioritize the quality of every Mineralsnow product from the very beginning. Our minerals are sourced from reputable suppliers known for their commitment to purity and potency. "
            />
            <FrameComponent
              group1000005946="/group-1000005945@2x.png"
              premiumSourcingAndFormula="Ethical and Sustainable Practices"
              wePrioritizeTheQualityOfE="we understand the importance of ethical and sustainable sourcing. We work closely with suppliers who adhere to environmentally responsible practices.  "
              propWidth="109px"
              propHeight="109px"
              propWidth1="333px"
            />
            <div className={styles.frameParent2}>
              <img
                className={styles.frameItem}
                loading="lazy"
                alt=""
                src="/group-1000005944@2x.png"
              />
              <div className={styles.premiumSourcingAndFormulatiParent}>
                <h3 className={styles.premiumSourcingAndContainer}>
                  <p
                    className={styles.thirdPartyValidationFor}
                  >{`Third-Party Validation for Your `}</p>
                  <p className={styles.peaceOfMind}>Peace of Mind</p>
                </h3>
                <div
                  className={styles.wePrioritizeThe}
                >{`To provide our customers with the utmost confidence in our products, we subject them to rigorous third-party testing. `}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthJourneyContainer;
