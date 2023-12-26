import React, { FC } from "react";
import Image from "next/image";

// import NcImage from "@/app/assets/shared/NcImage/NcImage";
import imgAds from "@/images/ads.png";

export interface SectionAdsProps {
  className?: string;
}

const SectionAds: FC<SectionAdsProps> = ({ className = "" }) => {
  return (
    <a href="/#" className={`nc-SectionAds block w-full ${className}`}>
      <Image alt="ads image" height={0} width={0} className="w-full" src={imgAds} />
    </a>
  );
};

export default SectionAds;
