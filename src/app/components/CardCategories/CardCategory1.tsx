'use client'
import { FC } from "react";
import Image from "next/image";

import { NavLink } from "../NavLink";
import { _getImgRd, _getTagNameRd } from "../../contains/fakedata";
import imgType from '../../../../public/images/collections/1.png'

export interface CardCategory1Props {
  className?: string;
  size?: "large" | "normal";
  featuredImage?: string | typeof imgType;
  name?: string;
  desc?: string;
}

const CardCategory1: FC<CardCategory1Props> = ({
  className = "",
  size = "normal",
  name = "",
  desc = "",
  featuredImage = "",
}) => {
  return (
    <NavLink
      href={"#"}
      className={`nc-CardCategory1 flex items-center ${className}`}
      data-nc-id="CardCategory1"
    >
      <div className={`flex-shrink-0 ${
          size === "large" ? "w-20 h-20" : "w-12 h-12"
        } rounded-lg mr-4 overflow-hidden`}>
          <Image
            src={featuredImage || _getImgRd()}
            alt=""
          />
      </div>
      <div>
        <h2
          className={`${
            size === "large" ? "text-lg" : "text-base"
          } nc-card-title text-neutral-900 dark:text-neutral-100 font-semibold`}
        >
          {name || _getTagNameRd()}
        </h2>
        <span
          className={`${
            size === "large" ? "text-sm" : "text-xs"
          } block mt-[2px] text-neutral-500 dark:text-neutral-400`}
        >
          {desc || `${Math.floor(Math.random() * 50) + 10} Articles`}
        </span>
      </div>
    </NavLink>
  );
};

export default CardCategory1;
