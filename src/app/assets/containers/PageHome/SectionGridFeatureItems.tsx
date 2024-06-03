'use client'
import { FC } from "react";

import HeaderFilterSection from "@/app/assets/components/HeaderFilterSection";
import ProductCard from "@/app/assets/components/ProductCard";
import ButtonPrimary from "@/app/assets/shared/Button/ButtonPrimary";
import { Product } from "@/app/assets/data/data";

import { useDisplayProductsQuery } from "@/app/redux/features/product/productApi";

//
export interface SectionGridFeatureItemsProps {
  data: Product[] | null;
}

const SectionGridFeatureItems: FC<SectionGridFeatureItemsProps> = ({
  data = null,
}) => {
  const { data: productData, refetch } = useDisplayProductsQuery({
    page: 1,
    limit: 8,
  });
  const productsAdmin = productData?.data || [];
  data = productsAdmin;

  return (
    <div className="nc-SectionGridFeatureItems relative">
      <HeaderFilterSection />
      <div
        className={`grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 `}
      >
        {data && data.map((item, index) => (
          <ProductCard data={item} key={index} />
        ))}
      </div>
      <div className="flex mt-16 justify-center items-center">
        <ButtonPrimary loading={false}>Show me more</ButtonPrimary>
      </div>
    </div>
  );
};

export default SectionGridFeatureItems;
