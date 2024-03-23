import Image from "next/image";
import React from "react";
import { FaLink, FaGithub } from "react-icons/fa";

const ProjectCard = ({ src, title, description, github, pageLink }) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] z-20">
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full object-contain"
      />

      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>
      </div>
      <div className="relative p-4 flex gap-2">
        <a href={pageLink} className="cursor-pointer">
          <FaLink size={20} />
        </a>
        <a href={github} className="cursor-pointer">
          <FaGithub size={20} />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
