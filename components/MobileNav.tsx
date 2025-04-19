"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { IconMenuDeep, IconX } from "@tabler/icons-react";
import Image from "next/image";
import { navItems } from "@/data";
import Link from "next/link";
import { cn } from "@/lib/utils";

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="md:hidden flex fixed top-10 right-0 z-[5000] px-8 py-2 items-center justify-end space-x-10 h-14 w-full">
      <div className="flex justify-end items-center w-full">
        <Button
          variant="ghost"
          className="cursor-pointer"
          onClick={toggleMenu}
        >
          {isOpen ? null : <IconMenuDeep className="size-8 text-purple" />}
        </Button>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed top-0 right-0 h-full w-64 dark:bg-purple-light bg-purple-light shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] p-6 md:hidden flex flex-col space-y-4 z-50"
        >
          <Button
            variant="ghost"
            className="self-end mb-1 text-gray-100 hover:text-purple cursor-pointer"
            onClick={toggleMenu}
          >
            <IconX className="size-8" />
          </Button>
          {navItems.map((navItem: any, idx: number) => (
          <Link
            key={`link=${idx}`}
            href={navItem.link}
            onClick={toggleMenu}
            className={cn(
              "dark:text-neutral-50  text-neutral-600 dark:hover:text-purple hover:text-purple"
            )}
          >
            <span className="block sm:hidden">{navItem.icon}</span>
            <span className="text-sm">{navItem.name}</span>
          </Link>
        ))}
          <div className="absolute bottom-2 left-22 size-32 overflow-hidden">
            <Image
              src="/simbaland-logo.png"
              alt="Simbaland Logo"
              width={100}
              height={100}
              className="object-cover"
            />
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default MobileNavbar;
