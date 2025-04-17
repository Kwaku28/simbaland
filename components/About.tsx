import React from "react";

const About = () => {
  return (
    <div className="flex flex-col max-w-[89vw] h-screen items-center justify-center gap-4 lg:pt-36 pb-30 lg:px-20 lg:mb-36" id="about">
      <div className="flex items-center justify-center border-5 border-purple p-3 mb-5 lg:mb-20">
        <h2 className="heading">About us</h2>
      </div>
      <div className="grid grid-cols-2 gap-8 items-center justify-center">
        <p className="text-sm md:text-lg lg:text-4xl lg:max-w-[64vw]">
          The <span className="text-purple pulsate">Pulse</span> of Africa’s Web3 Evolution
        </p>
        <p className="text-sm md:text-lg lg:text-xl lg:max-w-[64vw]">
          Simbaland is more than a brand — it’s a movement. We’re building
          Africa’s most powerful Web3 ecosystem by equipping everyday people
          with the tools, knowledge, and access to thrive in the crypto economy. <br /> <br />
          From elite trading signals to educational pathways and launchpad
          access, Simbaland brings high-value opportunities to the people who
          need them most.
        </p>
      </div>
    </div>
  );
};

export default About;
