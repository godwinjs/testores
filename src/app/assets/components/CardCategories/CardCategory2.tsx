'use client';

import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

import imgType from '@/images/products/1.png';

export interface CardCategory2Props {
  className?: string;
  ratioClass?: string;
  bgClass?: string;
  featuredImage?: string | typeof imgType;
  name: string;
  desc: string;
}

const CardCategory2: FC<CardCategory2Props> = ({
  className = "",
  ratioClass = "aspect-w-1 aspect-h-1",
  bgClass = "bg-orange-50",
  featuredImage = ".",
  name,
  desc,
}) => {
  return (
    <Link
      href={"/page-collection"}
      className={`nc-CardCategory2 ${className}`}
      data-nc-id="CardCategory2"
    >
      <div
        className={`flex-1 relative w-full h-0 rounded-2xl overflow-hidden group ${ratioClass} ${bgClass}`}
      >
        <div className="w-full h-full flex justify-center">
          <Image
            src={featuredImage}
            className="object-cover rounded-2xl"
            alt="featured img"
          />
        </div>
        <span className="opacity-0 group-hover:opacity-100 absolute inset-0 bg-black bg-opacity-10 transition-opacity"></span>
      </div>
      <div className="mt-5 flex-1 text-center">
        <h2 className="text-base sm:text-lg text-neutral-900 dark:text-neutral-100 font-semibold">
          {name}
        </h2>
        <span className="block mt-0.5 sm:mt-1.5 text-sm text-neutral-500 dark:text-neutral-400">
          {desc}
        </span>
      </div>
    </Link>
  );
};

export default CardCategory2;
