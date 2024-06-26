import React, { FC } from "react";
import { Helmet } from "react-helmet";

import rightImg from "@/images/hero/hero-right1.png";
import SectionFounder from "./SectionFounder";
import SectionStatistic from "./SectionStatistic";
import BgGlassmorphism from "@/app/assets/components/BgGlassmorphism/BgGlassmorphism";
import BackgroundSection from "@/app/assets/components/BackgroundSection/BackgroundSection";
import SectionHero from "./SectionHero";
// import SectionClientSay from "@/app/assets/components/SectionClientSay/SectionClientSay";
import SectionPromo3 from "@/app/assets/components/SectionPromo3";

export interface PageAboutProps {
  className?: string;
}

const PageAbout: FC<PageAboutProps> = ({ className = "" }) => {
  return (
    <div
      className={`nc-PageAbout overflow-hidden relative ${className}`}
      data-nc-id="PageAbout"
    >
      <Helmet>
        <title>About || Ciscryp React Template</title>
      </Helmet>

      {/* ======== BG GLASS ======== */}
      <BgGlassmorphism />

      <div className="container py-16 lg:py-28 space-y-16 lg:space-y-28">
        <SectionHero
          rightImg={rightImg}
          heading="👋 About Us."
          btnText=""
          subHeading="We’re impartial and independent, and every day we create distinctive, world-class programmes and content which inform, educate and entertain millions of people in the around the world."
        />

        <SectionFounder />
        <div className="relative py-16">
          <BackgroundSection />
          {/* <SectionClientSay /> */}
        </div>

        <SectionStatistic />

        <SectionPromo3 />
      </div>
    </div>
  );
};

export default PageAbout;
