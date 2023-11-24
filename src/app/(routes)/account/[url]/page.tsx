"use client";
import { useSession } from "next-auth/react"
import { redirect } from "next/navigation";


import Billing from "@/app/assets/containers/AccountPage/AccountBilling";
import SaveLists from "@/app/assets/containers/AccountPage/AccountSavelists";
import MyOrder from "@/app/assets/containers/AccountPage/AccountOrder";
import ChangePassword from "@/app/assets/containers/AccountPage/AccountPass";
import AccountPage from "@/app/assets/containers/AccountPage/AccountPage";


export default function AccountPages({params}: { params: {url: string} }) {
    const { data: session } = useSession()

    if(!session){
        redirect('/login')
    }

    switch (params.url) {
        case "savelists":
            return <SaveLists />
            break;
        case "my-order":
            return <MyOrder />
            break;
        case "change-password":
            return <ChangePassword />
            break;
        case "billing":
            return <Billing />
            break;
        default:
            redirect("/not-found")
            break;
    }
    
}

// 'use client'
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