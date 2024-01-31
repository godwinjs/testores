'use client';

import React, { FC, useState, useCallback, useMemo } from "react";

export interface PricesProps {
  className?: string;
  price?: number;
  contentClass?: string;
}



const Prices: FC<PricesProps> = ({
  className = "",
  price = 33,
  contentClass = "py-1 px-2 md:py-1.5 md:px-2.5 text-sm font-medium",
}) => {
  const [pageData, setPageData] : any = useState(null);

  const getPageData = useCallback(async () => {
    const res = await fetch('/pages/home.json')
    const data  = await res.json();
    setPageData(data)
  }, [setPageData])

  useMemo(() => getPageData(), [getPageData]);

  return (
    <div className={`${className}`}>
      <div
        className={`flex items-center border-2 border-green-500 rounded-lg ${contentClass}`}
      >
        <span className="text-green-500 !leading-none">
          &#8358; {price.toFixed(2)}
        </span>
      </div>
    </div>
  );
};

export default Prices;
