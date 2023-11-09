import type { Metadata } from 'next'
// import localFont from 'next/font/local'
// import { Inter } from 'next/font/google'

import './globals.css'
import './line-awesome.css'
import "rc-slider/assets/index.css";

import Providers from "@/app/redux/provider";

// const inter = Inter({ subsets: ['latin'] })
// const myFont = localFont({
//   src: [{
//     path: '',
//     weight: '400',
//     style: 'normal',
//   },{
//     path: '',
//     weight: '400',
//     style: 'normal'}]
// })

export const metadata: Metadata = {
  title: 'TruthStore Commerce',
  description: 'TruthStore WebApp by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
