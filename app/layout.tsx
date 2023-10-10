import Header from "@/components/header";
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Alimurat | Personal Website',
  description: 'Alimurat is a Concordia University student that completes Software Engineering Degree',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className = "!scroll-smooth">
      <body className={'${inter.className} bg-gray-50 text-gray-950 realtive h-[1000px] pt-28 sm:pt-36'}>
        <div className = "bg-[#fbe2e3] absolute top-[-6rem] right-[11rem] h-[31.25rem] w-[31.25rem] -z-10 rounded-full blur-[10rem] sm:w-[68.75rem]"></div>
        <div className = "bg-[#dbd7fb] absolute top-[-1rem] left-[-35rem] h-[31.25rem] w-[50rem] -z-10 rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2x1:left-[-5rem]"></div>
       <Header/>
        {children}
      </body>
    </html>
  )
}
