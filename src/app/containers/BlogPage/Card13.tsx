import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";

import { _getImgRd, _getTitleRd } from "../../contains/fakedata";
import PostCardMeta from "../../components/PostCardMeta/PostCardMeta";

export interface Card13Props {
  className?: string;
}

const Card13: FC<Card13Props> = ({ className = "" }) => {
  const imageLoader = ({ src, width, quality }: {src:  string, width?: number, quality?: number }) => {
    return `${src}?w=${width}&q=${quality || 75}`
  }
  const srcUrl = _getImgRd();

  return (
    <div className={`nc-Card13 relative flex ${className}`} data-nc-id="Card13">
      <div className="flex flex-col h-full py-2">
        <h2 className={`nc-card-title block font-semibold text-base`}>
          <Link
            href={"/blog-single"}
            className="line-clamp-2 capitalize"
            title={"title"}
          >
            {_getTitleRd()}
          </Link>
        </h2>
        <span className="hidden sm:block my-3 text-slate-500 dark:text-slate-400 ">
          <span className="line-clamp-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            dolorem voluptatibus numquam ut pariatur officiis?
          </span>
        </span>
        <span className="mt-4 block sm:hidden text-sm text-slate-500 ">
          May 20, 2021 · 2 min read
        </span>
        <div className="mt-auto hidden sm:block">
          <PostCardMeta />
        </div>
      </div>

      <Link
        href={"/blog-single"}
        className={`block relative h-full flex-shrink-0 w-2/5 sm:w-1/3 ml-3 sm:ml-5`}
      >
        <div className="absolute inset-0">
          <Image
            loader={imageLoader}
            src={srcUrl}
            className="object-cover w-full h-full rounded-xl sm:rounded-3xl"
            alt='unsplash img'
            width={100}
            height={100}
          />
        </div>
      </Link>
    </div>
  );
};

export default Card13;
