import { FunctionComponent } from "react";
import { Button } from "@mui/material";
import styles from "./FrameComponent2.module.css";

interface FrameComponent2Props {
    eligibilityForReturns?: string;
    toBeEligibleForAReturnThe?: string;
    theProductMustBeUnusedAnd?: string;
    returnRequestsShouldBeMad?: string;
    propDisplay?: string;
    propMargin?: string;
    propFontFamily?: string;
    propFontSize?: string;
    propPaddingLeft?: string;
    propMarginBottom?: string;
    propMargin3?: string;
    blogListing?: string;
}

const FrameComponent2: FunctionComponent<FrameComponent2Props> = (props) => {
    return (
        <section className={styles.rectangleParent}>
            <img
                className={styles.frameChild}
                loading="lazy"
                alt=""
                src="/rectangle-4611@2x.png"
            />
            <div className={styles.empowerYourJourneyParent}>
                <h1 className={styles.empowerYourJourney}>Empower Your Journey</h1>
                <div className={styles.diveIntoA}>
                    Dive into a wealth of wellness knowledge curated just for you. Our
                    blog section is a treasure trove of expert advice, lifestyle tips, and
                    the latest trends in holistic health. Stay informed with articles on
                    nutrition, mindfulness, and fitness. Empower yourself with insights
                    that align with your wellness goals, and let our community support you
                    on your path to a healthier, more vibrant life. Explore, learn, and
                    embark on a journey of self-discovery with our insightful articles.
                </div>
                <Button
                    className={styles.button}
                    disableElevation={true}
                    variant="contained"
                    sx={{
                        color: "#fff",
                        fontSize: "16",
                        background: "#6e9e24",
                        borderRadius: "0px 0px 0px 0px",
                        "&:hover": { background: "#6e9e24" },
                        width: 186,
                        height: 56,
                    }}
                >
                    Get started
                </Button>
            </div>
        </section>
    );
};

export default FrameComponent2;