"use client";
import { images } from "@/data";
import ThreeDMarquee from "./ui/3d-marquee";

export function ThreeDBackground() {
  return (
    <div className="absolute left-0 top-0 min-w-full bg-background/5 ring-neutral-700/10 dark:bg-background">
      <ThreeDMarquee images={images} />
    </div>
  );
}
