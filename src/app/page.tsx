'use client';

// import Image from 'next/image'

import PageHome from '@/app/assets/containers/PageHome/PageHome'

export default function Home() {

  return (
    <main>
      <div className="bg-white text-base dark:bg-slate-900 text-slate-900 dark:text-slate-200">
        <PageHome /> 
      </div>
    </main>
  )
}
