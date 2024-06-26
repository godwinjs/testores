'use client'
import { StarIcon } from "@heroicons/react/24/solid";
import { FC } from "react";
import Link from "next/link";
import Image from "next/image";

import Prices from "./Prices";
import { productImgs } from "@/app/assets/contains/fakedata";
import imgType from '@/images/products/1.png'

interface image {
  url: string,
  public_id: string,
  _id: string
}

export interface CollectionCard2Props {
  className?: string;
  imgs?: image[];
  name?: string;
  price?: number;
  description?: string;
  img?: image
}

const CollectionCard2: FC<CollectionCard2Props> = ({
  className,
  imgs = [{url: ''}],
  name = "Product Name",
  img = {url: ''},
  description = "Product Description",
  price,
}) => {
  return (
    <div className={`CollectionCard2 group relative ${className}`}>
      <div className="relative flex flex-col">
        <div className="aspect-w-8 aspect-h-5 bg-neutral-100 rounded-2xl overflow-hidden">
          <Image
            className="object-contain w-full h-full rounded-2xl"
            src={img.url}
            alt={'large prd img'}
            width={100}
            height={100}
          />
        </div>
        <div className="grid grid-cols-3 gap-2.5 mt-2.5">
          {imgs.map((item, i) => {
            return <div className="w-full h-24 sm:h-28" key={i}>
              <Image
                className="object-cover w-full h-full rounded-2xl"
                src={item.url}
                alt={'large prd img 1'}
                width={100}
                height={100}
              />
            </div>
          })}
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
