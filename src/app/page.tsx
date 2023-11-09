'use client';

import { RootState } from './redux/store';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, increamentByAmount } from './redux/features/counter/counterSlice';

// import Image from 'next/image'

import PageHome from '@/app/containers/PageHome/PageHome'

export default function Home() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch()

  return (
    <>
      <div className="bg-white text-base dark:bg-slate-900 text-slate-900 dark:text-slate-200">
        <PageHome /> 
        <div>
          <span>Count: {count}</span>
          <button
            onClick={() => dispatch(increment())}
          >
            Increase by one
          </button>
          <button
            onClick={() => dispatch(decrement())}
          >
            Decrease by one
          </button>
          <button
            onClick={() => dispatch(increamentByAmount(2))}
          >
            Increase by 2
          </button>
        </div>
      </div>
    </>
  )
}
