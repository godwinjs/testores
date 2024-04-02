"use client"

import { useSession } from "next-auth/react"
import { redirect } from "next/navigation";

import CheckoutPage from "@/app/assets/containers/PageCheckout/CheckoutPage";

export default function Checkout(){
    const { data: session } = useSession();


    if(!session){
        redirect('/login')
    }
    if(session === null){
        return;
    }
    return <CheckoutPage user={session?.user} />
}