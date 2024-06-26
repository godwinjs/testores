"use client";

import { useEffect, useState, useMemo, useCallback } from "react";
import SectionHowItWork from "@/app/assets/components/SectionHowItWork/SectionHowItWork";
import BackgroundSection from "@/app/assets/components/BackgroundSection/BackgroundSection";
import SectionPromo1 from "@/app/assets/components/SectionPromo1";
import { useSelector, useDispatch } from "react-redux";

import { RootState } from "@/app/redux/store";
import { useDisplayProductsQuery } from "@/app/redux/features/product/productApi";
import { setProducts } from "@/app/redux/features/product/productSlice";

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
import SetPageTitle from "../../hooks/SetPageTitle";

function PageHome() {
  const dispatch = useDispatch();
  const [pageData, setPageData] : any = useState(null);
  const products: any = useSelector((state: RootState) => state.products.products)
  const { data: productData, refetch, isLoading: displayingProducts } = useDisplayProductsQuery({
    page: 0,
    limit: 0,
  });
  const productsAdmin = productData?.data || [];
  SetPageTitle({title: pageData?.main.title})

  const getPageData = useCallback(async () => {
    const res = await fetch('/pages/home.json')
    const data  = await res.json();
    setPageData(data)
  }, [setPageData])

  useMemo(() => {
    getPageData();
    
    // if(productData?.acknowledgement) dispatch(setProducts(productsAdmin))
  }, [getPageData]);

  return (
    pageData && <div className="nc-PageHome relative overflow-hidden">

      {/* SECTION HERO */}
      <SectionHero2 data={pageData.main.header} />

      <div className="mt-24 lg:mt-32"> 
        <DiscoverMoreSlider />
      </div>

      <div className="container relative space-y-24 mt-24 lg:space-y-32 lg:mt-32">
        {/* SECTION */}
        {displayingProducts ? "Loading..." : <SectionSliderProductCard 
          data={productsAdmin.length > 0 ? [ ...productsAdmin.slice(0, 5)] : [ ...products.slice(0, 5)]}
        />}

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
          data={productsAdmin ? [ ...productsAdmin.filter((prd: any) => prd.bestSeller && prd )] : undefined }
        />

        {/*  */}
        <SectionPromo2 />

        {/* SECTION 3 */}
        <SectionSliderLargeProduct data={productsAdmin.length > 0 &&  [ ...productsAdmin.filter((prd: any) => prd.expertChoice && prd )] } cardStyle="style2" />

        {/*  */}
        <SectionSliderCategories />

        {/* SECTION */}
        <SectionPromo3 />

        {/* SECTION */}
        <div className="py-8"><SectionGridFeatureItems data={null} /></div>

        {/* <div className="relative mb-0 py-24 lg:py-32">
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
        </div> */}
      </div>
    </div>
  );
}
// &#8358;
export default PageHome;
