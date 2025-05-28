"use client";

import React from "react";
import { CanvasRevealEffect } from "./ui/canvas-reveal-effect";
import { AnimatePresence, motion } from "framer-motion";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { pnls } from "@/data";

const Approach = () => {
  return (
    <section
      className="w-full py-20 px-5 lg:px-20 lg:pt-36"
      style={{
        backgroundImage: "url('/approach-background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h1 className="heading text-start">
        Why <span className="text-golden-brown">Simbaland?</span>
      </h1>
      <p className="text-sm mt-5 md:text-2xl md:mt-10 text-neutral-100">
        No fluff, just results
      </p>
      <div className="my-10 md:my-15 flex flex-col lg:flex-row items-center justify-center gap-6">
        <Card
          title="Africa First"
          icon={<AceternityIcon order="Localized" />}
          description="We build with the continent in mind — every service is localized, relevant, and accessible."
        >
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-emerald-900"
          />
        </Card>
        <Card
          title="Human Over Bot"
          icon={<AceternityIcon order="Expertise" />}
          description="Simba’s Edge outperforms algorithmic bots with real trading expertise."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-black"
            colors={[
              [236, 72, 153],
              [232, 121, 249],
            ]}
            dotSize={2}
          />
        </Card>
        <Card
          title="All-in-One Ecosystem"
          icon={<AceternityIcon order="Unified" />}
          description="Learn, trade, invest — all from one hub."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-600"
            colors={[[125, 211, 252]]}
          />
        </Card>
        <Card
          title="No Token Needed"
          icon={<AceternityIcon order="Substance" />}
          description="Simbaland is run on performance and value, not hype."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-skulled-gray-900"
            colors={[[125, 211, 252]]}
          />
        </Card>
      </div>

      <div className="lg:mt-32">
        <InfiniteMovingCards items={pnls} speed="slow" />
      </div>
    </section>
  );
};

const Card = ({
  title,
  description,
  icon,
  children,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
}) => {
  const [hovered, setHovered] = React.useState(false);
  const [clicked, setClicked] = React.useState(false);

  const handleToggle = () => {
    setClicked(true);

    setTimeout(() => {
      setClicked(false);
    }, 5000);
  };

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={handleToggle}
      className="border group/canvas-card flex items-center justify-center border-white/[0.2] w-full p-4 h-[22rem] 2xl:h-[32rem] relative rounded-3xl"
    >
      <AnimatePresence>
        {(hovered || clicked) && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0 rounded-3xl overflow-hidden"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20">
        <div
          className={`text-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] transition-all duration-200 w-full mx-auto flex items-center justify-center ${
            hovered || clicked ? "opacity-0 translate-y-4" : "opacity-100"
          }`}
        >
          {icon}
        </div>
        <h2
          className={`dark:text-white text-3xl 2xl:text-4xl ${
            hovered || clicked ? "opacity-100" : "opacity-0"
          } relative z-10 text-black mt-4 font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200 text-center`}
        >
          {title}
        </h2>
        <p
          className={`dark:text-white text-sm 2xl:text-xl ${
            hovered || clicked ? "opacity-100" : "opacity-0"
          } relative z-10 text-black mt-4 font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200 text-center`}
          style={{ color: "#e4ecff" }}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

const AceternityIcon = ({ order }: { order: string }) => {
  return (
    <div>
      <button className="relative inline-flex h-18 w-48 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-offset-2 focus:ring-offset-yellow-50">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#d6c526_0%,#fefce8_50%,#d6c526_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-golden-brown px-5 py-2 text-3xl font-bold text-black backdrop-blur-3xl">
          {order}
        </span>
      </button>
    </div>
  );
};

export default Approach;
