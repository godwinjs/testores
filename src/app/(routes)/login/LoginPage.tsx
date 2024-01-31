'use client'
import React, { FC, useState, useEffect } from "react";
import Link from "next/link";
import Image from 'next/image';
import { useRouter } from "next/navigation";
import { signIn, useSession } from "next-auth/react";
import { useDispatch } from "react-redux";

import { setCredentials } from "@/app/redux/features/auth/authSlice";

import facebookSvg from "@/images/socials/_Facebook.svg";
import twitterSvg from "@/images/socials/_Twitter.svg";
import googleSvg from "@/images/socials/_Google.svg";
import Input from "@/app/assets/shared/Input/Input"; 
import ButtonPrimary from "@/app/assets/shared/Button/ButtonPrimary";
import Loading from "@/app/loading";
import setPageTitle from "@/app/assets/hooks/setPageTitle";


export interface PageLoginProps {
  className?: string;
}

const loginSocials = [
  {
    name: "Continue with Facebook",
    href: "#",
    icon: facebookSvg,
    provider: 'facebook'
  },
  {
    name: "Continue with Twitter",
    href: "#",
    icon: twitterSvg,
    provider: 'twitter'
  },
  {
    name: "Continue with Google",
    href: "#",
    icon: googleSvg,
    provider: 'google'
  },
];

const LoginPage: FC<PageLoginProps> = ({ className = "" }) => {
    const [ error, setError ] = useState("");
    const router = useRouter();
    setPageTitle({title: "Log In || TruthStore Commerce"})
    // const session = useSession();
    const { data: session, status: sessionStatus } = useSession();
    // const dispatch = useDispatch();

    useEffect(() => {
        if(sessionStatus == "authenticated"){
          // dispatch(setCredentials(session.user));
            router.replace("/account");
        }
        // if(session?.status == "authenticated"){
        //   dispatch(setCredentials(session.data.user));
        //     router.replace("/account")
        // }
    }, [sessionStatus, router])
  
    const isValidEmail = (email: string) => {
  
      const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0+9]+\.[A-Z]{2,}$/i;
      return emailRegex.test(email);
    }

    const handleSubmit = async (e: any) => {
      e.preventDefault();
    
      const email = e.target[0].value;
      const password = e.target[1].value;
    
      if(!isValidEmail(email)){
        setError("Email is invalid")
        return;
      }
      if(!password || password.length < 8){
        setError("Password is invalid")
        return;
      }

        //   
        const res = await signIn("credentials", {
            redirect: false,
            email,
            password
        });

        if(res?.error){
            setError("Invalid Email or password");
            if(res?.url){
              router.replace('/account')
            } 
        }else{
            setError("")

        }

    }
  
  if(sessionStatus === 'loading'){
    return <Loading />
  }

  return (
    sessionStatus !== "authenticated" && <div className={`nc-PageLogin ${className}`} data-nc-id="PageLogin">
      <div className="container mb-24 lg:mb-32">
        <h2 className="my-20 flex items-center text-3xl leading-[115%] md:text-5xl md:leading-[115%] font-semibold text-neutral-900 dark:text-neutral-100 justify-center">
          Log In
        </h2>
        <div className="max-w-md mx-auto space-y-6">
          <div className="grid gap-3">
            {loginSocials.map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={async () => {
                  const res = await signIn(`${item.provider}`,{
                  redirect: false
                  })
                  if(res?.error){
                    setError("Couldn't login user");
                    if(res?.url){
                      router.replace('/account')
                    } 
                }
                }}
                className="flex w-full rounded-lg bg-primary-50 dark:bg-neutral-800 px-4 py-3 transform transition-transform sm:px-6 hover:translate-y-[-2px]"
              >
                <Image
                  className="flex-shrink-0 w-md !min-w-0 !min-h-0 max-w-[100%] h-[auto]"
                  src={item.icon}
                  alt={item.name}
                />
                <h3 className="flex-grow text-center text-sm font-medium text-neutral-700 dark:text-neutral-300 sm:text-sm">
                  {item.name}
                </h3>
              </a>
            ))}
          </div>
          {/* OR */}
          <div className="relative text-center">
            <span className="relative z-10 inline-block px-4 font-medium text-sm bg-white dark:text-neutral-400 dark:bg-neutral-900">
              OR
            </span>
            <div className="absolute left-0 w-full top-1/2 transform -translate-y-1/2 border border-neutral-100 dark:border-neutral-800"></div>
          </div>
          {/* FORM */}
          <form className="grid grid-cols-1 gap-6" onSubmit={handleSubmit}>
            <label className="block">
              <span className="text-neutral-800 dark:text-neutral-200">
                Email address
              </span>
              <Input
                type="email"
                placeholder="example@example.com"
                className="mt-1"
                displayName="signin input1"
                required
              />
            </label>
            <label className="block">
              <span className="flex justify-between items-center text-neutral-800 dark:text-neutral-200">
                Password
                <Link href="/forgot-pass" className="text-sm text-green-600">
                  Forgot password?
                </Link>
              </span>
              <Input type="password" displayName="signin input2" className="mt-1" required />
            </label>
            <p className="text-red-600 text-[16px] mb-4">{error && error}</p>
            <ButtonPrimary type="submit">Continue</ButtonPrimary>
          </form>

          {/* ==== */}
          <span className="block text-center text-neutral-700 dark:text-neutral-300">
            New user? {` `}
            <Link className="text-green-600" href="/signup">
              Create an account
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
