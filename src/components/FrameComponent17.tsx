import { FunctionComponent } from "react";
import {
  Button,
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
} from "@mui/material";
import styles from "./FrameComponent17.module.css";

const FrameComponent17: FunctionComponent = () => {
  return (
    <section className={styles.productDetails3Inner}>
      <div className={styles.frameParent}>
        <div className={styles.probioticsalwaysParent}>
          <h3 className={styles.probioticsalways}>probioticsalways</h3>
          <div className={styles.instanceParent}>
            <div className={styles.productsWrapper}>
              <div className={styles.products}>Home</div>
            </div>
            <div className={styles.productsContainer}>
              <div className={styles.products1}>PRODUCTS</div>
            </div>
            <div className={styles.productsFrame}>
              <div className={styles.products2}>About Us</div>
            </div>
            <div className={styles.frameDiv}>
              <div className={styles.products3}>Blog</div>
            </div>
            <div className={styles.productsWrapper1}>
              <div className={styles.products4}>Contact Us</div>
            </div>
          </div>
          <div className={styles.userParent}>
            <img className={styles.userIcon} alt="" src="/user.svg" />
            <img className={styles.userIcon1} alt="" src="/user-1.svg" />
          </div>
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.frameContainer}>
            <div className={styles.image72NoBgParent}>
              <div className={styles.image72NoBg} />
              <img
                className={styles.image72NoBg1}
                loading="lazy"
                alt=""
                src="/image-72-no-bg2@2x.png"
              />
            </div>
            <div className={styles.frameParent1}>
              <div className={styles.image72NoBgGroup}>
                <div className={styles.image72NoBg2} />
                <img
                  className={styles.image72NoBg3}
                  alt=""
                  src="/image-72-no-bg-12@2x.png"
                />
              </div>
              <div className={styles.image72NoBgContainer}>
                <div className={styles.image72NoBg4} />
                <img
                  className={styles.image72NoBg5}
                  alt=""
                  src="/image-72-no-bg-22@2x.png"
                />
              </div>
            </div>
          </div>
          <div className={styles.frameParent2}>
            <div className={styles.greenVitalityBlendParent}>
              <h1 className={styles.greenVitalityBlend}>
                Sunrise Wellness Drops
              </h1>
              <div className={styles.frameParent3}>
                <div className={styles.starParent}>
                  <img
                    className={styles.frameChild}
                    loading="lazy"
                    alt=""
                    src="/star-11.svg"
                  />
                  <div className={styles.div}>4.9</div>
                </div>
                <div className={styles.reviews}>151 reviews</div>
              </div>
              <div className={styles.revitalizeWithNutrientRich}>
                Start your day right. Support mental clarity and mood. Natural
                and fast-acting.
              </div>
            </div>
            <div className={styles.goodForParent}>
              <b className={styles.goodFor}>GOOD FOR:</b>
              <div className={styles.frameParent4}>
                <Button
                  className={styles.frameItem}
                  disableElevation={true}
                  variant="contained"
                  sx={{
                    textTransform: "none",
                    color: "#343434",
                    fontSize: "14",
                    background: "#efefef",
                    borderRadius: "24px",
                    "&:hover": { background: "#efefef" },
                    width: 134,
                    height: 37,
                  }}
                >
                  Mental Clarity
                </Button>
                <Button
                  className={styles.frameInner}
                  disableElevation={true}
                  variant="contained"
                  sx={{
                    textTransform: "none",
                    color: "#343434",
                    fontSize: "14",
                    background: "#efefef",
                    borderRadius: "24px",
                    "&:hover": { background: "#efefef" },
                    height: 37,
                  }}
                >
                  Fast Absorption
                </Button>
              </div>
            </div>
            <div className={styles.get30OffYourFirstSetSubWrapper}>
              <div className={styles.get30OffContainer}>
                <span className={styles.get}>{`Get `}</span>
                <b className={styles.off}>30% OFF</b>
                <span>
                  {` your first set subscription `}
                  <span className={styles.span}>$98</span> $68.60 with code
                  ‘FIRSTSET’
                </span>
              </div>
            </div>
            <div className={styles.frameParent5}>
              <div className={styles.frameWrapper}>
                <div className={styles.frameParent6}>
                  <div className={styles.frameParent7}>
                    <input
                      className={styles.groupInput}
                      type="radio"
                      name="radioGroup-1"
                    />
                    <div className={styles.oneTimePurchase}>
                      ONE-TIME PURCHASE
                    </div>
                  </div>
                  <div className={styles.div1}>$68.60</div>
                </div>
              </div>
              <div className={styles.rectangleParent}>
                <div className={styles.rectangleDiv} />
                <div className={styles.frameParent8}>
                  <div className={styles.frameParent9}>
                    <div className={styles.frameParent10}>
                      <input className={styles.frameChild1} type="radio" />
                      <div className={styles.subscribeAndSaveWrapper}>
                        <div className={styles.subscribeAndSave}>
                          SUBSCRIBE AND SAVE
                        </div>
                      </div>
                    </div>
                    <div className={styles.parent}>
                      <div className={styles.div2}>$68.60</div>
                      <div className={styles.div3}>$58.60</div>
                    </div>
                  </div>
                  <div className={styles.frameWrapper1}>
                    <FormControl
                      className={styles.group}
                      variant="standard"
                      sx={{
                        borderTopWidth: "1px",
                        borderRightWidth: "1px",
                        borderBottomWidth: "1px",
                        borderLeftWidth: "1px",
                        borderRadius: "0px 0px 0px 0px",
                        width: "92.018779342723%",
                        height: "16px",
                        m: 0,
                        p: 0,
                        "& .MuiInputBase-root": {
                          m: 0,
                          p: 0,
                          minHeight: "16px",
                          justifyContent: "center",
                          display: "inline-flex",
                        },
                        "& .MuiInputLabel-root": {
                          m: 0,
                          p: 0,
                          minHeight: "16px",
                          display: "inline-flex",
                        },
                        "& .MuiMenuItem-root": {
                          m: 0,
                          p: 0,
                          height: "16px",
                          display: "inline-flex",
                        },
                        "& .MuiSelect-select": {
                          m: 0,
                          p: 0,
                          height: "16px",
                          alignItems: "center",
                          display: "inline-flex",
                        },
                        "& .MuiInput-input": { m: 0, p: 0 },
                        "& .MuiInputBase-input": {
                          color: "#be3982",
                          fontSize: 12,
                          fontWeight: "Regular",
                          fontFamily: "Proxima Nova",
                          textAlign: "left",
                          p: "0 !important",
                        },
                      }}
                    >
                      <InputLabel color="primary" />
                      <Select
                        color="primary"
                        disableUnderline
                        displayEmpty
                        IconComponent={() => (
                          <img
                            width="16px"
                            height="16px"
                            src="/icroundexpandless.svg"
                            style={{}}
                          />
                        )}
                      >
                        <MenuItem>ONE-TIME PURCHASE</MenuItem>
                      </Select>
                      <FormHelperText />
                    </FormControl>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.quantityTypeParent}>
              <div className={styles.quantityType}>Quantity Type:</div>
              <div className={styles.rectangleGroup}>
                <div className={styles.frameChild2} />
                <div className={styles.rectangleContainer}>
                  <div className={styles.frameChild3} />
                  <div className={styles.container}>
                    <h2 className={styles.h2}>-</h2>
                    <div className={styles.div4}>1</div>
                    <h2 className={styles.h21}>+</h2>
                  </div>
                </div>
                <div className={styles.addToBagWrapper}>
                  <b className={styles.addToBag}>ADD TO BAG</b>
                </div>
              </div>
            </div>
            <div className={styles.instanceGroup}>
              <Button
                className={styles.frameButton}
                endIcon={
                  <img width="28.4px" height="16.4px" src="/group-1.svg" />
                }
                disableElevation={true}
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#fff",
                  fontSize: "16",
                  background: "#6e9e24",
                  border: "#fdfdfd solid 1px",
                  borderRadius: "8px",
                  "&:hover": { background: "#6e9e24" },
                }}
              >
                ADD TO CART
              </Button>
              <div className={styles.get15OffEveryOrderPlusWrapper}>
                <div className={styles.get15Off}>
                  Get 15% off every order, plus free shipping.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent17;
