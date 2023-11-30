"use client";
import { FC, useState, useRef, useEffect } from "react";
import { Helmet } from "react-helmet";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import axios from "axios";

import { RootState } from "@/app/redux/store";
import { setCredentials } from "@/app/redux/features/auth/authSlice";

import Label from "@/app/assets/components/Label/Label";
import ButtonPrimary from "@/app/assets/shared/Button/ButtonPrimary";
import Input from "@/app/assets/shared/Input/Input";
import Select from "@/app/assets/shared/Select/Select";
import Textarea from "@/app/assets/shared/TextArea/TextArea";
import { avatarImgs } from "@/app/assets/contains/fakedata";
import CommonLayout from "./CommonLayout";

export interface AccountPageProps { 
  className?: string;
}

const AccountPage: FC<AccountPageProps> = ({ className = "" }) => {
  const user: any = useSelector((state: RootState) => state.auth.userInfo);
  const [ error, setError ] = useState("");
  const [ gender, setGender ] = useState("");
  const [ file, setFile ] = useState("");
  const router = useRouter();
  const dispatch = useDispatch();

  const fNameRef: any = useRef(null);
  const emailRef: any = useRef(null);
  const dobRef: any = useRef(null);
  const adrsRef: any = useRef(null);
  const phnRef: any = useRef(null);
  const bioRef: any = useRef(null);

  const isValidEmail = (email: string) => {

    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0+9]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  }
  const updateSubmit = async () => {
    // e.preventDefault();
  
    const fullName = fNameRef.current?.value;
    const email = emailRef.current?.value;
  
    // if(!isValidEmail(email)){
    //   setError("Email is invalid")
    //   return;
    // }

    try{
      axios.post('/api/account/update', {
        fullName: fNameRef.current?.value,
        email: emailRef.current?.value,
        dob: dobRef.current?.value,
        address: adrsRef.current?.value,
        phone: phnRef.current?.value,
        gender: gender,
        id: user.id
      }).then((res) => {
        dispatch(setCredentials(res.data.data))
      })
    }catch (err) {
      console.log(err)
    }
  
    // try {
    //   const res = await fetch("/api/register", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
  
    //     },
    //     body: JSON.stringify({
    //       fullName: fullName,
    //       email: email,
    //       password: password
    //     })
    //   })
  
    //   if(res.status === 400){
    //     setError("This email is already registered.")
    //   }
    //   if(res.status === 200){
    //     // route to confirm email then login. for now it's login
    //     setError("")
    //     router.push("/login");
    //   }
    // }catch (err){
    //   setError("Error, try again later");
    //   console.log(err)
    // }
  }

  const handleGenderChange = (e: any) => {
      let {value} = e.target;
      setGender(value)
  }
  const handleImageChange = (e: any) => {
    console.log(e.target.files[0])
    setFile(URL.createObjectURL(e.target.files[0]))
  }

  return (
    <div className={`nc-AccountPage ${className}`} data-nc-id="AccountPage">
      <Helmet>
        <title>Account || TruthStore Commerce</title>
      </Helmet>
      <CommonLayout>
        <div className="space-y-10 sm:space-y-12">
          {/* HEADING */}
          <h2 className="text-2xl sm:text-3xl font-semibold">
            Account infomation
          </h2>
          <div className="flex flex-col md:flex-row">
            <div className="flex-shrink-0 flex items-start">
              {/* AVATAR */}
              <div className="relative rounded-full overflow-hidden flex">
                <Image
                  src={avatarImgs[2]}
                  alt=""
                  className="w-32 h-32 rounded-full object-cover z-0"
                />
                <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center text-neutral-50 cursor-pointer">
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.5 5H7.5C6.83696 5 6.20107 5.26339 5.73223 5.73223C5.26339 6.20107 5 6.83696 5 7.5V20M5 20V22.5C5 23.163 5.26339 23.7989 5.73223 24.2678C6.20107 24.7366 6.83696 25 7.5 25H22.5C23.163 25 23.7989 24.7366 24.2678 24.2678C24.7366 23.7989 25 23.163 25 22.5V17.5M5 20L10.7325 14.2675C11.2013 13.7988 11.8371 13.5355 12.5 13.5355C13.1629 13.5355 13.7987 13.7988 14.2675 14.2675L17.5 17.5M25 12.5V17.5M25 17.5L23.0175 15.5175C22.5487 15.0488 21.9129 14.7855 21.25 14.7855C20.5871 14.7855 19.9513 15.0488 19.4825 15.5175L17.5 17.5M17.5 17.5L20 20M22.5 5H27.5M25 2.5V7.5M17.5 10H17.5125"
                      stroke="currentColor"
                      strokeWidth={1.5}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <span className="mt-1 text-xs">Change Image</span>
                </div>
                <input
                  type="file"
                  className="absolute inset-0 opacity-0 cursor-pointer"
                  onChange={handleImageChange}
                />
              </div>
            </div>
            <div className="flex-grow mt-10 md:mt-0 md:pl-16 max-w-3xl space-y-6">
              <div>
                <Label>Full name</Label>
                <Input displayName="FName input" className="mt-1.5" defaultValue={`${user?.fullName}`} ref={fNameRef} />
              </div>

              {/* ---- */}

              {/* ---- */}
              <div>
                <Label>Email</Label>
                <div className="mt-1.5 flex">
                  <span className="inline-flex items-center px-2.5 rounded-l-2xl border border-r-0 border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 text-sm">
                    <i className="text-2xl las la-envelope"></i>
                  </span>
                  <Input
                    className="!rounded-l-none"
                    defaultValue={`${user?.email}`}
                    displayName="Email Input"
                    ref={emailRef}
                  />
                </div>
              </div>

              {/* ---- */}
              <div className="max-w-lg">
                <Label>Date of birth</Label>
                <div className="mt-1.5 flex">
                  <span className="inline-flex items-center px-2.5 rounded-l-2xl border border-r-0 border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 text-sm">
                    <i className="text-2xl las la-calendar"></i>
                  </span>
                  <Input
                    className="!rounded-l-none"
                    type="date"
                    defaultValue={user?.dob}
                    displayName="DOB input"
                    ref={dobRef}
                  />
                </div>
              </div>
              {/* ---- */}
              <div>
                <Label>Addess</Label>
                <div className="mt-1.5 flex">
                  <span className="inline-flex items-center px-2.5 rounded-l-2xl border border-r-0 border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 text-sm">
                    <i className="text-2xl las la-map-signs"></i>
                  </span>
                  <Input
                    className="!rounded-l-none"
                    defaultValue={user ? user.address : 'Nigeria'}
                    displayName="Address Input"
                    ref={adrsRef}
                  />
                </div>
              </div>

              {/* ---- */}
              <div>
                <Label>Gender</Label>
                <Select className="mt-1.5" defaultValue={user?.gender} onChange={handleGenderChange}>
                  <option value="Other">Other</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </Select>
              </div>

              {/* ---- */}
              <div>
                <Label>Phone number</Label>
                <div className="mt-1.5 flex">
                  <span className="inline-flex items-center px-2.5 rounded-l-2xl border border-r-0 border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 text-sm">
                    <i className="text-2xl las la-phone-volume"></i>
                  </span>
                  <Input
                    className="!rounded-l-none"
                    defaultValue={user?.phone}
                    displayName="Phone input"
                    ref={phnRef}
                  />
                </div>
              </div>
              {/* ---- */}
              <div>
                <Label>About you</Label>
                <Textarea className="mt-1.5" defaultValue={user?.phone} ref={bioRef} />
              </div>
              <div className="pt-2">
                <ButtonPrimary onClick={updateSubmit}>Update account</ButtonPrimary>
              </div>
            </div>
          </div>
        </div>
      </CommonLayout>
    </div>
  );
};

export default AccountPage;
