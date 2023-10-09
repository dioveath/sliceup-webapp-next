"use client";

import Image from "next/image";
import Carousel, { Slide } from "@/components/carousel";

const slides: Slide[] = [
  {
    title: "For the Love of Pizza",
    subtitle: "Slice Up",
    image: "https://sliceup.pizza/assets/media/attachments/public/639/0fb/1cc/thumb_7_0_0_contain_48a4b15e.jpg",
  },
  {
    title: "Another Test Slide",
    subtitle: "Test Slide",
    image: "https://sliceup.pizza/assets/media/attachments/public/639/0fb/1cc/thumb_7_0_0_contain_48a4b15e.jpg",
  },
];

export default function Hero() {
    
  return (
    <section className="w-full h-[50vh] lg:h-[80hv] bg-monza-500">
      <Carousel slides={slides} />
    </section>
  );
}
