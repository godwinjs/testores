"use client"

import React, { FC } from "react";

import SetPageTitle from "@/app/assets/hooks/SetPageTitle";
import BgGlassmorphism from "@/app/assets/components/BgGlassmorphism/BgGlassmorphism";
// import SectionClientSay from "@/app/assets/components/SectionClientSay/SectionClientSay";
import SectionPromo3 from "@/app/assets/components/SectionPromo3";

export interface PageSubscriptionProps {
  className?: string;
}

const PageSubscription: FC<PageSubscriptionProps> = ({ className = "" }) => {
  SetPageTitle({title: "Subscription || Truthstores"})

  return (
    <div
      className={`nc-PageAbout overflow-hidden relative ${className}`}
      data-nc-id="PageAbout"
    >

      {/* ======== BG GLASS ======== */}
      <BgGlassmorphism />

      <div className="container py-16 lg:py-28 space-y-16 lg:space-y-28">

        <SectionPromo3 className="relative py-24" />
      </div>
    </div>
  );
};

export default PageSubscription;
