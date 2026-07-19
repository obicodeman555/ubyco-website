import {
  HeartIcon,
  SecurityLockIcon,
  SpeedoMeterIcon,
  ThumbUpOutlineIcon,
  UserIconOutline,
} from "@/assets/svgs";

export const WhatWeStandFor = () => {
  return (
    <div className="aboutUs__wwsfr">
      <div className="container">
        <div className="aboutUs__wwsfr__content">
          <h2 className="heading-2">What We Stand For</h2>
          <div className="aboutUs__wwsfr__grid">
            <div className="aboutUs__wwsfr__gridItem">
              <div>
                <span>
                  <HeartIcon />
                </span>
                <span>Trust</span>
                <span>
                  We focus on clear communication and reliable trade handling.
                </span>
              </div>
            </div>

            <div className="aboutUs__wwsfr__gridItem">
              <div>
                <span>
                  <SpeedoMeterIcon />
                </span>
                <span>Speed</span>
                <span>
                  We work to make the trading process smooth and payout fast
                  after confirmation.
                </span>
              </div>
            </div>
            <div className="aboutUs__wwsfr__gridItem">
              <div>
                <span>
                  <SecurityLockIcon />
                </span>
                <span>Security</span>
                <span>
                  We follow a careful process to help protect customers and
                  transactions.
                </span>
              </div>
            </div>
            <div className="aboutUs__wwsfr__gridItem">
              <div>
                <span>
                  <ThumbUpOutlineIcon color="#FF3155" />
                </span>
                <span>Simplicity</span>
                <span>
                  We remove unnecessary complications so customers can trade
                  with ease
                </span>
              </div>
            </div>
            <div className="aboutUs__wwsfr__gridItem">
              <div>
                <span>
                  <UserIconOutline color="#FF3155" />
                </span>
                <span>Human Support</span>
                <span>
                  We provide real support through WhatsApp and Telegram
                  channels.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
