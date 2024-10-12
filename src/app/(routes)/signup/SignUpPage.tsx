'use client'
import React, { FC, useState } from "react";
import { Helmet } from "react-helmet";
import Link from "next/link";
import Image from 'next/image';
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import axios from "axios"; 
import { CheckCircleIcon } from "@heroicons/react/24/solid"

import { useSignupMutation } from "@/app/redux/features/auth/authApi";

// import facebookSvg from "@/images/socials/_Facebook.svg";
// import twitterSvg from "@/images/socials/_Twitter.svg";
import { errNotify } from "@/app/assets/utils/functionsUI";
import googleSvg from "@/images/socials/_Google.svg";
import Input from "@/app/assets/shared/Input/Input";
import ButtonPrimary from "@/app/assets/shared/Button/ButtonPrimary";

export interface PageSignUpProps {
  className?: string;
}

const loginSocials = [
  {
    name: "Continue with Google",
    href: "#",
    icon: googleSvg,
    provider: 'google'
  },
];

const SignUpPage: FC<PageSignUpProps> = ({ className = "" }) => {
  // server side credentials
  const [signup, { isLoading: registering, isSuccess: registered }] =
  useSignupMutation();
  const [ emailSent, setEmailSent ] = React.useState(false)

  const [ error, setError ] = useState("");
  const router = useRouter();

  const isValidEmail = (email: string) => {

    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0+9]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault();
  
    const fullName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
  
    if(!isValidEmail(email)){
      errNotify(["Signup input error", "Email is invalid", "warning"])
      return;
    }
    if(!password || password.length < 8){
      errNotify(["Signup input error", "Password should be equal to or longer than 8 characters", "warning"])
      return;
    }
  
    try {
      // const res = await fetch("/api/register", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
  
      //   },
      //   body: JSON.stringify({
      //     fullName: fullName,
      //     email: email,
      //     password: password
      //   })
      // })

      let {data: data}: any = await signup({
        name: fullName,
        email: email,
        password: password,
        confirmPassword: password,
        phone: "+234xxxxxxxxx",
        authProvider: 'local'
      })

      if(!data?.acknowledgement) {
        let errMsg: any = data.description.split(":");
        errMsg = [ errMsg[0], errMsg[errMsg.length - 1]]
        errNotify(["Signup "+ errMsg[0], errMsg[1], "error"])
      }else {
        if(data.data.message === "Exists"){
          errNotify([data.data.message, data.data.description , "warning"])
        }else{
          errNotify(["User created ", "Successful user signup" , "success"])
          // console.log(registered)
          await axios.post("/api/mail", { 
            from: data.data.name,
            to: data.data.email,
            subject: `Truthstore verification link`,
            text: 'Click this link to verify your email:',
            link: `${process.env.NEXT_PUBLIC_BASE_URL}/verify_email?token=${data.data.verificationToken}`
          }).then((response) => {
              setEmailSent(true)
          }).catch(err => {
            console.log("there was an error sending verification email" + err)
          })

        }
      }
  
      // if(res.status === 400){
      //   setError("This email is already registered.")
      // }
      // if(res.status === 200){
      //   // route to confirm email then login. for now its login
      //   setError("")
      //   router.push("/login");
      // }
    } catch (err){
      console.log(err)
    } 
  }
  const renderContent = () => {

    if(emailSent){
      return (
        
        <div className="bg-transparent flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-md max-w-lg text-center">
          <div className="flex justify-center mb-4">
            <CheckCircleIcon className="h-16 w-16 text-green-500" />
          </div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Verification Link Sent!</h1>
          <p className="text-gray-600 mb-6">
            Thank you for creating an account. Please check your mail box for verification link to proceed.
          </p>
        </div>
      </div>
      )
      
    }else {
      return (
        <div className="max-w-md mx-auto space-y-6 ">
          <div className="grid gap-3">
            {loginSocials.map((item, index) => (
              <a
                key={index}
                onClick={async () => {
                  const res = await signIn(`${item.provider}`,{
                  redirect: false
                  })
                  if(res?.error){
                    setError("Couldn't login user");
                    if(res?.url){
                      router.replace('/account')
                      // instead goto /reg route that contains other client info.
                    } 
                }
                }}
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
          <form className="grid grid-cols-1 gap-6" onSubmit={handleSubmit}>
          <label className="block">
              <span className="text-neutral-800 dark:text-neutral-200">
                Full Name
              </span>
              <Input
                type="text"
                placeholder="Enter your full name..."
                className="mt-1"
                displayName="signup2 input"
                required
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
                required
              />
            </label>
            <label className="block">
              <span className="flex justify-between items-center text-neutral-800 dark:text-neutral-200">
                Password
              </span>
              <Input 
                displayName="signup input2"
                type="password" 
                className="mt-1"
                required
                 />
            </label>
            <p className="text-red-600 text-[16px] mb-4">{error && error}</p>
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
      )
    }
  }

  React.useEffect(() => {
  }, [])

  return (
    <div className={`nc-PageSignUp  ${className}`} data-nc-id="PageSignUp">
      <Helmet>
        <title>Sign up || TruthStore Commerce</title>
      </Helmet>
      <div className="container mb-24 lg:mb-32">
        <h2 className="my-20 flex items-center text-3xl leading-[115%] md:text-5xl md:leading-[115%] font-semibold text-neutral-900 dark:text-neutral-100 justify-center">
          Sign Up
        </h2>

        {renderContent()}
      </div>
    </div>
  );
};

export default SignUpPage;
