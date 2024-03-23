import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/MoviePedia.png"
          title="MoviX: A movie browsing website"
          description="A ReactJS movie browsing website leveraging an API to showcase the latest movie suggestions and detailed information, providing users with a comprehensive cinematic experience."
          github={"https://github.com/Shx-v/MoviePage.git"}
          pageLink={"https://movie-pedia-gy6p.vercel.app/"}
        />
        <ProjectCard
          src="/CarHub.png"
          title="Cars: Car buying platform"
          description="A comprehensive car buying platform integrating multiple APIs to display detailed listings of vehicles for sale, showcasing various specifications and information about each car."
          github={"https://github.com/Shx-v/CarStore.git"}
          pageLink={"https://car-store-one.vercel.app/"}
        />
        <ProjectCard
          src="/Portfolio.png"
          title="Portfolio"
          description="A dynamic portfolio crafted with NextJS, enriched with immersive visuals powered by ThreeJS, offering an engaging user experience through seamless integration of cutting-edge technologies."
        />
      </div>
    </div>
  );
};

export default Projects;
