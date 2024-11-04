"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box flex flex-row py-[8px] px-[12px] border rounded-full border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">Fullstack Web-Developer</h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 sm:text-[4vw] text-[10vw] leading-[3.35rem] font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
          Crafting
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              digital experiences{" "}
            </span>
            With Lines of code
          </span>
        </motion.div>
        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              Shivranjan Bharadwaj
            </span>, a Full Stack Software Engineer with experience in Website, and Software development. Check out my projects and skills.
        </motion.p>
        <motion.a
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center text-white cursor-pointer border border-[#7042f88b] rounded-lg max-w-[200px]"
          // onClick={() => console.log("first")}
          href="https://shxv-dev-3.vercel.app/"
        >
          View More!
        </motion.a>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center max-[800px]:hidden"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={650}
          width={650}
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
