"use client"

import { FC } from 'react';
import Image from "next/image";
import { useSelector } from "react-redux";

import { RootState } from "@/app/redux/store";

import Prices from "@/app/assets/components/Prices";
import ButtonSecondary from "@/app/assets/shared/Button/ButtonSecondary";
import CommonLayout from "./CommonLayout";
import type { AccountPageProps } from "./AccountPage";

const AccountOrder: FC<AccountPageProps> = ({ className = "", user }) => {
  const orders: any = useSelector((state: RootState) => state.account.orders);

  const renderProductItem = (product: any, index: number) => {
    
    const { image, quantity, price, title, status  } = product;
    return (
      <div key={index} className="flex py-4 sm:py-7 last:pb-0 first:pt-0">
        <div className="h-24 w-16 sm:w-20 flex-shrink-0 overflow-hidden rounded-xl bg-slate-100">
          <Image
            src={image}
            alt={title}
            width={0}
            height={0}
            className="h-full w-full object-cover object-center"
          />
        </div>

        <div className="ml-4 flex flex-1 flex-col">
          <div>
            <div className="flex justify-between ">
              <div>
                <h3 className="text-base font-medium line-clamp-1">{title}</h3>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                  <span>{status}</span>
                  <span className="mx-2 border-l border-slate-200 dark:border-slate-700 h-4"></span>
                  <span>{"X"}</span>
                </p>
              </div>
              <Prices price={price} className="mt-0.5 ml-2" />
            </div>
          </div>
          <div className="flex flex-1 items-end justify-between text-sm">
            <p className="text-gray-500 dark:text-slate-400 flex items-center">
              <span className="hidden sm:inline-block">Qty</span>
              <span className="inline-block sm:hidden">x</span>
              <span className="ml-2">{quantity}</span>
            </p>

            <div className="flex">
              <button
                type="button"
                className="font-medium text-indigo-600 dark:text-primary-500 "
              >
                Leave review
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderOrder = (data: any): any => {

    return data.map((order: any, index: number) => {
      
      return (<div key={index} className="border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden z-0">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-4 sm:p-8 bg-slate-50 dark:bg-slate-500/5">
                  <div>
                    <p className="text-lg font-semibold">#{order.orderID}</p>
                    <p className="text-slate-500 dark:text-slate-400 text-sm mt-1.5 sm:mt-2">
                      <span>{order.orderDate || 'Aug 8, 2023'}</span>
                      <span className="mx-2">·</span>
                      <span className={order.status === "Pending" ? "text-primary-500" : (order.status === "Recieved" ? "text-success-500" : "text-yellow-500")}>{order.status}</span>
                    </p>
                  </div>
                  <div className="mt-3 sm:mt-0">
                    <ButtonSecondary
                      sizeClass="py-2.5 px-4 sm:px-6"
                      fontSize="text-sm font-medium"
                    >
                      View Order
                    </ButtonSecondary>
                  </div>
                </div>
                <div className="border-t border-slate-200 dark:border-slate-700 p-2 sm:p-8 divide-y divide-y-slate-200 dark:divide-slate-700">
                  {order.products.map(renderProductItem)}
                </div>
              </div>)
    }).reverse();
  };

  return (
    <div>
      <CommonLayout user={user}>
        <div className="space-y-10 sm:space-y-12">
          {/* HEADING */}
          <h2 className="text-2xl sm:text-3xl font-semibold">Order History</h2>
          {orders ? renderOrder(orders) : <h4>{"No orders yet"}</h4>}
        </div>
      </CommonLayout>
    </div>
  );
};

export default AccountOrder;
