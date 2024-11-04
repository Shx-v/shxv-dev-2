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
          github={"https://github.com/Shx-v/MoviePage"}
          pageLink={"https://movie-pedia-shxv.vercel.app/"}
        />
        <ProjectCard
          src="/CarHub.png"
          title="Cars: Car buying platform"
          description="A comprehensive car buying platform integrating multiple APIs to display detailed listings of vehicles for sale, showcasing various specifications and information about each car."
          github={"https://github.com/Shx-v/CarStore"}
          pageLink={"https://car-store-one.vercel.app/"}
        />
        <ProjectCard
          src="/map-marker.png"
          title="Map Marker"
          description="A map marker project allows users to interact with a map by placing custom markers at specific locations. Users can add, edit, and delete markers to represent points of interest or locations with additional details."
          github={"https://github.com/Shx-v/MapMarker"}
          pageLink={"https://map-marker-pi.vercel.app/"}
        />
      </div>
    </div>
  );
};

export default Projects;
