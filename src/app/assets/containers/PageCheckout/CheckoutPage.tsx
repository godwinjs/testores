"use client"

import { useState } from "react";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import Image from "next/image"
import { PaystackButton } from "react-paystack";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { Transition } from "@headlessui/react";

import { RootState } from "@/app/redux/store"
import { removeCart, updateCart, addToOrder, postOrders } from "@/app/redux/features/account/accountSlice";
import { useAppDispatch } from "@/app/redux/store/hook";

import { addArray } from "@/app/assets/utils/calc";
import Label from "@/app/assets/components/Label/Label";
import NcInputNumber from "@/app/assets/components/NcInputNumber";
import Prices from "@/app/assets/components/Prices";
import ButtonPrimary from "@/app/assets/shared/Button/ButtonPrimary";
import Input from "@/app/assets/shared/Input/Input";
import ContactInfo from "./ContactInfo";
import PaymentMethod from "./PaymentMethod";
import ShippingAddress from "./ShippingAddress";
import SetPageTitle from "../../hooks/SetPageTitle";

const CheckoutPage = ({user}: any) => {
  SetPageTitle({title: "Checkout || Truthstore Ecommerce"})

  const dispatch = useAppDispatch();
  const router = useRouter();
  const cart: any = useSelector((state: RootState) => state.account.cart)
  const [tabActive, setTabActive] = useState<
    "ContactInfo" | "ShippingAddress" | "PaymentMethod" | ""
  >("");
  const [ cardNumb, setCardNumb ] = useState("");
  const [ cardName, setCardName ] = useState("");
  const [ expDate, setExpDate ] = useState("");
  const [ cvc, setCVC ] = useState("");
  
  const orderTotal  = cart && (addArray(cart.map((i: any) => i.price * i.quantity) ) * 0.008) + (addArray(cart.map((i: any) => i.price * i.quantity) ) * 0.005) + ( addArray(cart.map((i: any) => i.price * i.quantity) ));
  const email = user && user.email;
  const fullName = user && user.name;
  const phone = user && user.phone;


  const componentProps = {
    email,
    amount: orderTotal * 100,
    metadata: {
      name: fullName,
      phone,
      "custom_fields": [
        {
          "display_name": "Invoice ID",
          "variable_name": "Invoice ID",
          "value": 209
        },
      ],
    },
    publicKey: `${process.env.NEXT_PUBLIC_PSTACK_PUB}`,
    text: "Confirm order",
    onSuccess: (data: any) => {

      if(data.status === "success") {
        let date = new Date().toString().split(" ").slice(0, 5).join(" ");
        // save cart to my order
        dispatch(addToOrder({ orderID: data.reference, products: cart, status: "Pending", orderDate: date}))

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
              {/* { !notExist ? msg : msg } */}
              {"Thanks for doing business with us! Come back soon!!"}
            </p>
            <div className="border-t border-slate-200 dark:border-slate-700 my-4" />
            
            <div className="flex ">
  
              <div className="ml-4 flex flex-1 flex-col">
                <div>
                  <div className="flex justify-between ">
                    <div>
                      <h3 className="text-base font-medium ">{data.reference}</h3>
                    </div>
                    {/* <Prices price={price} className="mt-0.5" /> */}
                  </div>
                </div>
                <div className="flex flex-1 items-end justify-between text-sm">
  
                  <div className="flex">
                    <button
                      type="button"
                      className="font-medium text-primary-6000 dark:text-primary-500 "
                      onClick={() => router.push('/account/my-order')}
                    >
                      View Order
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Transition>
        ))
        // admin should see user order
        dispatch(postOrders())

        // remove all cart
        dispatch(removeCart(null))

      }else {
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
              {/* { !notExist ? msg : msg } */}
              {"Opps! there was an issue with your payment."}
            </p>
            <div className="border-t border-slate-200 dark:border-slate-700 my-4" />
            
            <div className="flex ">
  
              <div className="ml-4 flex flex-1 flex-col">
                <div>
                  <div className="flex justify-between ">
                    <div>
                      <h3 className="text-base font-medium ">{"Payment Unsuccessful"}</h3>
                    </div>
                    {/* <Prices price={price} className="mt-0.5" /> */}
                  </div>
                </div>
                <div className="flex flex-1 items-end justify-between text-sm">
  
                  <div className="flex">
                    <button
                      type="button"
                      className="font-medium text-primary-6000 dark:text-primary-500 "
                      onClick={() => router.push('/contact')}
                    >
                      Contact customer care
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Transition>
        ))

      }
    },
    onClose: (data: any) => { 
      alert("About to cancel payment..") 
      console.log(data)
    },
  }
  


  const handleScrollToEl = (id: string) => {
    const element = document.getElementById(id);
    setTimeout(() => {
      element?.scrollIntoView({ behavior: "smooth" });
    }, 80);
  };

  const handleChange = (e: any) => {
    switch(e.target.attributes.name.nodeValue){
      case "CNumber":
        setCardNumb(e.target.value)
        break;
      case "NOCard":
        setCardName(e.target.value)
        break;
      case "ExpDate":
        setExpDate(e.target.value)
        break;
      case "CVC":
        setCVC(e.target.value)
        break;
    }
  }

  const handleSubmit = () => {
    console.log([cardName, cardNumb, expDate, cvc])
    fetch("/pay/checkout").then(a => console.log(a))
  }

  const handleQtyChange2 = (x: any, index: number) => {
    const product = { ...cart[index] }

    product.quantity = +x;
    
    dispatch(updateCart([index, product]))
  }

  const renderProduct = (item: any, index: number) => {
    const { image, price, title, quantity } = item;
    const qtyMult = [];
    for(let i = 1; i <= 100; i++){
      qtyMult.push(i)
    }

    return (
      <div key={index} className="relative flex py-7 first:pt-0 last:pb-0">
        <div className="relative h-36 w-24 sm:w-28 flex-shrink-0 overflow-hidden rounded-xl bg-slate-100">
          <Image 
            src={image}
            alt={title}
            className="h-full w-full object-contain object-center"
            width={100}
            height={100}
          />
          <Link href="/product-detail" className="absolute inset-0"></Link>
        </div>

        <div className="ml-3 sm:ml-6 flex flex-1 flex-col">
          <div>
            <div className="flex justify-between ">
              <div className="flex-[1.5] ">
                <h3 className="text-base font-semibold">
                  <Link href="/product-detail">{title}</Link>
                </h3>
                <div className="mt-1.5 sm:mt-2.5 flex text-sm text-slate-600 dark:text-slate-300">
                  <div className="flex items-center space-x-1.5">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M7.01 18.0001L3 13.9901C1.66 12.6501 1.66 11.32 3 9.98004L9.68 3.30005L17.03 10.6501C17.4 11.0201 17.4 11.6201 17.03 11.9901L11.01 18.0101C9.69 19.3301 8.35 19.3301 7.01 18.0001Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M8.35 1.94995L9.69 3.28992"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M2.07 11.92L17.19 11.26"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M3 22H16"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M18.85 15C18.85 15 17 17.01 17 18.24C17 19.26 17.83 20.09 18.85 20.09C19.87 20.09 20.7 19.26 20.7 18.24C20.7 17.01 18.85 15 18.85 15Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>

                    <span>{`Black`}</span>
                  </div>
                  <span className="mx-4 border-l border-slate-200 dark:border-slate-700 "></span>
                  <div className="flex items-center space-x-1.5">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M21 9V3H15"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M3 15V21H9"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M21 3L13.5 10.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M10.5 13.5L3 21"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>

                    <span>{`2XL`}</span>
                  </div>
                </div>

                <div className="mt-3 flex justify-between w-full sm:hidden relative">
                  <select
                    name="qty"
                    id="qty"
                    defaultValue={quantity}
                    className="form-select text-sm rounded-md py-1 border-slate-200 dark:border-slate-700 relative z-10 dark:bg-slate-800 "
                  >
                    {qtyMult.map((item, idx) => {
                      return <option key={idx} value={idx + 1}>{item}</option>
                    })}
                  </select>
                  <Prices
                    contentClass="py-1 px-2 md:py-1.5 md:px-2.5 text-sm font-medium h-full"
                    price={price}
                  />
                </div>
              </div>

              <div className="hidden flex-1 sm:flex justify-end">
                <Prices price={price} className="mt-0.5" />
              </div>
            </div>
          </div>

          <div className="flex mt-auto pt-4 items-end justify-between text-sm">
            <div className="hidden sm:block text-center relative">
              <NcInputNumber defaultValue={ cart[index].quantity } id={index} onChange={(x) => handleQtyChange2(x, index)} className="relative z-10" />
            </div>

            <a
              href="##"
              className="relative z-10 flex items-center mt-3 font-medium text-primary-6000 hover:text-primary-500 text-sm "
            >
              <span>Remove</span>
            </a>
          </div>
        </div>
      </div>
    );
  };

  const renderLeft = () => {
    return (
      <div className="space-y-8">
        <div id="ContactInfo" className="scroll-mt-24">
          <ContactInfo
            isActive={tabActive === "ContactInfo"}
            user={user}
            onOpenActive={() => {
              setTabActive("ContactInfo");
              handleScrollToEl("ContactInfo");
            }}
            onCloseActive={() => {
              setTabActive("ShippingAddress");
              handleScrollToEl("ShippingAddress");
            }}
          />
        </div>

        <div id="ShippingAddress" className="scroll-mt-24">
          <ShippingAddress
            isActive={tabActive === "ShippingAddress"}
            user={user}
            onOpenActive={() => {
              setTabActive("ShippingAddress");
              handleScrollToEl("ShippingAddress");
            }}
            onCloseActive={() => {
              setTabActive("PaymentMethod");
              handleScrollToEl("PaymentMethod");
            }}
          />
        </div>

        <div id="PaymentMethod" className="scroll-mt-24">
          <PaymentMethod
            isActive={tabActive === "PaymentMethod"}
            user={user}
            onOpenActive={() => {
              setTabActive("PaymentMethod");
              handleScrollToEl("PaymentMethod");
            }}
            onCloseActive={() => setTabActive("PaymentMethod")}
            handleChange={(e) => handleChange(e)}
          />
        </div>
      </div>
    );
  };

  return (
    <div className="nc-CheckoutPage">

      <main className="container py-16 lg:pb-28 lg:pt-20 ">
        <div className="mb-16">
          <h2 className="block text-2xl sm:text-3xl lg:text-4xl font-semibold ">
            Checkout
          </h2>
          <div className="block mt-3 sm:mt-5 text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-400">
            <Link href={"/"} className="">
              Homepage
            </Link>
            <span className="text-xs mx-1 sm:mx-1.5">/</span>
            <Link href={"/cart"} className="">
              Cart
            </Link>
            <span className="text-xs mx-1 sm:mx-1.5">/</span>
            <span className="underline">Checkout</span>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row">          
          <div className="w-full lg:w-[36%] ">
            <h3 className="text-lg font-semibold">Order summary</h3>
            <div className="mt-8 divide-y divide-slate-200/70 dark:divide-slate-700 ">
              {cart ? cart.map((cart: any, idx: number) => renderProduct(cart, idx)) : "No product in cart"}
            </div>

            <div className="mt-10 pt-6 text-sm text-slate-500 dark:text-slate-400 border-t border-slate-200/70 dark:border-slate-700 ">
              <div>
                <Label className="text-sm">Discount code</Label>
                <div className="flex mt-1.5">
                  <Input displayName="DiscountCode" sizeClass="h-10 px-4 py-3" className="flex-1" />
                  <button onClick={() => console.log('dispatch(postOrders())')} className="text-neutral-700 dark:text-neutral-200 border border-neutral-200 dark:border-neutral-700 hover:bg-neutral-100 rounded-2xl px-4 ml-3 font-medium text-sm bg-neutral-200/70 dark:bg-neutral-700 dark:hover:bg-neutral-800 w-24 flex justify-center items-center transition-colors">
                    Apply
                  </button>
                </div>
              </div>

              <div className="mt-4 flex justify-between py-2.5">
                <span>Subtotal</span>
                <span className="font-semibold text-slate-900 dark:text-slate-200">
                ₦ {cart ? addArray(cart.map((i: any) => i.price * i.quantity) ) : 0.00}
                </span>
              </div> 
              <div className="flex justify-between py-2.5">
                <span>Shipping estimate</span>
                <span className="font-semibold text-slate-900 dark:text-slate-200">
                  ₦ {cart ? addArray(cart.map((i: any) => i.price * i.quantity) ) * 0.008 : 0.00}
                </span>
              </div>
              <div className="flex justify-between py-2.5">
                <span>Tax estimate</span>
                <span className="font-semibold text-slate-900 dark:text-slate-200">
                  ₦ {cart ? addArray(cart.map((i: any) => i.price * i.quantity) ) * 0.005 : 0.00}
                </span>
              </div>
              <div className="flex justify-between font-semibold text-slate-900 dark:text-slate-200 text-base pt-4">
                <span>Order total</span>
                <span>
                  ₦ {orderTotal}
                  {/* ₦ {cart ? (addArray(cart.map((i: any) => i.price * i.quantity) ) * 0.008) + (addArray(cart.map((i: any) => i.price * i.quantity) ) * 0.005) + ( addArray(cart.map((i: any) => i.price * i.quantity) )) : 0.00} */}
                </span>
              </div>
            </div>
            {/* <ButtonPrimary onClick={handleSubmit} className="ttnc-ButtonPrimary disabled:cursor-not-allowed disabled:bg-opacity-90 bg-slate-900 dark:bg-slate-100 hover:bg-slate-800 text-slate-50 dark:text-slate-800 shadow-xl mt-8 w-full rounded py-4" > pay </ButtonPrimary> */}
            <PaystackButton className="ttnc-ButtonPrimary disabled:cursor-not-allowed disabled:bg-opacity-90 bg-slate-900 dark:bg-slate-100 hover:bg-slate-800 text-slate-50 dark:text-slate-800 shadow-xl mt-8 w-full rounded py-4" {...componentProps} />
            
            <div className="mt-5 text-sm text-slate-500 dark:text-slate-400 flex items-center justify-center">
              <p className="block relative pl-5">
                <svg
                  className="w-4 h-4 absolute -left-1 top-0.5"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 8V13"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M11.9945 16H12.0035"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Learn more{` `}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="##"
                  className="text-slate-900 dark:text-slate-200 underline font-medium"
                >
                  Taxes
                </a>
                <span>
                  {` `}and{` `}
                </span>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="##"
                  className="text-slate-900 dark:text-slate-200 underline font-medium"
                >
                  Shipping
                </a>
                {` `} infomation
              </p>
            </div>
          </div>

          <div className="flex-shrink-0 border-t lg:border-t-0 lg:border-l border-slate-200 dark:border-slate-700 my-10 lg:my-0 lg:mx-10 xl:lg:mx-14 2xl:mx-16 "></div>

          <div className="flex-1">{renderLeft()}</div>
        </div>
      </main>
    </div>
  );
};

export default CheckoutPage;
