// Next Ready
'use client';

import React, { FC, useState } from "react";
import Image from "next/image";
import useInterval from "react-use/lib/useInterval";
import useBoolean from "react-use/lib/useBoolean";

import imageRightPng from "@/images/hero/hero-right1.png";
import imageRightPng2 from "@/images/hero/hero-right2.png";
import imageRightPng3 from "@/images/hero/hero-right3.png";
import backgroundLineSvg from "@/images/hero/Moon.svg";

import ButtonPrimary from "@/app/assets/shared/Button/ButtonPrimary";
import Next from "@/app/assets/shared/NextPrev/Next";
import Prev from "@/app/assets/shared/NextPrev/Prev";
 

interface Hero2DataType {
  image: string | typeof imageRightPng;
  cloudImage?: string;
  heading: string;
  subHeading: string;
  btnText: string;
  btnLink: string;
}
export interface SectionHero2Props {
  className?: string;
  data: Hero2DataType[];
}
const Images = {
  "imageRightPng2": imageRightPng2,
  "imageRightPng3": imageRightPng3,
  "imageRightPng": imageRightPng
}
let TIME_OUT: NodeJS.Timeout | null = null;

const SectionHero2: FC<SectionHero2Props> = ({ className = "", data }) => {
  // Use a defualt existing image if no image data is provided for the slides, but if some is provided
  // substitute it for the placeholder images, and when its greater than the paceholder image add it to the slides DATA array.
  
  const DATA: Hero2DataType[] = [
    {
      image: data[0].cloudImage ? data[0].cloudImage : Images["imageRightPng2"],
      heading: data[0].heading,
      subHeading: data[0].subHeading,
      btnText: data[0].btnText,
      btnLink: data[0].btnLink,
    },
    {
      image: data[1].cloudImage ? data[1].cloudImage : Images["imageRightPng3"],
      heading: data[1].heading,
      subHeading: data[1].subHeading,
      btnText: data[1].btnText,
      btnLink: data[1].btnLink,
    },
    {
      image: data[2].cloudImage ? data[2].cloudImage : Images["imageRightPng"],
      heading: data[2].heading,
      subHeading: data[2].subHeading,
      btnText: data[2].btnText,
      btnLink: data[2].btnLink,
    },
  ];

  if(data.length > 3){
    data.map((item: any, i: number) => {
      if(i > 2){
        DATA.push({
          image: item.cloudImage,
          heading: item.heading,
          subHeading: item.subHeading,
          btnText: item.btnText,
          btnLink: item.btnLink,
        })
      }
    })
  }

  // =================
  const [indexActive, setIndexActive] = useState(0);
  const [isRunning, toggleIsRunning] = useBoolean(true);

  useInterval(
    () => {
      handleAutoNext();
    },
    isRunning ? 5500 : null
  );
  //

  const handleAutoNext = () => {
    setIndexActive((state) => {
      if (state >= DATA.length - 1) {
        return 0;
      }
      return state + 1;
    });
  };

  const handleClickNext = () => {
    setIndexActive((state) => {
      if (state >= DATA.length - 1) {
        return 0;
      }
      return state + 1;
    });
    handleAfterClick();
  };

  const handleClickPrev = () => {
    setIndexActive((state) => {
      if (state === 0) {
        return DATA.length - 1;
      }
      return state - 1;
    });
    handleAfterClick();
  };

  const handleAfterClick = () => {
    toggleIsRunning(false);
    if (TIME_OUT) {
      clearTimeout(TIME_OUT);
    }
    TIME_OUT = setTimeout(() => {
      toggleIsRunning(true);
    }, 1000);
  };
  // =================

  const renderItem = (index: number) => {
    const isActive = indexActive === index;
    const item = DATA[index];
    if (!isActive) {
      return null;
    }
    return (
      <div
        className={`nc-SectionHero2Item nc-SectionHero2Item--animation flex flex-col-reverse lg:flex-col relative overflow-hidden ${className}`}
        key={index}
      >
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex justify-center">
          {DATA.map((_, index) => {
            const isActive = indexActive === index;
            return (
              <div
                key={index}
                onClick={() => {
                  setIndexActive(index);
                  handleAfterClick();
                }}
                className={`relative px-1 py-1.5 cursor-pointer`}
              >
                <div
                  className={`relative w-20 h-1 shadow-sm rounded-md bg-white`}
                >
                  {isActive && (
                    <div
                      className={`nc-SectionHero2Item__dot absolute inset-0 bg-slate-900 rounded-md ${
                        isActive ? " " : " "
                      }`}
                    ></div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <Prev
          className="absolute left-1 sm:left-5 top-3/4 sm:top-1/2 sm:-translate-y-1/2 z-10 !text-slate-700"
          btnClassName="w-12 h-12 hover:border-slate-400 dark:hover:border-slate-400"
          svgSize="w-6 h-6"
          onClickPrev={handleClickPrev}
        />
        <Next
          className="absolute right-1 sm:right-5 top-3/4 sm:top-1/2 sm:-translate-y-1/2 z-10 !text-slate-700"
          btnClassName="w-12 h-12 hover:border-slate-400 dark:hover:border-slate-400"
          svgSize="w-6 h-6"
          onClickNext={handleClickNext}
        />

        {/* BG */}
        <div className="absolute inset-0 bg-[#E3FFE6] dark:bg-slate-800">
          {/* <div className="absolute inset-0 bg-[#F7F0EA]"> */}
          <Image
            className="absolute w-full h-full object-contain"
            src={backgroundLineSvg}
            priority={true}
            alt="hero"
          />
        </div>

        <div className="relative container pb-0 pt-14 sm:pt-20 lg:py-44">
          <div
            className={`relative z-[1] w-full max-w-3xl lg:mx-10 space-y-8 sm:space-y-14 nc-SectionHero2Item__left`}
          >
            <div className="space-y-5 sm:space-y-6">
              <span className="nc-SectionHero2Item__subheading block text-base md:text-xl text-slate-700 font-medium">
                {item.subHeading}
              </span>
              <h2 className="nc-SectionHero2Item__heading font-semibold text-2xl sm:text-4xl md:text-3xl xl:text-4xl 2xl:text-5xl !leading-[114%] text-slate-900">
                {item.heading}
              </h2>
            </div>

            <ButtonPrimary
              className="nc-SectionHero2Item__button dark:bg-slate-900"
              sizeClass="py-3 px-6 sm:py-5 sm:px-9"
              href={item.btnLink as any}
            >
              <span>{item.btnText}</span>
              <span>
                <svg className="w-5 h-5 ml-2.5" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M22 22L20 20"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </ButtonPrimary>
          </div>
          <div className="mt-10 lg:mt-0 lg:absolute right-0 bottom-0 top-0 w-full max-w-2xl lg:mx-12 lg:max-w-2xl xl:max-w-3xl 2xl:max-w-4xl">
            <Image
              className="w-full h-full object-contain object-right-bottom nc-SectionHero2Item__image"
              src={item.image}
              priority={true}
              alt={item.heading}
              width={100}
              height={100}
              sizes="xs" 
            />
          </div>
        </div>
      </div>
    );
  };

  return <>{DATA.map((_, index) => renderItem(index))}</>;
};

export default SectionHero2;
