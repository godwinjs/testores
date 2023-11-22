'use client'
// import { RootState } from "../redux/store";
// import { useSelector, useDispatch } from "react-redux";
// import { increment, decrement, increamentByAmount } from "../redux/features/counter/counterSlice";
import { useSession } from "next-auth/react"
import { redirect } from "next/navigation";

import AccountPage from "@/app/assets/containers/AccountPage/AccountPage";

export default function Account() {
    // const count = useSelector((state: RootState) => state.counter.value);
    // const dispatch = useDispatch();
  const { data: session } = useSession()

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