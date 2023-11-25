'use client'

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSession } from "next-auth/react"
import { redirect } from "next/navigation";

import { setCredentials } from "@/app/redux/features/auth/authSlice";
import { RootState } from "@/app/redux/store";

import AccountPage from "@/app/assets/containers/AccountPage/AccountPage";

export default function Account() {
    const dispatch = useDispatch();
    const { data: session } = useSession();
    const user = useSelector((state: RootState) => state.auth.userInfo )

    useEffect(() => {
        if(session && ( user === null)){
        // redux
            dispatch(setCredentials(session.user))
        }
    }, [session, dispatch])

    if(!session){
        redirect('/login')
    }

    return <AccountPage />
}
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