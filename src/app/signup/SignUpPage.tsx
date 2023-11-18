'use client'
import React, { FC } from "react";
import { Helmet } from "react-helmet";
import Link from "next/link";
import Image from 'next/image';

import facebookSvg from "@/images/socials/_Facebook.svg";
import twitterSvg from "@/images/socials/_Twitter.svg";
import googleSvg from "@/images/socials/_Google.svg";
import Input from "@/app/assets/shared/Input/Input";
import ButtonPrimary from "@/app/assets/shared/Button/ButtonPrimary";

export interface PageSignUpProps {
  className?: string;
}

const loginSocials = [
  {
    name: "Continue with Facebook",
    href: "#",
    icon: facebookSvg,
  },
  {
    name: "Continue with Twitter",
    href: "#",
    icon: twitterSvg,
  },
  {
    name: "Continue with Google",
    href: "#",
    icon: googleSvg,
  },
];

const SignUpPage: FC<PageSignUpProps> = ({ className = "" }) => {
  return (
    <div className={`nc-PageSignUp  ${className}`} data-nc-id="PageSignUp">
      <Helmet>
        <title>Sign up || TruthStore Commerce</title>
      </Helmet>
      <div className="container mb-24 lg:mb-32">
        <h2 className="my-20 flex items-center text-3xl leading-[115%] md:text-5xl md:leading-[115%] font-semibold text-neutral-900 dark:text-neutral-100 justify-center">
          Sign Up
        </h2>
        <div className="max-w-md mx-auto space-y-6 ">
          <div className="grid gap-3">
            {loginSocials.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className=" flex w-full rounded-lg bg-primary-50 dark:bg-neutral-800 px-4 py-3 transform transition-transform sm:px-6 hover:translate-y-[-2px]"
              >
                <Image
                  className="flex-shrink-0 min-w-0 min-h-0 max-w-[100%] h-[auto]"
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
          <form className="grid grid-cols-1 gap-6" action="#" method="post">
          <label className="block">
              <span className="text-neutral-800 dark:text-neutral-200">
                Full Name
              </span>
              <Input
                type="text"
                placeholder="Enter your full name..."
                className="mt-1"
                displayName="signup2 input"
              />
            </label>
            <label className="block">
              <span className="text-neutral-800 dark:text-neutral-200">
                Email address
              </span>
              <Input
                type="email"
                placeholder="example@example.com"
                className="mt-1"
                displayName="signup input"
              />
            </label>
            <label className="block">
              <span className="flex justify-between items-center text-neutral-800 dark:text-neutral-200">
                Password
              </span>
              <Input 
                displayName="signup input2"
                type="password" 
                className="mt-1" />
            </label>
            <ButtonPrimary type="submit">Continue</ButtonPrimary>
          </form>

          {/* ==== */}
          <span className="block text-center text-neutral-700 dark:text-neutral-300">
            Already have an account? {` `}
            <Link className="text-green-600" href="/login">
              Log In
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
