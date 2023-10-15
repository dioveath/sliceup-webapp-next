import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/navbar'
import Hero from '@/sections/hero'
import AppCTA from '@/sections/home/app_cta'
import Footer from '@/sections/footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={`flex w-full min-h-screen flex-col items-center bg-gray-50 ` + inter.className}>
      <Navbar path="/" />
      <Hero />
      <AppCTA />
      <Footer />
    </main>    
  )
}
