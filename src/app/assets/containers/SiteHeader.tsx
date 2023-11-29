"use client";

import React from "react";
import { usePathname } from 'next/navigation'

import HeaderLogged from "@/app/assets/components/Header/HeaderLogged";
// import Header from "@/app/assets/components/Header/Header";

const SiteHeader = () => {
  const pathname = usePathname();

  // return pathname === "/" ? <HeaderLogged /> : <Header />;
  return <HeaderLogged />;
  // return pathname === "/" ? <Header /> : <HeaderLogged />;
};

export default SiteHeader;
