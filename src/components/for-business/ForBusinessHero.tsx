import Image from "next/image";

export const ForBusinessHero = () => {
  return (
    <div className="hero__mainContainer">
      <div className="heroBackgorund-img">
        <Image
          src={"/svgs/ubycohub-hero-bg-img.svg"}
          alt=""
          width={1440}
          height={960}
        />
      </div>
      <div className="heroContent">
        <div className="heroContent__container">
          <div className="heroContent__left">
            <div className="heroContent__left__container">
              <div className="heroContent__writeUp">
                <h1 className="heroContent__writeUp__heading">
                  Crypto and Gift Card Trading Support for Businesses
                </h1>
                <p className="heroContent__writeUp__supportText">
                  Ubycohub provides dedicated human support for businesses,
                  vendors, merchants, and high-volume traders who need reliable
                  crypto liquidation, gift card exchange, and fast naira
                  settlement.
                </p>
              </div>
              <div className="heroContent__left__ctas">
                <button type="button" className="btn-primary">
                  Trade as a Business
                </button>
                <button type="button" className="btn-black">
                  Contact Business Desk
                </button>
              </div>
            </div>
          </div>
          <div className="heroContent__right">
            <div className="heroContent__image">
              <picture>
                {/* Desktop */}
                <source
                  media="(min-width: 1024px)"
                  srcSet="/svgs/smiling-lady-img.svg"
                  width={457}
                  height={508}
                />

                <Image
                  src={"/svgs/smiling-lady-img-mobile.svg"}
                  alt=""
                  width={390}
                  height={524}
                />
              </picture>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
