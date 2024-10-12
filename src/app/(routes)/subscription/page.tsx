"use client"

import React from "react";

import SetPageTitle from "@/app/assets/hooks/SetPageTitle";
import BgGlassmorphism from "@/app/assets/components/BgGlassmorphism/BgGlassmorphism";
import SectionPromo3 from "@/app/assets/components/SectionPromo3";

export default function PageSubscription() {
  SetPageTitle({title: "Subscription || Truthstores"})

  return (
    <div
      className={`nc-PageAbout overflow-hidden relative`}
      data-nc-id="PageAbout"
    >

      {/* ======== BG GLASS ======== */}
      <BgGlassmorphism />

      <div className="container py-16 lg:py-28 space-y-16 lg:space-y-28">

        <SectionPromo3 className="relative py-24" />
      </div>
    </div>
  );
}
