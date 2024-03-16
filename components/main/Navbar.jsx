"use client";

import { Socials } from "@/constants";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { FaBars } from "react-icons/fa6";

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      if (prevScrollPos > currentScrollPos) {
        setVisible(true);
      } else {
        setVisible(false);
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <div
      className={`${
        visible ? "" : "-translate-y-full"
      } w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10 duration-300`}
    >
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src="/NavLogo.png"
            alt="logo"
            width={70}
            height={70}
            className="cursor-pointer hover:animate-slowspin"
          />

          <span className="font-bold ml-[10px] hidden md:block text-gray-300">
            Shxv.Dev
          </span>
        </a>
        
        <div className="flex flex-row gap-5 font-bold">
          <a href="#about-me" className="cursor-pointer max-[800px]:hidden">
            About me
          </a>
          <a href="#projects" className="cursor-pointer max-[800px]:hidden">
            Projects
          </a>
          <a href="#skills" className="cursor-pointer max-[800px]:hidden">
            Skills
          </a>
          <div className="cursor-pointer border rounded-full px-3 border-[#7042f88b]">
            Resume
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
