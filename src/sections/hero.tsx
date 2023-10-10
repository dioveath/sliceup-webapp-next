"use client";

import Image from "next/image";
import Carousel, { Slide } from "@/components/carousel";

const slides: Slide[] = [
  {
    title: "For the Love of Pizza",
    subtitle: "Slice Up is a pizza delivery service that delivers pizza to your door step in 30 minutes or less.",
    image: "https://sliceup.pizza/assets/media/attachments/public/639/0fb/1cc/thumb_7_0_0_contain_48a4b15e.jpg",
  },
  {
    title: "We get the go-to pizza",
    subtitle: "Order pickup and delivery from the best independent pizzerias near you.",
    image: "https://sliceup.pizza/assets/media/attachments/public/639/0fb/1cc/thumb_7_0_0_contain_48a4b15e.jpg",
  },
];

export default function Hero() {
    
  return (
    <section className="w-full h-[50vh] lg:h-[80hv]">
      <Carousel slides={slides} />
    </section>
  );
}
