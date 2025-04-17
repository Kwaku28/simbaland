import React from "react";
import Button from "./Button";
import { FlipWords } from "./ui/flip-words";
import { flipWords } from "@/data";
import Image from "next/image";

const Hero = () => {
  return (
    <section>
      <div className="absolute top-8 left-1 lg:left-24 size-32 overflow-hidden">
        <Image src='/simbaland-logo.png' alt="Simbaland Logo" width={100} height={100} className="object-cover" />
      </div>
      <div className="pt-36 pb-20 lg:px-20 h-screen">
        <div className="flex flex-col max-w-[89vw] md:max-w-2xl lg:max-w-[64vw] gap-4">
          <h2 className="text-sm md:text-lg lg:text-2xl lg:mt-10">
            Welcome to <span className="text-purple">Simbaland</span>
          </h2>
          <h2 className="uppercase tracking-widest text-start text-[20px] md:text-[22px]/10 lg:text-4xl/10 max-w-90 lg:max-w-[48vw]">
            Empowering Africa’s Next Generation of Web3
            <br />
            <FlipWords words={flipWords} />
          </h2>

          <p className="text-sm md:text-lg lg:text-2xl lg:max-w-[64vw]">
            Join a dynamic ecosystem that fuses trading intelligence, crypto
            education, and early-stage investment access — all tailored for the
            African Web3 frontier.
          </p>
          <Button
            text="Join The Movement"
            className="md:w-50 md:h-16 w-40 h-12 mt-5"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
