"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSession } from "next-auth/react"
import { redirect } from "next/navigation";

import { logout } from "@/app/redux/features/auth/authSlice";
import { RootState } from "@/app/redux/store";

import Billing from "@/app/assets/containers/AccountPage/AccountBilling";
import SaveLists from "@/app/assets/containers/AccountPage/AccountSavelists";
import MyOrder from "@/app/assets/containers/AccountPage/AccountOrder";
import ChangePassword from "@/app/assets/containers/AccountPage/AccountPass";
import AccountPage from "@/app/assets/containers/AccountPage/AccountPage";


export default function AccountPages({params}: { params: {url: string} }) {
    const { data: session } = useSession()
    const dispatch = useDispatch();
    const user = useSelector((state: RootState) => state.auth.user )
    const loggedOut = useSelector((state: RootState) => state.auth.loggedOut )

    useEffect( () => {
    }, [user])

    if(!session){
        !loggedOut && dispatch(logout())
        redirect('/login')
    }

    switch (params.url) {
        case "savelists":
            return user ? <SaveLists user={user}/> : "Error Loading user data"
        case "my-order":
            return user ? <MyOrder user={user}/> : "Error Loading user data"
        case "change-password":
            return user ? <ChangePassword user={user}/> : "Error Loading user data"
        case "billing":
            return user ? <Billing user={user}/> : "Error Loading user data"
        default:
            redirect("/not-found")
            break;
    }
    
}


// import { RootState } from "../redux/store";
// import { useSelector, useDispatch } from "react-redux";
// import { increment, decrement, increamentByAmount } from "../redux/features/counter/counterSlice";
// import { useSession } from "next-auth/react"
// import { redirect } from "next/navigation";

// import AccountPage from "@/app/assets/containers/AccountPage/AccountPage";

// export default function Account() {
    // const count = useSelector((state: RootState) => state.counter.value);
    // const dispatch = useDispatch();
//   const { data: session } = useSession()

//     if(!session){
//         redirect('/login')
//     }

//     return <AccountPage />
// }
// import { getServerSession } from "next-auth/next"
// import { authOptions } from "@/app/api/auth/[...nextauth]"

// export default async (req: any, res: any ) => {
//     const session = await getServerSession(authOptions)

//     if(session){
//         res.send(
//             content: "this is a protected content. You can access i because you are signed in"
//         )
//     }else{
//         res.send(
//             content: "you must be logged in to view this content"
//         )
//     }
// }
