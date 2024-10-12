"use client"
import React, { FC } from "react";

import SetPageTitle from "@/app/assets/hooks/SetPageTitle";
// import SectionHero from "@/app/assets/components/SectionHero/SectionHero";

export interface PageXboxProps {
  className?: string;
}

const PageXbox: FC<PageXboxProps> = ({ className = "" }) => {
  SetPageTitle({title: "Xbox explore || Truthstores"})

  return (
        <div>
            
            {/* <SectionHero
                data={[
                    {
                        image: "https://assets.xboxservices.com/assets/6c/bf/6cbf1bd9-659e-4c42-9f01-023374da4155.jpg?n=0399591213_Page-Hero-1084_1920x720_02.jpg",
                        heading: `Call of Duty®: Black Ops 6`,
                        subHeading: "Forced to go rogue. Hunted from within. This is Black Ops 6.",
                        btnText: "PRE-ORDER NOW",
                        btnLink: "https://www.xbox.com/games/call-of-duty-black-ops-6",
                    },
                    {
                        image: "https://assets.xboxservices.com/assets/0f/18/0f18899d-4dae-4519-9160-672c758723ce.jpg?n=564231_Page-Hero-1084_Pre-Order_1920x720.jpg",
                        heading: "Microsoft Flight Simulator 2024",
                        subHeading: "Pre-order to join the aviation adventure",
                        btnText: "PRE-ORDER NOW",
                        btnLink: "https://www.xbox.com/en-US/games/microsoft-flight-simulator-2024",
                    }
                ]}
            /> */}
             <div className="flex flex-row gap-1 p-2">
                {/* Left Section */}
                <div className="basis-1/2 flex-col">
                    {/* single imgage and text content */}
                    <div className="relative group overflow-hidden mb-1">
                        <img
                            src="https://cms-assets.xboxservices.com/assets/ce/6e/ce6e47a5-7afa-4cd6-8a79-c431677cd0ec.jpg?n=253691_Large-tout-0_1083x1222_02.jpg"
                            alt="fc25"
                            className="h-[90vh] object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                        />
                        <div className="absolute bottom-0 left-0 p-6 bg-black bg-opacity-50 w-full">
                        <h4 className="inline-block mb-4 px-4 py-2 bg-yellow-500 text-black font-bold hover:bg-yellow-600 transition-colors duration-300 ease-in-out">
                            XBOX SERIES X|S · XBOX ONE
                        </h4>
                        <h2 className="text-3xl text-white font-bold mb-4 transition-transform transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 duration-500 ease-in-out">
                            EA SPORTS FC™ 25
                        </h2>
                        <p className="text-white mb-6 transition-opacity opacity-0 group-hover:opacity-100 duration-500 ease-in-out">
                            Play up to 10 hours via EA Play, included with Game Pass Ultimate
                        </p>
                        <button className="px-4 py-2 bg-yellow-500 text-black font-bold hover:bg-yellow-600 transition-colors duration-300 ease-in-out">
                            GET IT NOW
                        </button>
                        </div>
                    </div>
                    {/*split image and content  */}
                    <div className="flex flex-row mb-1">
                        <div className="basis-1/2 bg-green-500 p-6 text-white relative group flex flex-col justify-center items-center text-center min-h-[300px]">
                            <h2 className="text-3xl font-bold mb-4 transition-opacity opacity-100 duration-500 ease-in-out">
                                Frostpunk 2
                            </h2>
                            <p className="mb-4 transition-opacity opacity-100  duration-500 ease-in-out">
                                Face the perils of never-ending winter and the political unease.
                            </p>
                            <button className="mb-2 px-4 py-2 bg-black text-white opacity-0 group-hover:opacity-100 font-bold hover:bg-gray-800 transition-colors duration-300 ease-in-out">
                                GET IT NOW
                            </button>
                        </div>

                        <div className="basis-1/2 relative group overflow-hidden">
                            <img
                                src="https://assets.xboxservices.com/assets/0d/35/0d35289b-b4f7-4efd-9faa-435c4b3dc700.jpg?n=Frostpunk2_Large-tout-0_1083x1222.jpg"
                                alt="Game Pass"
                                className="w-full h-[45vh] object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                                <h2 className="text-white text-3xl font-bold">GAME PASS</h2>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Section */}
                <div className="basis-1/2">
                    {/*split image and content  */}
                    <div className="flex flex-row mb-1">
                        <div className="basis-1/2 bg-green-500 p-6 text-white relative group flex flex-col justify-center items-center text-center min-h-[300px]">
                            <h2 className="text-3xl font-bold mb-4 transition-opacity opacity-100 duration-500 ease-in-out">
                                Discover your next favorite game
                            </h2>
                            <p className="mb-4 transition-opacity opacity-100  duration-500 ease-in-out">
                                Enjoy hundreds of high-quality games, plus online console multiplayer and EA Play, all for one low monthly price.
                            </p>
                            <button className="mb-2 px-4 py-2 bg-black text-white opacity-0 group-hover:opacity-100 font-bold hover:bg-gray-800 transition-colors duration-300 ease-in-out">
                                JOIN NOW
                            </button>
                        </div>

                        <div className="basis-1/2 relative group overflow-hidden">
                            <img
                                src="https://cms-assets.xboxservices.com/assets/97/f9/97f92422-0681-460d-8efb-dde5891bc9af.jpg?n=XGP-2024_Small-tout-1084_09-24-24_475x534.jpg"
                                alt="Game Pass"
                                className="w-full h-[45vh] object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                                <h2 className="text-white text-3xl font-bold">GAME PASS</h2>
                            </div>
                        </div>
                    </div>
                    {/* single imgage and text content */}
                    <div className="relative group overflow-hidden mb-1">
                        <img
                            src="https://assets.xboxservices.com/assets/9a/07/9a076a61-4d27-43de-9bbd-91eeef605157.jpg?n=Accessories-Elevate-Your-Game_Large-tout-0_1083x1222.jpg"
                            alt="xbox pads"
                            className="h-[90vh] object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                        />
                        <div className="absolute bottom-0 left-0 p-6 bg-black bg-opacity-50 w-full">
                        <h2 className="text-3xl text-white font-bold mb-4 transition-transform transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 duration-500 ease-in-out">
                            Xbox Design Lab
                        </h2>
                        <p className="text-white mb-6 transition-opacity opacity-0 group-hover:opacity-100 duration-500 ease-in-out">
                            Customize the Xbox Elite Wireless Controller Series 2 with Xbox Design Lab and reveal the mystery inside with the transparent top cases of the Cipher series.
                        </p>
                        <button className=" px-4 py-2 bg-yellow-500 text-black font-bold hover:bg-yellow-600 transition-colors duration-300 ease-in-out">
                            DESIGN YOURS 
                        </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default PageXbox;
