import {
  WhatWeStandFor,
  WhyWeAreChatBased,
  OurMission,
  AboutUsHero,
  AboutUsBanner,
} from "@/components/about-us";

const AboutUs = () => {
  return (
    <div className="aboutUs__mainBlock">
      <AboutUsHero />
      {/*** Mission Section */}
      <OurMission />

      {/*** Why we chat based */}
      <WhyWeAreChatBased />
      {/**What we stand for */}
      <WhatWeStandFor />
      {/** Banner */}
      <AboutUsBanner />
    </div>
  );
};

export default AboutUs;
