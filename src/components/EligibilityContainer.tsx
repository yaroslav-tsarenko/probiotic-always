import { FunctionComponent } from "react";
import FrameComponent2 from "./FrameComponent2";
import styles from "./EligibilityContainer.module.css";

const EligibilityContainer: FunctionComponent = () => {
  return (
    <section className={styles.eligibilityContainer}>
      <div className={styles.componentParent}>
        <FrameComponent2
          eligibilityForReturns="Eligibility for Returns"
          toBeEligibleForAReturnThe="To be eligible for a return, the purchased product must be unused and in the same condition as when received. It should be in its original packaging, including all tags, seals, and labels intact. Returns are generally accepted within 30 days of the purchase date. Proof of purchase is required for all return requests."
          theProductMustBeUnusedAnd="The product must be unused and in its original condition for a return."
          returnRequestsShouldBeMad="Return requests should be made within 30 days of the purchase date and require proof of purchase."
        />
        <FrameComponent2
          eligibilityForReturns="Return Process"
          propDisplay="unset"
        />
        <FrameComponent2
          eligibilityForReturns="Refund and Replacement"
          theProductMustBeUnusedAnd={" "}
          propDisplay="unset"
          propMargin="0"
          propFontFamily="inherit"
          propFontSize="inherit"
          propPaddingLeft="21px"
          propMarginBottom="unset"
          propMargin3="0"
        />
        <FrameComponent2
          eligibilityForReturns="Exclusions from Returns"
          toBeEligibleForAReturnThe="Some items, such as opened or used supplements, perishable goods, and customized products, are not eligible for returns. Additionally, gift cards and downloadable software are non-returnable. We also cannot accept returns on products with broken seals, opened packaging, or products that do not meet hygiene or safety standards."
          theProductMustBeUnusedAnd="Opened or used supplements, perishable goods, and customized products are not returnable."
          returnRequestsShouldBeMad="Products with broken seals, opened packaging, or those not meeting hygiene and safety standards are excluded from returns."
          propDisplay="unset"
          propFontFamily="unset"
          propFontSize="unset"
          propPaddingLeft="unset"
          propMarginBottom="0px"
          propMargin3="unset"
        />
        <FrameComponent2
          eligibilityForReturns="Return Shipping Costs"
          propDisplay="unset"
        />
        <FrameComponent2
          eligibilityForReturns="Return Conditions for Health and Safety"
          toBeEligibleForAReturnThe="For health and safety reasons, returns of items such as opened dietary supplements, hygiene products, or items with compromised seals cannot be accepted. If you receive a product that is damaged or faulty, please contact us within 7 days of receipt, and we will provide instructions for returning the item or arranging for a replacement. Your satisfaction and product safety are of utmost importance to us."
          theProductMustBeUnusedAnd="Due to health and safety concerns, opened dietary supplements, hygiene products, or items with compromised seals cannot be returned."
          returnRequestsShouldBeMad="Your satisfaction and product safety are our top priorities."
          propDisplay="inline-block"
          propFontFamily="unset"
          propFontSize="unset"
          propPaddingLeft="unset"
          propMarginBottom="0px"
          propMargin3="unset"
        />
        <FrameComponent2
          eligibilityForReturns="Non-Returnable Items"
          toBeEligibleForAReturnThe={`Certain items fall under the category of non-returnable products, including clearance items, items marked as "final sale," and promotional or discounted items. These products are exempt from our standard return policy. Be sure to carefully review product details and eligibility when making a purchase. Non-returnable items will be clearly marked on the product page.`}
          theProductMustBeUnusedAnd={`Clearance items, "final sale" items, and promotional or discounted products are non-returnable.`}
          returnRequestsShouldBeMad="It is important to make an informed decision when purchasing non-returnable products."
          propDisplay="unset"
          propFontFamily="unset"
          propFontSize="unset"
          propPaddingLeft="unset"
          propMarginBottom="0px"
          propMargin3="unset"
        />
        <FrameComponent2
          eligibilityForReturns="International Returns"
          toBeEligibleForAReturnThe="International returns involve specific considerations. Customers returning items from outside our shipping region may be responsible for additional shipping costs, customs duties, and taxes. Please contact our customer support team before initiating an international return to discuss the return process and any potential fees involved."
          theProductMustBeUnusedAnd="International returns may incur additional shipping costs, customs duties, and taxes."
          returnRequestsShouldBeMad="Understanding the return process and potential fees is essential when returning items from outside our shipping region."
          propDisplay="unset"
          propFontFamily="unset"
          propFontSize="unset"
          propPaddingLeft="unset"
          propMarginBottom="0px"
          propMargin3="unset"
        />
      </div>
    </section>
  );
};

export default EligibilityContainer;
