"use client";

// import React from "react";
import SectionHowItWork from "@/app/assets/components/SectionHowItWork/SectionHowItWork";
import BackgroundSection from "@/app/assets/components/BackgroundSection/BackgroundSection";
import SectionPromo1 from "@/app/assets/components/SectionPromo1";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";

import { RootState } from "@/app/redux/store";

import SectionHero2 from "@/app/assets/components/SectionHero/SectionHero2";
import SectionSliderLargeProduct from "@/app/assets/components/SectionSliderLargeProduct";
import SectionSliderProductCard from "@/app/assets/components/SectionSliderProductCard";
import DiscoverMoreSlider from "@/app/assets/components/DiscoverMoreSlider";
import SectionGridMoreExplore from "@/app/assets/components/SectionGridMoreExplore/SectionGridMoreExplore";
import SectionPromo2 from "@/app/assets/components/SectionPromo2";
import SectionSliderCategories from "@/app/assets/components/SectionSliderCategories/SectionSliderCategories";
import SectionGridFeatureItems from "./SectionGridFeatureItems";
import SectionPromo3 from "@/app/assets/components/SectionPromo3";
// import SectionClientSay from "@/app/assets/components/SectionClientSay/SectionClientSay";
import SectionMagazine5 from "@/app/assets/containers/BlogPage/SectionMagazine5";
import Heading from "@/app/assets/components/Heading/Heading";
import ButtonSecondary from "@/app/assets/shared/Button/ButtonSecondary";
import { PRODUCTS, SPORT_PRODUCTS } from "@/app/assets/data/data";

function PageHome() {
  const products: any = useSelector((state: RootState) => state.products.products)

  return (
    <div className="nc-PageHome relative overflow-hidden">
      <Helmet>
        <title>TruthStore || best product empire</title>
      </Helmet>

      {/* SECTION HERO */}
      <SectionHero2 />

      <div className="mt-24 lg:mt-32">
        <DiscoverMoreSlider />
      </div>

      <div className="container relative space-y-24 mt-24 lg:space-y-32 lg:mt-32">
        {/* SECTION */}
        <SectionSliderProductCard
          data={products ? products.map((i:any) => i) : [SPORT_PRODUCTS[5], SPORT_PRODUCTS[1]]}
        />

        <div className="py-24 lg:py-32 border-t border-b border-slate-200 dark:border-slate-700">
          <SectionHowItWork />
        </div>

        {/* SECTION */}
        <SectionPromo1 />

        {/* SECTION */}
        <div className="relative py-24 lg:py-32">
          <BackgroundSection />
          <SectionGridMoreExplore />
        </div>

        <SectionSliderProductCard
          heading="Best Sellers"
          subHeading="Best sellers of the month"
        />

        {/*  */}
        <SectionPromo2 />

        {/* SECTION 3 */}
        <SectionSliderLargeProduct cardStyle="style2" />

        {/*  */}
        <SectionSliderCategories />

        {/* SECTION */}
        <SectionPromo3 />

        {/* SECTION */}
        <SectionGridFeatureItems />

        <div className="relative mb-0 py-24 lg:py-32">
          <BackgroundSection />
          <div>
            <Heading rightDescText="From the TruthStore blog">
              The latest news
            </Heading>
            <SectionMagazine5 />
            <div className="flex mt-16 justify-center">
              <ButtonSecondary>Show all blog articles</ButtonSecondary>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageHome;
