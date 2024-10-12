import React, { FC } from "react";

import SetPageTitle from "../../hooks/SetPageTitle";
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
  SetPageTitle({title: "About || Truthstores"})

  return (
    <div
      className={`nc-PageAbout overflow-hidden relative ${className}`}
      data-nc-id="PageAbout"
    >

      {/* ======== BG GLASS ======== */}
      <BgGlassmorphism />

      <div className="container py-16 lg:py-28 space-y-16 lg:space-y-28">
        <SectionHero
          rightImg={rightImg}
          heading="👋 About Us."
          btnText=""
          subHeading={`Your ultimate gaming Shop🛒 & Stop😎: PS, Xbox, Nintendo, \nVR, accessories & more. \n\nWe’re impartial and independent, and every day we \nprovide distinctive, world-class products and content \nwhich inform, educate and entertain millions of people \naround the world.`}
        />

        {/* <SectionFounder /> */}
        {/* <div className="relative py-16"> */}
          {/* <BackgroundSection /> */}
          {/* <SectionClientSay /> */}
        {/* </div> */}

        <SectionStatistic className="relative py-16" />

        <SectionPromo3 className="relative py-24" />
      </div>
    </div>
  );
};

export default PageAbout;
