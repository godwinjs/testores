import ProductCard from "@/app/assets/components/ProductCard";
import { PRODUCTS } from "@/app/assets/data/data";
import ButtonSecondary from "@/app/assets/shared/Button/ButtonSecondary";
import CommonLayout from "./CommonLayout";

const AccountSavelists = () => {
  const renderSection1 = () => {
    return (
      <div className="space-y-10 sm:space-y-12">
        <div>
          <h2 className="text-2xl sm:text-3xl font-semibold">
            List of saved products
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3 ">
          {PRODUCTS.map((stay, index) => (
            <ProductCard key={index} data={stay} />
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
      <CommonLayout>{renderSection1()}</CommonLayout>
    </div>
  );
};

export default AccountSavelists;
