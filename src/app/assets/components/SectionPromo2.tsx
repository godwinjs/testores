"use client"
import React, { FC } from "react";
import Image from "next/image";

import rightImgDemo from "@/images/rightLarge/promo2.png";
import ButtonPrimary from "@/app/assets/shared/Button/ButtonPrimary";
import Logo from "@/app/assets/shared/Logo/Logo";
import backgroundLineSvg from "@/images/hero/Moon.svg";

export interface SectionPromo2Props {
  className?: string;
}

const SectionPromo2: FC<SectionPromo2Props> = ({ className = "lg:pt-10" }) => (
  <div className={`nc-SectionPromo2 ${className}`}>
    <div className="relative flex flex-col lg:flex-row lg:justify-end bg-yellow-50 dark:bg-slate-800 rounded-2xl sm:rounded-[40px] p-4 pb-0 sm:p-5 sm:pb-0 lg:p-24">
      <div className="absolute inset-0">
        <Image
          className="absolute w-full h-full object-contain dark:opacity-5"
          src={backgroundLineSvg}
          alt="backgroundLineSvg" />
      </div>

      <div className="lg:w-[45%] max-w-lg relative">
        <Logo className="w-28" />
        <h2 className="font-semibold text-3xl sm:text-4xl xl:text-5xl 2xl:text-6xl mt-6 sm:mt-10 !leading-[1.13] tracking-tight">
          Special offer <br />
          in kids products
        </h2>
        <span className="block mt-6 text-slate-500 dark:text-slate-400">
          Fashion is a form of self-expression and autonomy at a particular
          period and place.
        </span>
        <div className="flex space-x-2 sm:space-x-5 mt-6 sm:mt-12">
          <ButtonPrimary
            href="/page-search"
            className="dark:bg-slate-200 dark:text-slate-900"
          >
            Discover more
          </ButtonPrimary>
        </div>
      </div>
      <div className="relative block lg:absolute lg:left-0 lg:bottom-0 mt-10 lg:mt-0 max-w-xl lg:max-w-[calc(55%-40px)]"
>
        <Image
          src={rightImgDemo}
          alt="promo2 image"
          />
      </div>
    </div>
  </div>
);

export default SectionPromo2;
