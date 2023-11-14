import type { Metadata } from 'next'
// import localFont from 'next/font/local'
import { Poppins } from 'next/font/google';
import localFont from "next/font/local";

import './globals.css'
import './line-awesome.css'
import "rc-slider/assets/index.css";

import Providers from "@/app/redux/provider";
// import fontPath from "@/app/fonts"

const poppins = Poppins({
  weight: ['300','400','500','600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
})
const myFonts = localFont({
  src: [
    {
    path: './fonts/la-brands-400.ttf',
    weight: '400',
    style: 'brands'
  },
  {
    path: './fonts/la-brands-400.woff',
    weight: '400',
    style: 'brands'
  },
  {
    path: './fonts/la-brands-400.woff2',
    weight: '400',
    style: 'brands'
  },
  {
  path: './fonts/la-regular-400.ttf',
  weight: '400',
  style: 'regular'
  },
  {
    path: './fonts/la-regular-400.woff',
    weight: '400',
    style: 'regular'
  },
  {
    path: './fonts/la-regular-400.woff2',
    weight: '400',
    style: 'regular'
  },
  {
  path: './fonts/la-solid-900.ttf',
  weight: '900',
  style: 'solid'
  },
  {
  path: './fonts/la-solid-900.woff',
  weight: '900',
  style: 'solid'
  },
  {
  path: './fonts/la-solid-900.woff2',
  weight: '900',
  style: 'solid'
  },
],
variable: '--font-la'
})

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
    <html lang="en" className={poppins.className}>
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
