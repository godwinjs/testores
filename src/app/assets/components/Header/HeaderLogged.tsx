"use client";
import { FC, useLayoutEffect } from "react";
import MainNav2Logged from "./MainNav2Logged";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

import { setProducts } from "@/app/redux/features/product/productSlice";
import { RootState } from "@/app/redux/store";

export interface HeaderLoggedProps {} 

const HeaderLogged: FC<HeaderLoggedProps> = () => {
  const product = useSelector((state: RootState) => state.products.products)
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    function makeApiCall() {
      console.log(('welcome...'))

      // if(check if productImgs.updatedAt is less than 5days if more make call){

      // }
      if(product) return;

      axios.get('/api/product/get').then((res) => {
        const obj = res.data.data[0]
        const products = {
          id: obj._id, 
          products: obj.products,
          createdAt: obj.createdAt,
          updatedAt: obj.updatedAt
        }
        dispatch(setProducts(products))
      })
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
