"use client";

import Lottie from "lottie-react";
import { TypeAnimation } from "react-type-animation";
import coderAnimation from "@/assets/lottie/coderCoding.json";

export default function Hero() {
  return (
    <section className="">
      <div className="flex flex-col lg:flex-row items-center gap-16 mt-8">
        {/* TEXT */}
        <div className="text-start text-2xl sm:text-3xl lg:text-4xl font-bold">
          <h1 className="">Hi There!</h1>
          <h1 className="lg:py-4">I&apos;m <span className="text-violet-600">Raja Muhammad Farhan Zahputra</span></h1>
          <div className="relative h-8">
            <TypeAnimation sequence={["Mobile Developer", 1500, "Frontend Developer", 1500, "Android Enthusiast", 1500]} speed={60} repeat={Infinity} className="absolute left-0 top-0 text-violet-700/80 whitespace-nowrap" />
          </div>
        </div>
        {/* LOTTIE */}
        <div className="flex-1 flex justify-center lg:justify-end">
          <Lottie
            animationData={coderAnimation}
            loop
            className="w-64 sm:w-80 lg:w-[420px]"
          />
        </div>
      </div>
    </section>
  );
}
