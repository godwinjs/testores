"use client";

import { useEffect, useState } from "react";
import SectionHowItWork from "@/app/assets/components/SectionHowItWork/SectionHowItWork";
import BackgroundSection from "@/app/assets/components/BackgroundSection/BackgroundSection";
import SectionPromo1 from "@/app/assets/components/SectionPromo1";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";

import { RootState } from "@/app/redux/store";
import { useDisplayProductsQuery } from "@/app/redux/features/product/productApi";

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

function PageHome() {
  const [pageData, setPageData] : any = useState(null);
  const products: any = useSelector((state: RootState) => state.products.products)
  const { data: productData, refetch } = useDisplayProductsQuery({
    page: 0,
    limit: 0,
  });
  const productsAdmin = productData?.data || [];
  // console.log(products)

  // const isUnmounting = useRef(null);
  useEffect(() => {
    // refetch()
      const getPageData = async () => {
    
        const res = await fetch('/pages/home.json')
        const data  = await res.json();
        setPageData(data)
      }
      getPageData();
  }, [])
  
  console.log(pageData)

  return (
    pageData && <div className="nc-PageHome relative overflow-hidden">
      <Helmet>
        <title>{pageData.main.title}</title>
      </Helmet>

      {/* SECTION HERO */}
      <SectionHero2 data={pageData.main.header} />

      <div className="mt-24 lg:mt-32">
        <DiscoverMoreSlider />
      </div>

      <div className="container relative space-y-24 mt-24 lg:space-y-32 lg:mt-32">
        {/* SECTION */}
        <SectionSliderProductCard 
          data={productData ? [ ...productsAdmin.slice(0, 5)] : undefined }
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
          data={productData ? [ ...productsAdmin.slice(0, 5)] : undefined }
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
        <SectionGridFeatureItems data={null} />

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
