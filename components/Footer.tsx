import React from "react";
import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./ui/MagicButton";
import { IconBrandTelegram, IconBrandX } from "@tabler/icons-react";
import Link from "next/link";
import Image from "next/image";
import { contact, navItems } from "@/data";
import { cn } from "@/lib/utils";
import { Animatedcontact } from "./ui/animated-testimonials";

const Footer = () => {
  return (
    <footer
      className="w-full py-10 px-5 md:px-10"
      id="contact"
      style={{
        backgroundImage: "url('/contact-background.jpg')",
        backgroundSize: "contain",
        backgroundPosition: "center",
      }}
    >
      <Animatedcontact contact={contact} />
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw] text-black">
          <span className="text-purple">Join </span>
          the Simbaland Tribe
        </h1>
        <p className="text-neutral-900 md:mt-10 my-5 text-center text-sm md:text-lg">
          We’re not building this alone. Join thousands of learners, traders,
          and investors shaping Africa’s crypto future.
        </p>
        <a
          href="mailto:simbaland.smart@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MagicButton
            title="Join Now"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>

      <div className="flex mt-16 md:flex-row flex-col items-center justify-between gap-3">
        <div className="flex flex-col items-start justify-start md:gap-3 gap-6">
          <div className="flex justify-center w-full md:justify-start items-center mb-5">
            <Image
              src="/simbaland.png"
              alt="logo"
              width={100}
              height={100}
            />
          </div>
          <p className="hidden md:block md:text-base text-slate-950 text-sm md:font-normal font-light">
            Copyright © 2025 Simbaland
          </p>
        </div>

        <div className="flex flex-col items-start justify-start gap-3 mb-5 w-full md:w-auto">
          <h1 className="text-lg font-semibold text-slate-950">Explore</h1>
          {navItems.map((navItem: any, idx: number) => (
            <Link
              key={`link=${idx}`}
              href={navItem.link}
              className={cn(
                "text-slate-950 dark:hover:text-purple hover:text-purple"
              )}
            >
              <span className="block sm:hidden">{navItem.icon}</span>
              <span className="text-sm">{navItem.name}</span>
            </Link>
          ))}
        </div>

        <div className="flex flex-col items-start md:gap-3 gap-6 max-w-lg mb-5">
          <p className="text-start text-sm md:text-[16px] lg:w-lg text-slate-950">
            Have questions, partnerships, or media inquiries? Let’s talk — this
            is just the beginning.
          </p>
          <div className="flex flex-row justify-start gap-3 md:gap-5">
            {socialMedia.map((social) => (
              <Link
                key={social.id}
                href={social.link}
                target="_blank"
                className="text-slate-950 dark:hover:text-purple hover:text-purple"
              >
                {social.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <p className="text-sm text-center font-light mt-5 md:hidden text-slate-950">
        Copyright © 2025 Simbaland
      </p>
    </footer>
  );
};

const socialMedia = [
  {
    id: 1,
    link: "https://x.com/simbaland25?s=21&t=nt9fQQq86uCEValOxW9VwA",
    icon: <IconBrandX />,
  },
  {
    id: 2,
    link: "https://web.telegram.org/a/",
    icon: <IconBrandTelegram />,
  },
];

export default Footer;
