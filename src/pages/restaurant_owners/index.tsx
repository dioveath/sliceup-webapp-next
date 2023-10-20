import Navbar from "@/components/navbar";
import React, { useRef } from "react";
import { Gabarito } from "next/font/google";

const gabarito = Gabarito({ subsets: ["latin"] });

export default function RestaurantOwners() {
  const emailRef = useRef<HTMLInputElement>(null);

  return (
    <main className={`w-full min-h-screen bg-gray-50 ` + gabarito.className}>
      <div id="w-full h-full bg-blue-500 relative">
        <div className="absolute w-full h-full bg-black bg-opacity-60"></div>

        <video playsInline autoPlay muted loop poster="" id="bgvideo" className="w-full h-screen object-cover">
          <source src="videos/hero.mp4" type="video/mp4" />
        </video>

        <div className="absolute w-full top-0 z-30">
          <Navbar path="/restaurant_owners" />
        </div>

        <div className="absolute top-0 w-full h-full flex flex-col gap-4 items-center justify-center px-4 lg:px-40 z-20">
          <h1 className="text-4xl text-center font-bold text-white uppercase"> The System for Growing Customer Value </h1>
          <p className="text-base font-semibold text-white text-center"> Slice digitizes your business to give you larger orders, more reorders, and better reviews. </p>
          <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-y-2 lg:gap-x-2 items-center justify-center">
            <input type="text" placeholder="Email" className="w-full col-span-2 text-black p-4 border-2 border-gray-600 rounded-md" ref={emailRef} />
            <button className="w-full col-span-1 font-bold bg-monza-600 text-white rounded-md px-4 py-4"> SCHEDULE DEMO </button>
          </div>

          <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-4 items-start justify-start">
            <p className="col-span-1 text-base font-semibold text-white text-center"> 🟢 No Gotchas Contracts </p>
            <p className="col-span-1 text-base font-semibold text-white text-center"> 🟢 24/7 Human Support </p>
            <p className="col-span-1 text-base font-semibold text-white text-center"> 🟢 Anytime Data Access </p>
          </div>
        </div>
        
      </div>

      <div className="flex justify-center items-center py-40">
        <h1 className="text-4xl text-center font-bold text-black uppercase"> Our system is built around your customers. </h1>
      </div>

      <div className="w-full grid grid-cols-1 lg:grid-cols-2 justify-between items-center py-20 px-2 lg:px-40">
        <div className="w-full bg-green-500 col-span-1">
            PHOTO
        </div>
        <div className="w-full col-span-1">
          <h1 className="text-xl text-center font-bold text-black uppercase"> Digitize ordering everywhere. </h1>
          <p className="text-black">
            Whether customers order on your website, with the app, or in-store, Slice digitizes your business to give you larger orders, more reorders, and better reviews.{" "}
          </p>
          <button className="font-bold bg-monza-600 text-white rounded-md px-4 py-4 w-full uppercase"> Schedule a demo </button>
        </div>
      </div>

      <footer className="w-full bg-gray-50 py-10 px-10 lg:py-20 lg:px-60">
        <div>
          {/* logo */}
          <div className="flex flex-col gap-2 items-center justify-center py-4">
            <img src="https://sliceup.pizza/assets/media/uploads/logo%203.png" className="h-8 mr-3" alt="Sliceup Logo" />
          </div>
          {/* socials */}
          <div className="flex gap-2 items-center justify-center font-bold">
            <a href="#" className="text-black">
              {" "}
              Facebook{" "}
            </a>
            <a href="#" className="text-black">
              {" "}
              Instagram{" "}
            </a>
            <a href="#" className="text-black">
              {" "}
              Twitter{" "}
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2 items-center justify-center py-4 px-0 lg:px-40">
          <p className="text-black text-center">
            We believe local pizzerias deserve all the advantages of big chains without compromising their independence. That’s what fuels our mission to keep local thriving. Through
            specialized tech, data insights, targeted marketing, and collective buying power, we empower pizzerias to increase the value of their customers and build thriving local businesses.
          </p>
          <p className="text-black text-center"> We&apos;re helping local thrive in a digital world. </p>
        </div>

        <div className="flex flex-col gap-2 items-center justify-center py-4 text-black">
            <p className="font-bold text-base"> Already a partner? Here&apos;s a link to your <a href="owner_login" className="text-monza-600"> Owner Portal </a> </p>
            <p className="font-bold text-base"> Want to join the Slice family? <a href="https://slicelife.com/partner" className="text-monza-600"> Sign up here </a> </p>
        </div>

        <div className="w-full h-[1.5px] bg-black"></div>
        
        <div className="flex flex-col gap-2 items-center justify-center py-4">
          <p className="text-black"> © 2021 Slice. All rights reserved. </p>
          <p className="text-black"> Terms of Service </p>
          <p className="text-black"> Privacy Policy </p>
        </div>
      </footer>
    </main>
  );
}
