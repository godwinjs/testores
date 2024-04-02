"use client";
import { useSelector } from "react-redux";

import { RootState } from "@/app/redux/store";

import ProductCard from "@/app/assets/components/ProductCard";
import ButtonSecondary from "@/app/assets/shared/Button/ButtonSecondary";

const AccountSavelists = () => {
    const wishlist: any = useSelector((state: RootState) => state.account.wishlist) 

  const renderSection1 = () => {
    return (
      <div className="space-y-10 sm:space-y-12 my-8">
        <div>
          <h2 className="text-center text-2xl sm:text-3xl font-semibold mt-4">
            List of saved products
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3 ">
          {wishlist.map((list: any, index: number) => (
            <ProductCard key={index} data={list} />
          ))}
        </div>
        <div className="flex !mt-20 justify-center items-center">
          <ButtonSecondary loading>Show me more</ButtonSecondary>
        </div>
      </div>
    );
  };

  return (
    <div>
      {renderSection1()}
    </div>
  );
};

export default AccountSavelists;
