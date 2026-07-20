import {
  SecurePaymentIcon,
  UserIconOutline,
  BankCardOutlineIcon,
  CheckMarkIcon,
  MessageOutlineIcon,
} from "@/assets/svgs";

export const WhyUseUbycohubForGiftCards = () => {
  return (
    <section className="wgyChooseUs__giftCardSection__modifier whyChooseUs">
      <article className="container">
        <div className="whyChooseUs__intro section-intro">
          <h2 className="heading-2">Why Use Ubycohub for Gift Cards?</h2>
        </div>

        <ul className="wgyChooseUs__giftCardSection__modifierList whyChooseUs__list">
          <li className="whyChooseUs__listItem">
            <div className="whyChooseUs__listItem__icon">
              <UserIconOutline color="#FF3155" />
            </div>
            <div>
              <h4 className="heading-4">Human Support</h4>
              <p className="text-muted-v2">
                Speak with a real team throughout the process.
              </p>
            </div>
          </li>
          <li className="whyChooseUs__listItem">
            <div className="whyChooseUs__listItem__icon">
              <CheckMarkIcon color="#F97316" />
            </div>
            <div>
              <h4 className="heading-4">Clear Rate Confirmation</h4>
              <p className="text-muted-v2">
                Understand the rate before completing the trade.
              </p>
            </div>
          </li>
          <li className="whyChooseUs__listItem">
            <div className="whyChooseUs__listItem__icon">
              <SecurePaymentIcon />
            </div>
            <div>
              <h4 className="heading-4">Fast Payout After Approval</h4>
              <p className="text-muted-v2">
                Receive naira once the card is verified and approved.
              </p>
            </div>
          </li>
          <li className="whyChooseUs__listItem">
            <div className="whyChooseUs__listItem__icon">
              <BankCardOutlineIcon color="#84CC16" />
            </div>
            <div>
              <h4 className="heading-4">Multiple Card Options</h4>
              <p className="text-muted-v2">
                Exchange popular gift cards in one trusted place.
              </p>
            </div>
          </li>
          <li className="whyChooseUs__listItem">
            <div className="whyChooseUs__listItem__icon">
              <MessageOutlineIcon />
            </div>
            <div>
              <h4 className="heading-4">Simple Chat Process</h4>
              <p className="text-muted-v2">
                <span>No complicated app or long signup process.</span>
              </p>
            </div>
          </li>
        </ul>
        <div className="wgyChooseUs__giftCardSection__safteNote__modifier safetyNote__contentBlock">
          <p className="safetyNote__text">
            <span className="textColor__red">Note:</span> Before you submit a
            gift card, always confirm the current rate and instructions with the
            official Ubycohub trading desk before submitting gift card details.
            Ubycohub will only process trades through official channels listed
            on this website
          </p>
        </div>
      </article>
    </section>
  );
};
