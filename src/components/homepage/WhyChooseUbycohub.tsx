import {
  SecurePaymentIcon,
  UserIconOutline,
  BankCardOutlineIcon,
  CheckMarkIcon,
  ThumbUpOutlineIcon,
  FlowerOutlineIcon,
} from "@/assets/svgs";

export const WhyChooseUbycohub = () => {
  return (
    <section className="whyChooseUs">
      <article className="container">
        <div className="whyChooseUs__intro section-intro">
          <h2 className="heading-2">Why Traders Choose Ubycohub</h2>
          <p>
            We combine real human support, secure trading processes, and fast
            naira payouts to make every transaction simple and reliable.
          </p>
        </div>

        <ul className="whyChooseUs__list">
          <li className="whyChooseUs__listItem animateBlock">
            <div className="whyChooseUs__listItem__icon">
              <SecurePaymentIcon />
            </div>
            <div>
              <h4 className="heading-4">Fast Naira Payouts</h4>
              <p className="text-muted-v2">
                Once your transaction is confirmed and approved, we process your
                naira payout quickly and keep you updated throughout the trade.
              </p>
            </div>
          </li>
          <li className="whyChooseUs__listItem animateBlock">
            <div className="whyChooseUs__listItem__icon">
              <UserIconOutline />
            </div>
            <div>
              <h4 className="heading-4">Human-Led Trading Desk</h4>
              <p className="text-muted-v2">
                You trade directly with a real Ubycohub team member, not a
                confusing automated dashboard.
              </p>
            </div>
          </li>
          <li className="whyChooseUs__listItem animateBlock">
            <div className="whyChooseUs__listItem__icon">
              <BankCardOutlineIcon />
            </div>
            <div>
              <h4 className="heading-4">Crypto and Gift Card Support</h4>
              <p className="text-muted-v2">
                Sell top crypto assets and popular gift cards in one trusted
                place.
              </p>
            </div>
          </li>
          <li className="whyChooseUs__listItem animateBlock">
            <div className="whyChooseUs__listItem__icon">
              <CheckMarkIcon />
            </div>
            <div>
              <h4 className="heading-4">Secure Trading Process</h4>
              <p className="text-muted-v2">
                Every trade follows a clear confirmation process designed to
                protect customers and maintain transaction accountability.
              </p>
            </div>
          </li>
          <li className="whyChooseUs__listItem animateBlock">
            <div className="whyChooseUs__listItem__icon">
              <ThumbUpOutlineIcon />
            </div>
            <div>
              <h4 className="heading-4">WhatsApp and Telegram Support</h4>
              <p className="text-muted-v2">
                Start and complete your trade through the channels you already
                use every day.
              </p>
            </div>
          </li>
          <li className="whyChooseUs__listItem animateBlock">
            <div className="whyChooseUs__listItem__icon">
              <FlowerOutlineIcon />
            </div>
            <div>
              <h4 className="heading-4">Business-Friendly Desk</h4>
              <p className="text-muted-v2">
                We support individuals, vendors, merchants, and businesses that
                need smooth trading and reliable settlement.
              </p>
            </div>
          </li>
        </ul>
      </article>
    </section>
  );
};
