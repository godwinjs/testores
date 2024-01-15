"use client";
import { FC, useLayoutEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux"; 

import { setProducts } from "@/app/redux/features/product/productSlice";
import { setCredentials } from "@/app/redux/features/auth/authSlice";
import { RootState } from "@/app/redux/store";

import MainNav2Logged from "./MainNav2Logged";

export interface HeaderLoggedProps {} 

const HeaderLogged: FC<HeaderLoggedProps> = () => {
  const product = useSelector((state: RootState) => state.products.products)
  const dispatch = useDispatch();
  const router = useRouter();
  const session = useSession();

  useLayoutEffect(() => {
    
    if(session?.status == "authenticated"){
      // && pathname === '/account'
      // router.replace("/account");
      
      // axios.post('/api/login/getUser', { email: session.data.user.email}).then((res) => {
      //   const userData = res.data.data;
      //   dispatch(setCredentials(userData));
      // })
    }
    if(session?.status == "unauthenticated"){
      // router.replace("/login");
    }
    function makeApiCall() {
      console.log(('welcome...'))

      // if(check if productImgs.updatedAt is less than 5days if more make call){

      // }
      if(product) return;

      // axios.get('/api/products/get').then((res) => {
      //   const obj = res.data.data[0]
      //   const products = {
      //     id: obj._id, 
      //     products: obj.products,
      //     createdAt: obj.createdAt,
      //     updatedAt: obj.updatedAt
      //   }
      //   console.log(products)
      //   dispatch(setProducts(products))
      // })
   }
   window.addEventListener('focus', makeApiCall)
   
   return () => { 
     window.removeEventListener('focus', makeApiCall)
   }
  }, [session])

  return (
    <div className="nc-HeaderLogged sticky top-0 w-full z-40 ">
      <MainNav2Logged />
    </div>
  );
};

export default HeaderLogged;
