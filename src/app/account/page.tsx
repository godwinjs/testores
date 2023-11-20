'use client'
// import { RootState } from "../redux/store";
// import { useSelector, useDispatch } from "react-redux";
// import { increment, decrement, increamentByAmount } from "../redux/features/counter/counterSlice";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import AccountPage from "@/app/assets/containers/AccountPage/AccountPage";

export default function Account() {
    // const count = useSelector((state: RootState) => state.counter.value);
    // const dispatch = useDispatch();
    const session = getServerSession();

    if(!session){
        redirect('/login')
    }

    return <AccountPage />
}
