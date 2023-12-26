import React, { FC } from "react";
import Link from "next/link";
import Image from "next/image";

// import NcImage from "shared/NcImage/NcImage";
import Badge from "@/app/assets/shared/Badge/Badge";
import { _getImgRd, _getTagNameRd, _getTitleRd } from "@/app/assets/contains/fakedata";
import PostCardMeta from "@/app/assets/components/PostCardMeta/PostCardMeta";

export interface Card3Props {
  className?: string;
}

const Card3: FC<Card3Props> = ({ className = "h-full" }) => {
  return (
    <div
      className={`nc-Card3 relative flex flex-col-reverse sm:flex-row sm:items-center rounded-[40px] group ${className}`}
      data-nc-id="Card3"
    >
      <div className="flex flex-col flex-grow">
        <div className="space-y-5 mb-4">
          <Badge name={_getTagNameRd()} />
          <div>
            <h2
              className={`nc-card-title block font-semibold text-neutral-900 dark:text-neutral-100 text-xl`}
            >
              <Link
                href={"/blog-signle"}
                className="line-clamp-2 capitalize"
                title={"title"}
              >
                {_getTitleRd()}
              </Link>
            </h2>
            <div className="hidden sm:block sm:mt-2">
              <span className="text-neutral-500 dark:text-neutral-400 text-base line-clamp-1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur, culpa?
              </span>
            </div>
          </div>
          <PostCardMeta />
        </div>
      </div>

      <div
        className={`block flex-shrink-0 sm:w-56 sm:ml-6 rounded-3xl overflow-hidden mb-5 sm:mb-0`}
      >
        <Link
          href={"/blog-single"}
          className={`block w-full h-0 aspect-h-9 sm:aspect-h-16 aspect-w-16 `}
        >
          <div className="absolute inset-0"><Image alt="" height={0} width={0} src={_getImgRd()} /></div>
        </Link>
      </div>
    </div>
  );
};

export default Card3;
