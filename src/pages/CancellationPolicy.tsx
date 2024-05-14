import { FunctionComponent } from "react";
import FrameComponent4 from "../components/FrameComponent4";
import GroupComponent8 from "../components/GroupComponent8";
import styles from "./CancellationPolicy.module.css";

const CancellationPolicy: FunctionComponent = () => {
  return (
    <div className={styles.cancellationPolicy}>
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
      <div className={styles.cancellationPolicyInner}>
        <img className={styles.frameChild} alt="" src="/group-1000005946.svg" />
      </div>
      <main className={styles.frameParent}>
        <section className={styles.instanceParent}>
          <header className={styles.rectangleParent}>
            <div className={styles.instanceChild} />
            <div className={styles.frameGroup}>
              <div className={styles.frameWrapper}>
                <div className={styles.frameContainer}>
                  <div className={styles.groupParent}>
                    <img className={styles.groupIcon} alt="" src="/group.svg" />
                    <img
                      className={styles.groupIcon1}
                      loading="lazy"
                      alt=""
                      src="/group-1.svg"
                    />
                    <div className={styles.group}>
                      <img
                        className={styles.groupIcon2}
                        loading="lazy"
                        alt=""
                        src="/group-2.svg"
                      />
                      <img
                        className={styles.groupIcon3}
                        alt=""
                        src="/group-3.svg"
                      />
                    </div>
                    <img
                      className={styles.groupIcon4}
                      alt=""
                      src="/group-4.svg"
                    />
                  </div>
                  <div className={styles.probioticsalwaysWrapper}>
                    <div className={styles.probioticsalways1}>
                      Probioticsalways
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.secondProductsGrid}>
                <div className={styles.productsWrapper2}>
                  <div className={styles.products5}>Home</div>
                </div>
                <div className={styles.productsWrapper3}>
                  <div className={styles.products6}>PRODUCTS</div>
                </div>
                <div className={styles.productsWrapper4}>
                  <div className={styles.products7}>About Us</div>
                </div>
                <div className={styles.productsWrapper5}>
                  <div className={styles.products8}>Blog</div>
                </div>
                <div className={styles.productsWrapper6}>
                  <div className={styles.products9}>Contact Us</div>
                </div>
              </div>
              <div className={styles.frameWrapper1}>
                <div className={styles.frameParent1}>
                  <div className={styles.userWrapper}>
                    <img
                      className={styles.userIcon2}
                      loading="lazy"
                      alt=""
                      src="/user.svg"
                    />
                  </div>
                  <img
                    className={styles.userIcon3}
                    loading="lazy"
                    alt=""
                    src="/user-3.svg"
                  />
                </div>
              </div>
            </div>
          </header>
          <div className={styles.rectangleGroup}>
            <div className={styles.frameItem} />
            <h1 className={styles.cancellationPolicy1}>Cancellation policy</h1>
          </div>
        </section>
        <section className={styles.frameSection}>
          <div className={styles.componentParent}>
            <FrameComponent4
              cancellationWindow="Cancellation Window"
              youHaveTheOpportunityToCa="You have the opportunity to cancel your order within a specific time frame, usually up to 24 hours from the moment of order placement. This window allows for adjustments or changes to your order. Once this period expires, the order will be processed, and regular return procedures will apply. To initiate a cancellation, please reach out to our customer support team with your order details."
              youCanCancelYourOrderWith="You can cancel your order within 24 hours of placing it."
              afterTheCancellationWindo="After the cancellation window closes, the order proceeds as planned, subject to standard return policies."
              contactOurCustomerSupport="Contact our customer support with your order details for cancellation requests."
            />
            <FrameComponent4
              cancellationWindow="Cancellation Request Process"
              youHaveTheOpportunityToCa="To cancel an order, please contact our customer support team through the provided channels, which may include email or phone. You will need to provide your order details, such as the order number, product name, and purchase date. Our team will guide you through the cancellation process and provide confirmation once the request is successfully processed."
              youCanCancelYourOrderWith="Reach out to our customer support team to initiate an order cancellation."
              afterTheCancellationWindo="Include essential order details like the order number, product name, and purchase date."
              contactOurCustomerSupport="Once the request is approved, you will receive confirmation of the cancellation."
              propDisplay="unset"
            />
            <FrameComponent4
              cancellationWindow="Refund for Canceled Orders"
              youHaveTheOpportunityToCa="When a cancellation request is approved within the specified window, a refund will be issued for the full purchase amount, including any applicable taxes or fees. The refund will be processed using the original payment method. It may take several business days for the refund to appear in your account, depending on your financial institution's processing times."
              youCanCancelYourOrderWith="Approved cancellation requests within the allowed timeframe result in a full refund."
              afterTheCancellationWindo="The refund includes the total purchase amount, including taxes and fees."
              contactOurCustomerSupport="Refunds will be made via the original payment method and may take a few business days to reflect in your account."
              propDisplay="unset"
            />
            <FrameComponent4
              cancellationWindow="Non-Cancelable Items"
              youHaveTheOpportunityToCa="Certain items are non-cancelable due to factors like their perishable nature, customization, or immediate processing. Examples include personalized products or goods with time-sensitive shipping requirements. Such items will be clearly marked as non-cancelable during the purchase process. It's essential to carefully review product details and eligibility before finalizing your order."
              youCanCancelYourOrderWith="Some products, like personalized or time-sensitive items, are non-cancelable."
              afterTheCancellationWindo="Non-cancelable items will be prominently marked during the purchase."
              contactOurCustomerSupport="Make well-informed choices by reviewing product details and eligibility when ordering."
              propDisplay="unset"
            />
            <FrameComponent4
              cancellationWindow="Cancellation Beyond the Window"
              youHaveTheOpportunityToCa="If a cancellation request is made after the allowed window, the order will typically proceed as planned, and standard return policies will apply. In this case, you may return the product as per our standard return policy once it is delivered to you. We recommend contacting our customer support team for guidance on the return process if the order has already been shipped."
              youCanCancelYourOrderWith="After the allowed cancellation window closes, the order progresses, subject to standard return policies."
              afterTheCancellationWindo="If your order has already been shipped, reach out to our customer support for return instructions."
              contactOurCustomerSupport="Timely communication is essential if you need to address the order after the cancellation window."
              propDisplay="inline-block"
            />
            <FrameComponent4
              cancellationWindow="Order Modification Option"
              youHaveTheOpportunityToCa="Instead of canceling, we may offer an order modification option to adjust specific details of your order. This option is subject to the nature of the requested changes and the stage of processing. If modifications are possible, our customer support team will guide you through the process. This can be a convenient alternative, particularly for minor changes to your order."
              youCanCancelYourOrderWith="Instead of canceling, inquire about order modification options for specific changes."
              afterTheCancellationWindo="Modification feasibility depends on the nature and processing stage of the request."
              contactOurCustomerSupport="Our customer support will assist you in making changes when possible."
              propDisplay="unset"
            />
            <FrameComponent4
              cancellationWindow="Cancellation for Subscription Orders"
              youHaveTheOpportunityToCa="Subscription orders may have specific cancellation procedures. If you wish to cancel a subscription, please refer to the terms and conditions outlined in our subscription policy. Subscription cancellations are generally accepted, but they may involve adherence to a predefined notice period or other requirements to ensure smooth processing."
              youCanCancelYourOrderWith="Cancellation for subscription orders follows specific procedures, as outlined in our subscription policy."
              afterTheCancellationWindo="Subscription cancellations are typically accommodated, but they may involve a notice period or other requirements."
              contactOurCustomerSupport="Review the subscription policy for details on how to cancel subscription orders."
              propDisplay="inline-block"
            />
          </div>
        </section>
        <GroupComponent8 />
      </main>
    </div>
  );
};

export default CancellationPolicy;
