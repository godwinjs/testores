import React, { FC } from "react";
import { useDebounce } from "use-debounce";

import { useDisplayProductsQuery } from "@/app/redux/features/product/productApi";
import SetPageTitle from "@/app/assets/hooks/SetPageTitle";

import Pagination from "@/app/assets/shared/Pagination/Pagination";
import ButtonPrimary from "@/app/assets/shared/Button/ButtonPrimary";
import SectionSliderCollections from "@/app/assets/components/SectionSliderLargeProduct";
import SectionPromo1 from "@/app/assets/components/SectionPromo1";
import HeaderFilterSearchPage from "@/app/assets/components/HeaderFilterSearchPage";
import Input from "@/app/assets/shared/Input/Input";
import ButtonCircle from "@/app/assets/shared/Button/ButtonCircle";
import ProductCard from "@/app/assets/components/ProductCard";
import { useRouter } from "next/navigation";

export interface PageSearchProps {
  className?: string;
  page: number;
}

const PageSearch: FC<PageSearchProps> = ({ className = "", page }) => {
  SetPageTitle({title: "Search || TruthStore Ecommerce Template"});
  const [ searchText, setSearchText ] = React.useState('');
  const [query] = useDebounce(searchText, 500);
  const router = useRouter()

  const { data: productData, refetch } = useDisplayProductsQuery({
    page: 0,
    limit: 0,
    query: query
  });
  
  const productsAdmin = productData?.data || [];
  console.log(productsAdmin)

  React.useEffect(() => {
    // if(!query){
    //   router.replace('/search')
    // }else{
    //   router.replace(`/search?=${query}`)
    // }
  }, [ query , router])

  return (
    <div className={`nc-PageSearch  ${className}`} data-nc-id="PageSearch">

      <div
        className={`nc-HeadBackgroundCommon h-24 2xl:h-28 top-0 left-0 right-0 w-full bg-primary-50 dark:bg-neutral-800/20 `}
        data-nc-id="HeadBackgroundCommon"
      />
      <div className="container">
        <header className="max-w-2xl mx-auto -mt-10 flex flex-col lg:-mt-7">
          <form className="relative w-full " method="post">
            <label
              htmlFor="search-input"
              className="text-neutral-500 dark:text-neutral-300"
            >
              <span className="sr-only">Search all icons</span>
              <Input
                className="shadow-lg border-0 dark:border"
                id="search-input"
                displayName="search Inp"
                type="search"
                placeholder="Type your keywords"
                sizeClass="pl-14 py-5 pr-5 md:pl-16"
                rounded="rounded-full"
                onChange={(e) => setSearchText(e.target.value)}
              />
              <ButtonCircle
                className="absolute right-2.5 top-1/2 transform -translate-y-1/2"
                size=" w-11 h-11"
                type="submit"
                title="search away"
              >
                <i className="las la-arrow-right text-xl"></i>
              </ButtonCircle>
              <span className="absolute left-5 top-1/2 transform -translate-y-1/2 text-2xl md:left-6">
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M22 22L20 20"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </label>
          </form>
        </header>
      </div>

      <div className="container py-16 lg:pb-28 lg:pt-20 space-y-16 lg:space-y-28">
        <main>
          {/* FILTER */}
          <HeaderFilterSearchPage />

          {/* LOOP ITEMS */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-10 mt-8 lg:mt-10">
            {productsAdmin.map((item : any, index : number) => (
              <ProductCard data={item} key={index} />
            ))}
          </div>

          {/* PAGINATION */}
          <div className="flex flex-col mt-12 lg:mt-16 space-y-5 sm:space-y-0 sm:space-x-3 sm:flex-row sm:justify-between sm:items-center">
            <Pagination page={page} />
            <ButtonPrimary loading={true}>Show me more</ButtonPrimary>
          </div>
        </main>

        {/* === SECTION 5 === */}
        <hr className="border-slate-200 dark:border-slate-700" />
        <SectionSliderCollections />
        <hr className="border-slate-200 dark:border-slate-700" />

        {/* SUBCRIBES */}
        <SectionPromo1 />
      </div>
    </div>
  );
};

export default PageSearch;
