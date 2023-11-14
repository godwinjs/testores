'use client'
import { RootState } from "../redux/store";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, increamentByAmount } from "../redux/features/counter/counterSlice";

export default function Single_blog() {
    const count = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch();

    return(
        <div>
            <h1 className="text-center"> Single Blog Page</h1>
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
