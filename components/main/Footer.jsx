import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
} from "react-icons/rx";
import { SiGeeksforgeeks } from "react-icons/si";
import { TbBrandLeetcode } from "react-icons/tb";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] z-[20] ">
      <div className="w-full flex flex-col items-center justify-center gap-5 m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Platforms</div>
            <a
              href={"https://github.com/Shx-v"}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center my-[15px] cursor-pointer"
            >
              <RxGithubLogo />
              <span className="text-[15px] ml-[6px]">Github</span>
            </a>
            <a
              href={
                "https://auth.geeksforgeeks.org/user/shxv_69/?utm_source=geeksforgeeks&utm_medium=my_profile&utm_campaign=auth_user"
              }
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center my-[15px] cursor-pointer"
            >
              <SiGeeksforgeeks />
              <span className="text-[15px] ml-[6px]">GeekForGeeks</span>
            </a>
            <a
              href={"https://leetcode.com/shivranjanbharadwaj/"}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center my-[15px] cursor-pointer"
            >
              <TbBrandLeetcode />
              <span className="text-[15px] ml-[6px]">LeetCode</span>
            </a>
          </div>
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Social Media</div>
            <a
              href={"https://www.instagram.com/_.lu_c_k_y.__/"}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center my-[15px] cursor-pointer"
            >
              <RxInstagramLogo />
              <span className="text-[15px] ml-[6px]">Instagram</span>
            </a>
            <a
              href={"https://twitter.com/Shiv_bharadwaj_"}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center my-[15px] cursor-pointer"
            >
              <RxGithubLogo />
              <span className="text-[15px] ml-[6px]">Twitter</span>
            </a>
            <a
              href={"https://www.linkedin.com/in/shivranjan-bharadwaj-b87b70245/?originalSubdomain=in"}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center my-[15px] cursor-pointer"
            >
              <RxDiscordLogo />
              <span className="text-[15px] ml-[6px]">Linkedin</span>
            </a>
          </div>
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">About</div>
            <p className="flex flex-row items-center my-[15px]">
              <span className="text-[15px] ml-[6px] text-center">
                Web Developer driven <br /> by innovation and excellence, <br />{" "}
                passionate about Learning.
              </span>
            </p>
          </div>
        </div>

        <div className="mb-[20px] text-[15px] text-center">
          &copy;Shivranjan Bharadwaj. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
