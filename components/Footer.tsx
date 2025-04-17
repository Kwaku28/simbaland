import React from "react";
import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./ui/MagicButton";
import { IconBrandTelegram, IconBrandX } from "@tabler/icons-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full pt-10 pb-10" id="contact">
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          <span className="text-purple">Join </span>
          the Simbaland Tribe
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center text-lg">
          We’re not building this alone. Join thousands of learners, traders,
          and investors shaping Africa’s crypto future.
        </p>
        <a href="example.com" target="_blank" rel="noopener noreferrer">
          <MagicButton
            title="Join Now"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>

      <div className="flex mt-16 md:flex-row flex-col justify-between items-center gap-3">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2025 Simbaland
        </p>
        <div className="flex flex-col items-start md:gap-3 gap-6 max-w-lg">
          <p className="text-start lg:w-lg">
            Have questions, partnerships, or media inquiries? Let’s talk — this
            is just the beginning.
          </p>
          <div className="flex flex-row justify-start gap-3 md:gap-5">
            {socialMedia.map((social) => (
              <Link
                key={social.id}
                href={social.link}
                target="_blank"
              >
                {social.icon}
              </Link>
            ))}

          </div>
        </div>
      </div>
    </footer>
  );
};

const socialMedia = [
  {
    id: 1,
    link: "https://x.com",
    icon: <IconBrandX />,
  },
  {
    id: 2,
    link: "https://web.telegram.org/a/",
    icon: <IconBrandTelegram />,
  },
];

export default Footer;
