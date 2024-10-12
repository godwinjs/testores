'use client';

import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { Transition } from "@headlessui/react";
import { useRouter } from "next/navigation"
import { useSelector } from "react-redux";

import { RootState } from "@/app/redux/store";
import { addToWishlist, removeFromWishlist } from "@/app/redux/features/account/accountSlice"

import Prices from "./Prices";

export interface LikeButtonProps {
  className?: String;
  productId?: String;
  product?: any;
}

const LikeButton: React.FC<LikeButtonProps> = ({
  className = "",
  product
}) => {
  const dispatch = useDispatch();
  const router = useRouter()
  const [isLiked, setIsLiked] = useState(false);
  const wishlist: any = useSelector((state: RootState) => state.account.wishlist);

  useEffect(() => {
    wishlist && wishlist.some((list: any) => {
      if( list._id === product._id){
        // console.log(window.location.href) // use incase like icon behave improperly on the /wishlist page.
        setIsLiked(true)
        return true;
      }
      return false;
    })

    return () => {
      // before component unmounts set current to false so that state doesn't update when the component is unmounted.
      
    }
  }, [wishlist, setIsLiked, product])


  const renderWishlistOnNotify = (title: string, price: number) => {

    return (
      <div className="flex ">

        <div className="ml-4 flex flex-1 flex-col">
          <div>
            <div className="flex justify-between ">
              <div>
                <h3 className="text-base font-medium ">{title}</h3>
              </div>
              <Prices price={price} className="mt-0.5" />
            </div>
          </div>
          <div className="flex flex-1 items-end justify-between text-sm">

            <div className="flex">
              <button
                type="button"
                className="font-medium text-primary-6000 dark:text-primary-500 "
                onClick={() => router.push('/wishlist')}
              >
                View Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  const notifyAddToWishlist = (notExist: boolean, item: any ) => {
    
    const { title, price, msg } = item;

    toast.custom(
      (t) => (
        <Transition
          appear
          show={t.visible}
          className="p-4 max-w-md w-full bg-white dark:bg-slate-800 shadow-lg rounded-2xl pointer-events-auto ring-1 ring-black/5 dark:ring-white/10 text-slate-900 dark:text-slate-200"
          enter="transition-all duration-150"
          enterFrom="opacity-0 translate-x-20"
          enterTo="opacity-100 translate-x-0"
          leave="transition-all duration-150"
          leaveFrom="opacity-100 translate-x-0"
          leaveTo="opacity-0 translate-x-20"
        >
          <p className="block text-base font-semibold leading-none">
            { !notExist ? msg : msg }
          </p>
          <div className="border-t border-slate-200 dark:border-slate-700 my-4" />
          {renderWishlistOnNotify(title, price)}
        </Transition>
      ))
  }

  const getProduct = (_id: string) => {
    wishlist.map((item: any, idx: number) => {
      if(item._id === _id){
        product = {
          ...item,
          idx
        }
      }
    })
  }

  const handleLiked = (e: any) => {
    let _id = e.currentTarget.id;
    getProduct(_id)
    if(isLiked){
      notifyAddToWishlist(false, {
        ...product,
        msg: `Removed product ID${product.idx}: ${product.title} from wishlist`
      })
      dispatch(removeFromWishlist(product)) 
    }else{
      if(product.idx >= 0){
        
        notifyAddToWishlist(false, {
          ...product,
          msg: `ID${product.idx}: ${product.title} already exists`
        })
        return;
      }else{
        
        notifyAddToWishlist(true, {
          ...product,
          msg: `Added Product: ${product.title} to wishlist`
        })
        dispatch(addToWishlist(product))
      }
    }
    // set
  }

  return (
    <button
      id={product._id}
      className={`w-9 h-9 flex items-center justify-center rounded-full bg-white dark:bg-slate-900 text-neutral-700 dark:text-slate-200 nc-shadow-lg ${className}`}
      onClick={(e) => { setIsLiked(!isLiked); handleLiked(e); }}
    >
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" id={product._id}>
        <path 
          id={product._id}
          d="M12.62 20.81C12.28 20.93 11.72 20.93 11.38 20.81C8.48 19.82 2 15.69 2 8.68998C2 5.59998 4.49 3.09998 7.56 3.09998C9.38 3.09998 10.99 3.97998 12 5.33998C13.01 3.97998 14.63 3.09998 16.44 3.09998C19.51 3.09998 22 5.59998 22 8.68998C22 15.69 15.52 19.82 12.62 20.81Z"
          stroke={isLiked ? "#ef4444" : "currentColor"}
          fill={isLiked ? "#ef4444" : "none"}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};

export default LikeButton;
