import React from "react";
import Button from "./Button";
import Image from "next/image";
import { ThreeDBackground} from "./Marquee";

const Hero = () => {
  return (
    <section className="h-screen">
      <ThreeDBackground />
      <div className="absolute top-8 left-1 lg:left-24 size-32 overflow-hidden">
        <Image
          src="/simbaland-logo.png"
          alt="Simbaland Logo"
          width={100}
          height={100}
          className="object-cover"
        />
      </div>
      <div className="pt-36 pb-20 lg:px-20">
        <div className="flex flex-col max-w-[89vw] md:max-w-2xl lg:max-w-[64vw] gap-4 absolute top-58 lg:top-38 z-10">
          <h2 className="text-lg md:text-xl lg:text-2xl lg:mt-10 font-bold">
            Welcome to <span className="text-purple">Simbaland</span>
          </h2>
          <h2 className="uppercase tracking-widest text-purple font-bold text-start text-[22px]/10 lg:text-4xl/10 max-w-90 lg:max-w-[48vw]">
            Explore Web3 With Confidence.
          </h2>

          <p className="text-lg lg:text-2xl lg:max-w-[64vw]">
            Simbaland is your gateway to simplified crypto trading, education,
            and curated opportunities. We bring together practical tools, expert
            insights, and a thriving community — all in one platform.
          </p>
          <Button
            text="Join The Movement"
            className="md:w-50 md:h-16 w-40 h-12 mt-5"
            link="mailto:simbaland.smart@gmail.com"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
