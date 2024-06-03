import Link from "next/link";
import React, { FC } from "react";
import { useRouter } from "next/navigation";

import { useDisplayProductsQuery } from "@/app/redux/features/product/productApi";

import twFocusClass from "@/app/assets/utils/twFocusClass";
import { CustomLink } from "@/app/assets/data/types";

export interface PaginationProps {
  className?: string;
  PaginationData?: CustomLink[];
  page: number; 
}

const Pagination: FC<PaginationProps> = ({ className = "", PaginationData, page }) => {
  const router = useRouter();
  const { data: productData, refetch } = useDisplayProductsQuery({
    page: 0,
    limit: 0,
  });

  let productPag = productData?.data.length/8;

  const DEMO_PAGINATION = () => {
    let arr = [];

    for ( let i = 0; i < Math.round(productPag); i++ ){
      if(arr.length < 3){
        arr.push({
          label: `${i + 1}`,
          href: `${i + 1}`,
        })
      }else{
        arr[3] = {
          label: `...`,
          href: `...`,
        }
      }
      if((Math.round(productPag) < productPag) && (i === Math.round(productPag) - 1) ){
        arr.push({
          label: `${Math.round(productPag) + 1}`,
          href: `${Math.round(productPag) + 1}`,
        })
      }
    }
    return arr
  }

  const renderItem = (pag: CustomLink, index?: number) => {
    if (index === (page - 1)) {
      // RETURN ACTIVE PAGINATION
      return (
        <span
          key={index}
          className={`inline-flex w-11 h-11 items-center justify-center rounded-full bg-primary-6000 text-white ${twFocusClass()}`}
        >
          {pag.label}
        </span>
      );
    }
    if(pag.label === "..."){
      // RETURN ACTIVE PAGINATION
      return (
        <span
          key={index}
          className={`inline-flex w-11 h-11 items-center justify-center rounded-full bg-white hover:bg-neutral-100 border border-neutral-200 text-neutral-6000 dark:text-neutral-400 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:border-neutral-700 ${twFocusClass()}`}
        >
          {pag.label}
        </span>
      );
    }
    // RETURN UNACTIVE PAGINATION
    return (
      <div
        key={index}
        className={`cursor-pointer inline-flex w-11 h-11 items-center justify-center rounded-full bg-white hover:bg-neutral-100 border border-neutral-200 text-neutral-6000 dark:text-neutral-400 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:border-neutral-700 ${twFocusClass()}`}
        onClick={() => router.replace(pag.href)}
      >
        {pag.label}
      </div>
    );
  };

  return (
    <nav
      className={`nc-Pagination inline-flex space-x-1 text-base font-medium ${className}`}
    >
      
      <div
        key={'back'}
        className={`cursor-pointer inline-flex w-11 h-11 items-center justify-center rounded-full hover:bg-neutral-100 border border-neutral-200 text-neutral-6000 dark:text-neutral-400 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:border-neutral-700 ${twFocusClass()}`}
        onClick={() => router.replace(`${page - 1}`)}
      >
        {'<'}
      </div>
      {DEMO_PAGINATION().map(renderItem)}
      
      <div
        key={'forward'}
        className={`cursor-pointer inline-flex w-11 h-11 items-center justify-center rounded-full hover:bg-neutral-100 border border-neutral-200 text-neutral-6000 dark:text-neutral-400 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:border-neutral-700 ${twFocusClass()}`}
        onClick={() => router.replace(`${page + 1}`)}
      >
        {'>'}
      </div>
    </nav>
  );
};

export default Pagination;
