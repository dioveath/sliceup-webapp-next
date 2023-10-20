import { useEffect, useRef, useState } from "react";
import { Gabarito } from "next/font/google";
import Navbar from "@/components/navbar";
import Hero from "@/sections/hero";
import Footer from "@/sections/footer";

const gabarito = Gabarito({ subsets: ["latin"] });

export default function AboutPage() {
  const mainSectionRef = useRef<HTMLDivElement>(null);

  const [mainSectionHeight, setMainSectionHeight] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    if (!mainSectionRef.current) return;
    if (!window) return;

    setWindowHeight(window.innerHeight);

    const resizeObserver = new ResizeObserver((entries) => {
      if (!mainSectionRef.current) return;

      const mainSectionStyle = window.getComputedStyle(mainSectionRef.current as Element);
      const marginTop = parseInt(mainSectionStyle.marginTop) || 0;
      const marginBottom = parseInt(mainSectionStyle.marginBottom) || 0;
      const mainSectionHeightOnScreen = mainSectionRef?.current.clientHeight + marginTop + marginBottom;
      setMainSectionHeight(mainSectionHeightOnScreen);
    });

    resizeObserver.observe(mainSectionRef.current);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <main className={`w-full min-h-screen bg-gray-50 ` + gabarito.className}>
      <div id="w-full h-full relative">
        <div className="relative top-0 w-full h-full flex items-center justify-center" style={{ height: Math.max(windowHeight, mainSectionHeight) }}>
          <video playsInline autoPlay muted loop poster="" id="bgvideo" className="absolute top-0 w-full h-screen object-cover">
            <source src="videos/abstract_bg.mp4" type="video/mp4" />
          </video>
          <div className="absolute top-0 w-full h-screen bg-black opacity-70"></div>
        </div>

        <div className="absolute top-0 w-full z-10 bg-transparent">
          <Navbar path="/about" />
        </div>

        <div className="absolute top-0 w-full flex flex-col gap-4 px-4 lg:px-40 z-20 mt-40" ref={mainSectionRef}>
          <h1 className="text-4xl lg:text-[100px] lg:leading-[6rem] text-center font-bold text-white uppercase">
            <span className="underline decoration-monza-600"> FOR THE LOVE </span> OF INDEPENDENTS
          </h1>
          <p className="text-base font-semibold text-white text-center"> Slice digitizes your business to give you larger orders, more reorders, and better reviews. </p>

          <video playsInline autoPlay muted loop poster="" id="bgvideo" className="w-full h-[350px] lg:h-[500px] object-cover rounded-md">
            <source src="videos/hero.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

      <div className="w-full bg-white py-10 grid grid-cols-1 gap-4">
        <h3 className="text-lg lg:text-2xl text-center font-bold text-black px-8 lg:px-40 col-span-1">
          Our mission is to keep local thriving. By empowering local pizzerias with the tools and resources needed to compete with big chains, we&apos;re helping them drive more revenue and
          take back their industry, all while fostering a more vibrant, authentic culture in every community we serve.
        </h3>
        <div className="w-full flex flex-col lg:flex-row gap-4 px-4 lg:px-40 justify-center">
          <button className="w-full lg:w-1/2 h-[50px] lg:h-[70px] bg-monza-600 text-white font-bold text-lg lg:text-2xl uppercase rounded-sm">
            <span className="underline decoration-white"> Join Slice </span>
          </button>
        </div>
      </div>

      <Footer className={`w-full bg-gray-50 ` + gabarito.className} />
    </main>
  );
}
