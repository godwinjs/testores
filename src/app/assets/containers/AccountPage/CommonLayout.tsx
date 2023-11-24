import React from "react";
import { FC } from "react";
import { signOut, useSession } from "next-auth/react"

import { NavLink } from "@/app/assets/components/NavLink";

export interface CommonLayoutProps {
  children?: React.ReactNode;
}

const CommonLayout: FC<CommonLayoutProps> = ({ children }) => {
  const { data: session }: any = useSession();

  return (
    <div className="nc-CommonLayoutProps container">
      <div className="mt-14 sm:mt-20">
        <div className="max-w-4xl mx-auto">
          <div className="max-w-2xl">
            <h2 className="text-3xl xl:text-4xl font-semibold">Account</h2>
            <span className="block mt-4 text-neutral-500 dark:text-neutral-400 text-base sm:text-lg">
              <span className="text-slate-900 dark:text-slate-200 font-semibold">
              {session? session.user.fullName : "user's not logged in properly"}
              </span>{" "}
                {session? session.user.email : "user's not logged in properly"} · Los Angeles, CA
            </span>
          </div>
          <hr className="mt-10 border-slate-200 dark:border-slate-700"></hr>

          <div className="flex space-x-8 md:space-x-14 overflow-x-auto hiddenScrollbar">
            {[
              {
                name: "Account info",
                link: "/account",
              },
              {
                name: "Save lists",
                link: "/account/savelists",
              },
              {
                name: " My order",
                link: "/account/my-order",
              },
              {
                name: "Change password",
                link: "/account/change-password",
              },
              {
                name: "Change Billing",
                link: "/account/billing",
              },
            ].map((item, index) => (
              <NavLink
                exact
                key={index}
                activeclassname="!border-primary-500 font-medium !text-slate-900 dark:!text-slate-200 "
                href={item.link}
                className="block py-5 md:py-8 border-b-2 border-transparent flex-shrink-0 text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 text-sm sm:text-base"
              >
                {item.name}
              </NavLink>
            ))}
          </div>
          <hr className="border-slate-200 dark:border-slate-700"></hr>
        </div>
      </div>
      <div className="max-w-4xl mx-auto pt-14 sm:pt-26 pb-24 lg:pb-32">
        {children}
      </div>
    </div>
  );
};

export default CommonLayout;
