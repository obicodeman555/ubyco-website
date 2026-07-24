import Image from "next/image";

export const FAQsHero = () => {
  return (
    <div className="hero__mainContainer__faq hero__mainContainer">
      <div className="heroBackgorund-img">
        <Image
          src={"/svgs/ubycohub-hero-bg-img.svg"}
          alt=""
          width={1440}
          height={960}
        />
      </div>
      <div className="heroContent__faq heroContent">
        <div className="heroContent__container__faq">
          <div className="heroContent__writeUp__faq heroContent__writeUp">
            <h1 className="heroContent__writeUp__heading">
              Frequently Asked Questions
            </h1>
            <p className="heroContent__writeUp__supportText">
              Find answers to common questions about trading crypto and gift
              cards with Ubycohub.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
