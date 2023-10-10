"use client";

import { useState, useEffect } from "react";

export type Slide = {
  title: string;
  subtitle: string;
  image: string;
};

type CarouselProps = {
  slides: Slide[];
};

export default function Carousel({ slides }: CarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % slides.length);
  };
  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((currentSlide + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  console.log(slides);

  return (
    <div className="relative w-full h-full">
      {slides.map((slide, index) => (
        <div key={index} className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${index === currentSlide ? "opacity-100" : "opacity-0"}`}>
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>
          <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
        </div>
      ))}

      <div className="absolute top-0 left-0 w-full h-full flex flex-col gap-2 items-center justify-center">
        <h1 className="text-2xl md:text-5xl font-bold text-white text-center">{slides[currentSlide].title}</h1>
        <p className="text-base md:text-2xl text-white text-center">{slides[currentSlide].subtitle}</p>
      </div>

      <div className="absolute top-0 bottom-0 left-2 md:left-10 flex items-center">
        <button onClick={prevSlide} className="w-10 h-10 flex justify-center items-center text-monza-600">
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 1L1 7l14 6" />
          </svg>
        </button>
      </div>

      <div className="absolute top-0 right-2 md:right-10 bottom-0 flex items-center">
        <button onClick={nextSlide} className="w-10 h-10 flex justify-center items-center text-monza-600">
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1l14 6-14 6" />
          </svg>
        </button>
      </div>
    </div>
  );
}
