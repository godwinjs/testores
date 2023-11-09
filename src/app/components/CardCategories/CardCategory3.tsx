'use client';
// Next Ready

import { FC } from "react";
import Image from 'next/image'
import Link from "next/link";

import ButtonSecondary from "../../shared/Button/ButtonSecondary";
import { CATS_DISCOVER } from "../DiscoverMoreSlider";

export interface CardCategory3Props {
  className?: string;
  featuredImage?: any;
  name?: string;
  desc?: string;
  color?: string;
  alt: string
}

const CardCategory3: FC<CardCategory3Props> = ({
  className = "",
  featuredImage = CATS_DISCOVER[2].featuredImage,
  name = CATS_DISCOVER[2].name,
  desc = CATS_DISCOVER[2].desc,
  color = CATS_DISCOVER[2].color,
  alt = CATS_DISCOVER[2].alt
}) => {
  return (
    <Link
      href={"/page-collection"}
      className={`nc-CardCategory3 block ${className}`}
      data-nc-id="CardCategory3"
    >
      <div
        className={`relative w-full aspect-w-16 aspect-h-11 sm:aspect-h-9 h-0 rounded-2xl overflow-hidden group ${color}`}
      >
        <div className="absolute inset-5 sm:inset-8">
          <Image
            src={featuredImage}
            className="absolute right-0 w-1/2 max-w-[260px] h-full object-scale-down drop-shadow-xl"
            alt={alt}
          />
        </div>
        <span className="opacity-0 group-hover:opacity-40 absolute inset-0 bg-black/10 transition-opacity"></span>

        <div>
          <div className="absolute inset-5 sm:inset-8 flex flex-col">
            <div className="max-w-xs">
              <span className={`block mb-2 text-sm text-slate-700`}>
                {name}
              </span>
              {desc && (
                <h2
                  className={`text-xl md:text-2xl text-slate-900 font-semibold`}
                  dangerouslySetInnerHTML={{ __html: desc }}
                ></h2>
              )}
            </div>
            <div className="mt-auto">
              <ButtonSecondary
                sizeClass="py-3 px-4 sm:py-3.5 sm:px-6"
                fontSize="text-sm font-medium"
                className="nc-shadow-lg"
              >
                Show me all
              </ButtonSecondary>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CardCategory3;
