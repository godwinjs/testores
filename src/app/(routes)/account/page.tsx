'use client'

import { useDispatch, useSelector } from "react-redux";
import { useSession } from "next-auth/react" 
import { redirect } from "next/navigation";
import axios from "axios";

import { logout, setCredentials } from "@/app/redux/features/auth/authSlice";
import { RootState } from "@/app/redux/store";

import AccountPage from "@/app/assets/containers/AccountPage/AccountPage";
import { useEffect } from "react";

export default function Account() {
    const { data: session } = useSession();
    const dispatch = useDispatch();
    const user = useSelector((state: RootState) => state.auth.user )
    const loggedOut = useSelector((state: RootState) => state.auth.loggedOut )
    
    useEffect( () => {
        if(!user && (!loggedOut || session?.user) ) axios.post('/api/login/getUser', { email: session?.user.email}).then((res) => {
            const userData = res.data.data;
            dispatch(setCredentials({...userData, image: session?.user.image}));
        })
    }, [session?.user, user, dispatch, loggedOut]) //added loggedOut


    if(!session){
        !loggedOut && dispatch(logout())
        redirect('/login')
    }
    if(session === null){
        return;
    }

    return user ? <AccountPage user={user} /> : "Error loading user"
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