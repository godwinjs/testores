'use client';
import { StarIcon } from "@heroicons/react/24/solid";
import React, { FC } from "react";
import Link from "next/link";
import Image from "next/image";

import Prices from "./Prices";
import { productImgs } from "@/app/assets/contains/fakedata"; 
import imgType from '@/images/products/1.png'

export interface CollectionCard2Props {
  className?: string;
  imgs?: string[] | typeof imgType[];
  name?: string;
  price?: number;
  description?: string;
}

const CollectionCard2: FC<CollectionCard2Props> = ({
  className,
  imgs = [productImgs[9], productImgs[10], productImgs[11], productImgs[8]],
  name = "Product Name",
  description = "Product Description",
  price,
}) => {
  return (
    <div className={`CollectionCard2 group relative ${className}`}>
      <div className="relative flex flex-col">
        <div className="aspect-w-8 aspect-h-5 bg-neutral-100 rounded-2xl overflow-hidden">
          <Image
            className="object-contain w-full h-full rounded-2xl"
            src={imgs[0]}
            alt={'card img'}
          />
        </div>
        <div className="grid grid-cols-3 gap-2.5 mt-2.5">
          <div className="w-full h-24 sm:h-28">
            <Image
              className="object-cover w-full h-full rounded-2xl"
              src={imgs[1]}
              alt={'card img 1'}
            />
          </div>
          <div className="w-full h-24 sm:h-28">
            <Image
              className="object-cover w-full h-full rounded-2xl"
              src={imgs[2]}
              alt={'card img 2'}
            />
          </div>
          <div className="w-full h-24 sm:h-28">
            <Image
              className="object-cover w-full h-full rounded-2xl"
              src={imgs[3]}
              alt={'card img 3'}
            />
          </div>
        </div>
      </div>

      <div className="relative mt-5 flex justify-between">
        {/* TITLE */}
        <div className="flex-1">
          <h2 className="font-semibold text-lg sm:text-xl ">{name}</h2>
          {/* AUTHOR */}
          <div className="mt-3 flex items-center text-slate-500 dark:text-slate-400">
            <span className="text-sm ">
              <span className="line-clamp-1">{description}</span>
            </span>
            <span className="h-5 mx-1 sm:mx-2 border-l border-slate-200 dark:border-slate-700"></span>
            <StarIcon className="w-4 h-4 text-orange-400" />
            <span className="text-sm ml-1 ">
              <span className="line-clamp-1">4.9 (269 reviews)</span>
            </span>
          </div>
        </div>
        <Prices className="mt-0.5 sm:mt-1 ml-4" price={price} />
      </div>
      <Link href={"/product-detail-2"} className="absolute inset-0 "></Link>
    </div>
  );
};

export default CollectionCard2;
