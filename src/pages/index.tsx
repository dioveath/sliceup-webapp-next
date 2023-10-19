import Image from 'next/image'
import Link from 'next/link'
import { Gabarito } from 'next/font/google'
import Navbar from '@/components/navbar'
import Hero from '@/sections/hero'
import AppCTA from '@/sections/home/app_cta'
import Footer from '@/sections/footer'

const gabarito = Gabarito({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={`flex w-full min-h-screen flex-col items-center bg-gray-50 ` + gabarito.className}>
      <Navbar path="/" />
      <Hero />
      <AppCTA />

      <div className="w-full flex flex-col items-center justify-center py-20 gap-2">
        <h1 className="text-4xl text-center font-bold text-black uppercase"> See all the restaurants in your area. </h1>
        <p className="text-black"> Find your favorite pizza, wings, and more. </p>
        <Link href="/restaurants" className="font-bold bg-monza-600 text-white rounded-md px-10 py-3 uppercase items-center"> See Restaurants </Link>
      </div>

      

      <Footer />
    </main>    
  )
}
