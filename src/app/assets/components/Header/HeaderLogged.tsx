"use client";
import { FC, useLayoutEffect } from "react";
import MainNav2Logged from "./MainNav2Logged";
// import axios from "axios";
// import { useDispatch } from "react-redux";

// import { setProducts } from "@/app/redux/features/product/productSlice";

export interface HeaderLoggedProps {} 

const HeaderLogged: FC<HeaderLoggedProps> = () => {
  // const dispatch = useDispatch();

  useLayoutEffect(() => {
    function makeApiCall() {
      console.log(('welcome...'))
      // axios.get('/api/product/set').then((res) => {
      //   const products = res.data.data[0].products;
      //   dispatch(setProducts(products))
      // })
   }
   window.addEventListener('focus', makeApiCall)
   
   return () => { 
     window.removeEventListener('focus', makeApiCall)
   }
  })

  return (
    <div className="nc-HeaderLogged sticky top-0 w-full z-40 ">
      <MainNav2Logged />
    </div>
  );
};

export default HeaderLogged;
