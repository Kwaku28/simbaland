"use client";
import { useScroll, useTransform, motion } from "motion/react";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
  icon: string;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full font-sans md:px-20"
      ref={containerRef}
      style={{
        backgroundImage: "url('/ecosystem-background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-7xl pt-40 lg:py-30 px-4 md:px-8 lg:px-10">
        <h2 className="text-2xl md:text-4xl lg:text-5xl 2xl:text-7xl mb-4 text-white max-w-4xl 2xl:max-w-6xl">
          Our Ecosystem
        </h2>
        <p className="text-neutral-300 text-sm md:text-base 2xl:text-2xl max-w-sm 2xl:max-w-xl">
          Come on a journey with us as we build the future of Africa&apos;s
          crypto landscape.
        </p>
      </div>

      <div ref={ref} className="relative max-w-7xl 2xl:max-w-full pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-40 md:gap-10 2xl:gap-32"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm 2xl:max-w-lg">
              <div className="size-16 2xl:size-28 absolute left-0 md:left-0 rounded-full bg-white flex items-center justify-center">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="size-full object-contain rounded-full"
                />
              </div>
              <h3 className="hidden md:block text-xl md:pl-20 2xl:pl-32 md:text-5xl 2xl:text-6xl font-bold text-golden-brown dark:text-golden-brown ">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-golden-brown dark:text-golden-brown">
                {item.title}
              </h3>
              {item.content}{" "}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 2xl:left-14 top-0 overflow-hidden w-[10px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-yellow-100 via-yellow-300 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
