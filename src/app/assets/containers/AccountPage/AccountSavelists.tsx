
import { useSelector } from "react-redux";
import { FC } from "react";

import { RootState } from "@/app/redux/store";
import ProductCard from "@/app/assets/components/ProductCard";
import ButtonSecondary from "@/app/assets/shared/Button/ButtonSecondary";
import CommonLayout from "./CommonLayout";
import type { AccountPageProps } from "./AccountPage";

const AccountSavelists: FC<AccountPageProps> = ({ className = "", user }) => {

  const wishlist: any = useSelector((state: RootState) => state.account.wishlist) 

  const renderSection1 = () => {
    
    return (
      <div className="space-y-10 sm:space-y-12">
        <div>
          <h2 className="text-2xl sm:text-3xl font-semibold">
            Saved products
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3 ">
          
        {wishlist.map((list: any, index: number) => (
            <ProductCard key={index} data={list} />
          ))}
        </div>
        <div className="flex !mt-20 justify-center items-center">
          {wishlist.length > 5 ? <ButtonSecondary loading={false}>Show me more</ButtonSecondary> : null }
        </div>
      </div>
    );
  };

  return (
    <div>
      <CommonLayout user={user}>{wishlist === null ? "Opps! no product liked yet. Like some products and check back" : renderSection1()}</CommonLayout>
    </div>
  );
};

export default AccountSavelists;
