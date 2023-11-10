import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

import explore1Svg from "../../../../public/images/collections/explore/explore1.svg";
import imgType from '../../../../public/images/collections/1.png'

export interface CardCategory6Props {
  className?: string;
  featuredImage?: string | typeof imgType;
  bgSVG?: string;
  name: string;
  desc: string;
  color?: string;
}

const CardCategory6: FC<CardCategory6Props> = ({
  className = "",
  featuredImage = ".",
  bgSVG = explore1Svg,
  name,
  desc,
  color = "bg-rose-50",
}) => {
  return (
    <div
      className={`nc-CardCategory6 relative w-full aspect-w-1 aspect-h-1 h-0 rounded-3xl overflow-hidden bg-white dark:bg-neutral-900 group hover:nc-shadow-lg transition-shadow ${className}`}
      data-nc-id="CardCategory6"
    >
      <div>
        <div className="absolute bottom-0 right-0 top-0 opacity-10">
          <Image src={bgSVG} alt="background svg" />
        </div>

        <div className="absolute inset-5 flex flex-col justify-between items-center">
          <div className={`flex justify-center items-center w-20 h-20 rounded-full overflow-hidden z-0 ${color}`}>
            <Image
              src={featuredImage}
              alt="features img"
            />
          </div>

          <div className="text-center">
            <span
              className={`block mb-1 text-sm text-slate-500 dark:text-slate-400`}
            >
              {desc}
            </span>
            <h2 className={`text-lg sm:text-xl font-semibold`}>{name}</h2>
          </div>

          <Link
            href={"/page-collection"}
            className="flex items-center text-sm font-medium group-hover:text-primary-500 transition-colors"
          >
            <span>See Collection</span>
            <ArrowRightIcon className="w-4 h-4 ml-2.5" />
          </Link>
        </div>
      </div>

      <Link href={"/page-collection"}></Link>
    </div>
  );
};

export default CardCategory6;
