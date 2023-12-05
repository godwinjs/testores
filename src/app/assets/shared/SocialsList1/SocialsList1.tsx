import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";

import { SocialType } from "@/app/assets/shared/SocialsShare/SocialsShare";
import facebook from "@/images/socials/_Facebook.svg";
import twitter from "@/images/socials/_Twitter.svg";
import telegram from "@/images/socials/telegram.svg";
import youtube from "@/images/socials/youtube.svg";

export interface SocialsList1Props {
  className?: string;
}

const socials: SocialType[] = [
  { name: "Facebook", icon: facebook, href: "#" },
  { name: "Youtube", icon: youtube, href: "#" },
  { name: "Telegram", icon: telegram, href: "#" },
  { name: "Twitter", icon: twitter, href: "#" },
];

const SocialsList1: FC<SocialsList1Props> = ({ className = "space-y-3" }) => {
  const renderItem = (item: SocialType, index: number) => {
    return (
      <Link
        href={item.href}
        className="flex items-center text-2xl text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white leading-none space-x-2 group"
        key={index}
      >
        <span className="flex-shrink-0 w-5 ">
          <Image src={item.icon} alt={item.name+" icon"} />
        </span>
      </Link>
    );
  };

  return (
    <div className={`nc-SocialsList1 ${className}`} data-nc-id="SocialsList1">
      {socials.map(renderItem)}
    </div>
  );
};

export default SocialsList1;
