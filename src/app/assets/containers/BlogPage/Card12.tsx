'use client'
import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";

import SocialsShare from "@/app/assets/shared/SocialsShare/SocialsShare";
import { imgHigtQualitys, _getTitleRd } from "@/app/assets/contains/fakedata";
import PostCardMeta from "@/app/assets/components/PostCardMeta/PostCardMeta";

export interface Card12Props {
  className?: string;
}

const Card12: FC<Card12Props> = ({ className = "h-full" }) => {
  const title = _getTitleRd();
  
  return (
    <div
      className={`nc-Card12 group relative flex flex-col ${className}`}
      data-nc-id="Card12"
    >
      <Link
        href={"/blog-single"}
        className="block flex-shrink-0 flex-grow relative w-full h-0 aspect-w-4 aspect-h-3 rounded-3xl overflow-hidden"
      >
        <div className="absolute inset-0">
          <Image
            src={imgHigtQualitys[0]}
            alt={"title"}
            height={480}
            width={480}
          />
        </div>
      </Link>

      <SocialsShare className="absolute hidden md:grid gap-[5px] right-4 top-4 opacity-0 z-[-1] group-hover:z-10 group-hover:opacity-100 transition-all duration-300" />

      <div className=" mt-8 pr-10 flex flex-col">
        <h2
          className={`nc-card-title block font-semibold text-neutral-900 dark:text-neutral-100 transition-colors text-lg sm:text-2xl`}
        >
          <Link
            href={"/blog-single"}
            className="line-clamp-2 capitalize"
            title={"title"}
          >
            {title}
          </Link>
        </h2>
        <span className="hidden sm:block mt-4 text-neutral-500 dark:text-neutral-400">
          <span className="line-clamp-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            vero perspiciatis ullam ea? Nihil accusamus similique debitis
            tempore mollitia? Aperiam.
          </span>
        </span>
        <PostCardMeta className="mt-5" />
      </div>
    </div>
  );
};

export default Card12;
