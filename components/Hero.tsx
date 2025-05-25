import React from "react";
import Button from "./Button";
import Image from "next/image";
import { Oswald } from 'next/font/google'

const oswald = Oswald({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
})

const Hero = () => {
  return (
    <section className="h-[80vh] lg:h-screen flex justify-start items-center bg-[url('/simba-mobile-back.jpg')] md:bg-[url('/simba-background-head.jpg')] bg-cover bg-center bg-no-repeat">
      {/* Optional overlay for better text readability - removed or reduced for brighter background */}
      {/* <div className="absolute inset-0 bg-black/40"></div> */}

      <div className="absolute top-8 left-1 lg:left-12 size-32 2xl:size-44 overflow-hidden z-20">
        <Image
          src="/simbaland-white.png"
          alt="Simbaland Logo"
          width={100}
          height={100}
          className="object-cover size-full"
          priority
        />
      </div>
      
      <div className="px-5 lg:px-20 mt-20 relative z-10">
        <div className="flex flex-col max-w-[89vw] md:max-w-3xl lg:max-w-[64vw] gap-4">
          <h2 className="text-lg md:text-xl lg:text-2xl 2xl:text-4xl lg:mt-10 font-bold text-neutral-100">
            Welcome to <span className="text-golden-brown">Simbaland</span>
          </h2>
          <h2 className={`${oswald.className} text-golden-brown uppercase tracking-widest font-bold text-start text-[22px]/10 md:text-4xl/14 lg:text-6xl/16 max-w-92 md:max-w-full lg:max-w-[52vw] 2xl:text-8xl/26`}>
            Explore Web3 With Confidence.
          </h2>
          <p className="text-lg lg:text-xl lg:max-w-[44vw] 2xl:text-3xl 2xl:max-w-[48vw] text-neutral-100">
            Simplified crypto trading, education, and curated <br /> opportunities —
            all in one platform.
          </p>
          <Button
            text="Join Us"
            className="md:w-50 md:h-16 w-40 h-12 mt-5"
            link="mailto:simbaland.smart@gmail.com"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;