'use client'
import { RootState } from "@/app/redux/store";
import { useSelector, useDispatch } from "react-redux";

import PageCollection2 from "@/app/assets/containers/PageCollection2";
import { increment, decrement, increamentByAmount } from "@/app/redux/features/counter/counterSlice";

export default function Search_page() {
    const count = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch();

    return(
        <div>
            <PageCollection2 />
          <div className="text-center mt-4">Count: {count}</div>

          <div className="flex flex-row justify-around my-3">
            <button
                className="py-2 px-4 bg-slate-400"
                onClick={() => dispatch(increment())}
            >
                Increase by one
            </button>
            <button
                className="py-2 px-4  bg-slate-400"
                onClick={() => dispatch(decrement())}
            >
                Decrease by one
            </button>
            <button
                className="py-2 px-4  bg-slate-400"
                onClick={() => dispatch(increamentByAmount(2))}
            >
                Increase by 2
            </button>
          </div>

        </div>
    )
}
