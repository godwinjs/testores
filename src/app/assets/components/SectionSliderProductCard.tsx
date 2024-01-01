"use client";

import React, { FC, useEffect, useId, useRef } from "react";
import Glide from "@glidejs/glide";
import {AdvancedImage} from '@cloudinary/react';
import {Cloudinary} from "@cloudinary/url-gen";

import Heading from "./Heading/Heading";
import ProductCard from "./ProductCard";
// import { Product, PRODUCTS } from "@/app/assets/data/data";
import { Product } from "@/app/assets/data/data";
import DataWarning from "@/app/assets/components/Dasboard/DataWarning";

export interface ProductVariant {
  id: number;
  name: string;
  thumbnail?: {
    url: string,
    public_id: string
  };
  color?: string;
  featuredImage: {
    url: string,
    public_id: string
  };
}
// "New in" | "limited edition" | "Sold Out" | "50% Discount";

export interface SectionSliderProductCardProps {
  className?: string;
  itemClassName?: string;
  heading?: string;
  headingFontClassName?: string;
  headingClassName?: string;
  subHeading?: string;
  data?: Product[];
}

const SectionSliderProductCard: FC<SectionSliderProductCardProps> = ({
  className = "",
  itemClassName = "",
  headingFontClassName,
  headingClassName,
  heading,
  subHeading = "Game Consoles & TVs",
  data,
  // data = PRODUCTS.filter((_, i) => i < 8 && i > 2),
}) => {
  const sliderRef = useRef(null);
  const id = useId();
  const UNIQUE_CLASS = "glidejs" + id.replace(/:/g, "_");
  // @ts-ignore
  useEffect(() => {
    if (!sliderRef.current) {
      return;
    }
    // @ts-ignore
    const OPTIONS: Glide.Options = {
      perView: 4,
      gap: 32,
      bound: true,
      breakpoints: {
        1280: {
          perView: 4 - 1,
        },
        1024: {
          gap: 20,
          perView: 4 - 1,
        },
        768: {
          gap: 20,
          perView: 4 - 2,
        },
        640: {
          gap: 20,
          perView: 1.5,
        },
        500: {
          gap: 20,
          perView: 1.3,
        },
      },
    };

    let slider = new Glide(`.${UNIQUE_CLASS}`, OPTIONS);
    slider.mount();
    // @ts-ignore
    return () => slider.destroy();
  }, [sliderRef, UNIQUE_CLASS]);
  return (
    <div className={`nc-SectionSliderProductCard ${className}`}>
      <div className={`${UNIQUE_CLASS} flow-root`} ref={sliderRef}>
        <Heading
          className={headingClassName}
          fontClass={headingFontClassName}
          rightDescText={subHeading}
          hasNextPrev
        >
          {heading || `New Arrivals`}
        </Heading>
        <div className="glide__track" data-glide-el="track">
          <div className="glide__slides">
            {data ? data.map((item, index) => {
              return <div displayName={`card div ${index}`} key={item._id} className={`glide__slide ${itemClassName}`}>
                <ProductCard data={ { ...item, sizes: item.allOfSizes } } />
              </div>
            }) : <DataWarning title="products" />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionSliderProductCard;
