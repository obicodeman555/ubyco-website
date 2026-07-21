"use client";

import {
  WhatWeStandFor,
  WhyWeAreChatBased,
  OurMission,
  AboutUsHero,
  AboutUsBanner,
} from "@/components/about-us";
import {
  trackLead,
  trackTelegramClick,
  trackViewContent,
  trackWhatsappClick,
} from "@/utils/analytics";

import { useEffect } from "react";

const AboutUs = () => {
  const handleWhatsAppClick = () => {
    trackWhatsappClick("About Us");
    trackLead();
  };
  const handleTelegramClick = () => {
    trackTelegramClick("About Us");
    trackLead();
  };

  useEffect(() => {
    trackViewContent("About Us");
  }, []);

  return (
    <div className="aboutUs__mainBlock">
      <AboutUsHero
        handleWhatsAppClick={handleWhatsAppClick}
        handleTelegramClick={handleTelegramClick}
      />
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
