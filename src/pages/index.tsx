import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/navbar'
import Hero from '@/sections/hero'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={`flex w-full min-h-screen flex-col items-center bg-monza-100 ` + inter.className}>
      <Navbar path="/" />
      <Hero />
      
    </main>    
  )
}
