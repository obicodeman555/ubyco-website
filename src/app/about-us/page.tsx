"use client";

import {
  WhatWeStandFor,
  WhyWeAreChatBased,
  OurMission,
  AboutUsHero,
  AboutUsBanner,
} from "@/components/about-us";
import { trackViewContent } from "@/utils/analytics";

import { useEffect } from "react";

const AboutUs = () => {
  useEffect(() => {
    trackViewContent("About Us");
  }, []);

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
