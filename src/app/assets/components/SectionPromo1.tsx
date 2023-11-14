'use client';

// Next Ready
import React, { FC } from "react";
import Image from "next/image";

import rightImgDemo from "@/images/rightLarge/rightLargeImg.png";
import rightLargeImgDark from "@/images/rightLarge/rightLargeImgDark.png";
import ButtonPrimary from "@/app/assets/shared/Button/ButtonPrimary";
import Logo from "@/app/assets/shared/Logo/Logo";
import ButtonSecondary from "@/app/assets/shared/Button/ButtonSecondary";

export interface SectionPromo1Props {
  className?: string;
}

const SectionPromo1: FC<SectionPromo1Props> = ({ className = "" }) => {
  return (
    <div
      className={`nc-SectionPromo1 relative flex flex-col lg:flex-row items-center ${className}`}
      data-nc-id="SectionPromo1"
    >
      <div className="relative flex-shrink-0 mb-16 lg:mb-0 lg:mr-10 lg:w-2/5">
        <Logo className="w-28" />
        <h2 className="font-semibold text-3xl sm:text-4xl xl:text-5xl 2xl:text-6xl mt-6 sm:mt-10 !leading-[1.2] tracking-tight">
          Earn free money <br /> with TruthStores
        </h2>
        <span className="block mt-6 text-slate-500 dark:text-slate-400 ">
          With TruthStores you will get freeship & savings combo...
        </span>
        <div className="flex space-x-2 sm:space-x-5 mt-6 sm:mt-12">
          <ButtonPrimary href="/page-collection" className="">
            Savings combo
          </ButtonPrimary>
          <ButtonSecondary
            href="/page-search"
            className="border border-slate-100 dark:border-slate-700"
          >
            Discover more
          </ButtonSecondary>
        </div>
      </div>
      <div className="relative flex-1 max-w-xl lg:max-w-none">
        <div className="block dark:hidden">
        <Image 
          src={rightImgDemo}
          alt='large image'
           />
        </div>
        <div className="hidden dark:block">
          <Image
            src={rightLargeImgDark}
            alt='dark large image'
          />
        </div>
      </div>
    </div>
  );
};

export default SectionPromo1;
