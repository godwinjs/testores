"use client"
import Lottie, { LottieProps } from "react-lottie-player"

import animationData from "@/lottie/dualCircleLoader.json"
import { NumberExpression } from "mongoose";

export default function DualCircleLoader({height, size}: {height: number, size: number}) {
    
    const defaultOptions: LottieProps = {
        loop: true,
        play: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    const my = (height/2) - size;

    return<Lottie 
        style={{ width: size, height: size, margin: (height === 100) ? `${100/2 - (size/16)}% auto` :`${my}px auto` }} 
        { ...defaultOptions } />
}