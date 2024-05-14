import { FunctionComponent } from "react";
import GroupComponent2 from "../components/GroupComponent2";
import GroupComponent1 from "../components/GroupComponent1";
import styles from "./BlogPost.module.css";

const BlogPost: FunctionComponent = () => {
  return (
    <div className={styles.blogPost}>
      <div className={styles.probioticsalwaysParent}>
        <h3 className={styles.probioticsalways}>probioticsalways</h3>
        <div className={styles.productsGrid}>
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
          <img
            className={styles.userIcon}
            loading="lazy"
            alt=""
            src="/user.svg"
          />
          <img
            className={styles.userIcon1}
            loading="lazy"
            alt=""
            src="/user-1.svg"
          />
        </div>
      </div>
      <div className={styles.blogPostInner}>
        <img className={styles.frameChild} alt="" src="/group-1000005946.svg" />
      </div>
      <main className={styles.instanceParent}>
        <GroupComponent2 />
        <section className={styles.articleContentWrapper}>
          <div className={styles.articleContent}>
            <div className={styles.articleContentInner}>
              <div className={styles.theScienceOfSkincareDecodWrapper}>
                <h1 className={styles.theScienceOf}>
                  The Science of Skincare: Decoding Ingredients for Radiant Skin
                </h1>
              </div>
            </div>
            <div className={styles.articleContentChild}>
              <div className={styles.lastUpdated0ct182022Parent}>
                <b className={styles.lastUpdated0ct}>
                  Last updated 0ct 18, 2022
                </b>
                <div className={styles.introductionInTheEverEvolvWrapper}>
                  <div className={styles.introductionInTheContainer}>
                    <p className={styles.introduction}>
                      <span className={styles.introduction1}>
                        <b>Introduction</b>
                      </span>
                    </p>
                    <p className={styles.blankLine}>
                      <span className={styles.blankLine1}>
                        <span className={styles.blankLine2}>&nbsp;</span>
                      </span>
                    </p>
                    <p className={styles.inTheEverEvolving}>
                      In the ever-evolving world of skincare, understanding the
                      science behind the ingredients is the key to unlocking the
                      secret to radiant and healthy skin. From antioxidants and
                      peptides to retinoids and hyaluronic acid, each ingredient
                      plays a unique role in nourishing and revitalizing the
                      skin. This blog explores the fascinating realm of skincare
                      science, delving into the powerhouse ingredients that make
                      a difference. Get ready to decode the language of skincare
                      labels and empower yourself with the knowledge needed to
                      curate a skincare routine that truly transforms your
                      complexion.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.articleContentInner1}>
              <img
                className={styles.frameItem}
                loading="lazy"
                alt=""
                src="/rectangle-4550@2x.png"
              />
            </div>
            <div className={styles.articleContentInner2}>
              <div className={styles.theScienceOfSkincareDecodParent}>
                <h3 className={styles.theScienceOf1}>
                  "The Science of Skincare: Decoding Ingredients for Radiant
                  Skin"
                </h3>
                <div className={styles.thisTitleEncapsulatesContainer}>
                  <p className={styles.thisTitleEncapsulates}>
                    This title encapsulates the essence of the blog, emphasizing
                    the scientific foundation behind effective skincare.
                    "Decoding Ingredients for Radiant Skin" implies unraveling
                    the mystery of skincare components, empowering readers to
                    make informed choices. The blog promises to demystify the
                    science, providing insights into the ingredients that
                    contribute to a glowing and healthy complexion.
                  </p>
                  <p className={styles.blankLine3}>&nbsp;</p>
                  <p className={styles.thisTitleEncapsulates1}>
                    This title encapsulates the essence of the blog, emphasizing
                    the scientific foundation behind effective skincare.
                    "Decoding Ingredients for Radiant Skin" implies unraveling
                    the mystery of skincare components, empowering readers to
                    make informed choices. The blog promises to demystify the
                    science, providing insights into the ingredients that
                    contribute to a glowing and healthy complexion.
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.articleContentInner3}>
              <div className={styles.benefitsOfSkincareScienceParent}>
                <h3 className={styles.benefitsOfSkincare}>
                  Benefits of Skincare Science
                </h3>
                <div className={styles.antioxidantDefenseAntioxidaContainer}>
                  <ul className={styles.antioxidantDefenseAntioxida}>
                    <li className={styles.antioxidantDefenseAntioxida1}>
                      Antioxidant Defense: Antioxidants like Vitamin C protect
                      against free radicals, reducing signs of aging and
                      promoting a youthful, radiant complexion.
                    </li>
                  </ul>
                  <p className={styles.blankLine4}>&nbsp;</p>
                  <ul className={styles.collagenBoostPeptidesStimu}>
                    <li className={styles.collagenBoostPeptides}>
                      Collagen Boost: Peptides stimulate collagen production,
                      enhancing skin elasticity, reducing fine lines, and
                      contributing to a firmer, more youthful appearance.
                    </li>
                  </ul>
                  <p className={styles.blankLine5}>&nbsp;</p>
                  <ul className={styles.cellularRenewalWithRetinoid}>
                    <li className={styles.cellularRenewalWith}>
                      Cellular Renewal with Retinoids: Retinoids promote
                      cellular turnover, diminishing wrinkles and promoting a
                      smoother skin texture for a youthful and rejuvenated look.
                    </li>
                  </ul>
                  <p className={styles.blankLine6}>&nbsp;</p>
                  <ul className={styles.hydrationInfusionWithHyalur}>
                    <li className={styles.hydrationInfusionWith}>
                      Hydration Infusion with Hyaluronic Acid: Hyaluronic acid
                      provides deep hydration, plumping the skin and minimizing
                      the appearance of fine lines and wrinkles for a dewy
                      complexion.
                    </li>
                  </ul>
                  <p className={styles.blankLine7}>&nbsp;</p>
                  <ul className={styles.skinBarrierSupportNiacinam}>
                    <li className={styles.skinBarrierSupport}>
                      Skin Barrier Support: Niacinamide strengthens the skin
                      barrier, reducing redness and inflammation, and promoting
                      an even skin tone for a healthier complexion.
                    </li>
                  </ul>
                  <p className={styles.blankLine8}>&nbsp;</p>
                  <ul className={styles.sunProtectionWithSpfSpfP}>
                    <li>
                      Sun Protection with SPF: SPF protects against UV damage,
                      preventing premature aging and reducing the risk of skin
                      cancer for long-term skin health and radiance.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className={styles.articleContentInner4}>
              <div className={styles.howItWorksTheIntricaciesParent}>
                <h3 className={styles.howItWorks}>
                  How it Works: The Intricacies of Skincare Science
                </h3>
                <div className={styles.skincareScienceOperates}>
                  Skincare science operates by leveraging potent ingredients
                  that address specific skin concerns. Antioxidants neutralize
                  free radicals, combating oxidative stress and preserving
                  youthful skin. Peptides stimulate collagen synthesis,
                  diminishing wrinkles and enhancing skin elasticity. Retinoids
                  facilitate cellular turnover, promoting a smoother complexion.
                  Hyaluronic acid hydrates at a deep level, reducing fine lines
                  and imparting a dewy glow. Niacinamide fortifies the skin
                  barrier, promoting an even tone and reducing inflammation. SPF
                  shields against harmful UV rays, preventing premature aging
                  and supporting long-term skin health. The synergy of these
                  elements creates a comprehensive approach, nurturing the skin
                  from within for lasting radiance and vitality.
                </div>
              </div>
            </div>
            <div className={styles.articleContentInner5}>
              <div className={styles.conclusionParent}>
                <h3 className={styles.conclusion}>Conclusion</h3>
                <div className={styles.understandingTheIntricacies}>
                  Understanding the intricacies of skincare science empowers you
                  to make informed choices for your skin. By incorporating
                  science-backed ingredients, you embark on a transformative
                  journey towards radiant and healthy skin. Elevate your
                  skincare routine with knowledge, embracing the science that
                  nurtures your skin's unique needs.
                </div>
              </div>
            </div>
            <div className={styles.articleContentInner6}>
              <div className={styles.disclaimerParent}>
                <h3 className={styles.disclaimer}>Disclaimer</h3>
                <div className={styles.whileSkincareScience}>
                  While skincare science provides valuable insights, individual
                  skin types and conditions vary. Consultation with a
                  dermatologist is advisable to tailor a regimen that suits your
                  specific needs and addresses any potential allergies or
                  sensitivities. This blog offers general information and should
                  not replace personalized skincare advice from a qualified
                  professional.
                </div>
              </div>
            </div>
            <div className={styles.sharingContentWrapper}>
              <div className={styles.sharingContent}>
                <div className={styles.likeWhatYouSeeShareWithWrapper}>
                  <h3 className={styles.likeWhatYou}>
                    Like what you see? Share with a friend.
                  </h3>
                </div>
                <div className={styles.socialIcons}>
                  <img
                    className={styles.facebookIcon}
                    loading="lazy"
                    alt=""
                    src="/facebook.svg"
                  />
                  <img
                    className={styles.twitterIcon}
                    loading="lazy"
                    alt=""
                    src="/twitter.svg"
                  />
                  <img
                    className={styles.behanchIcon}
                    loading="lazy"
                    alt=""
                    src="/behanch.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <GroupComponent1 />
      </main>
    </div>
  );
};

export default BlogPost;
