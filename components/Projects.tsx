import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

const Projects = () => {
  return (
    <div className="h-fit flex flex-col bg-stone-950 px-10 py-10 space-y-12 md:px-32 md:space-y-32">
      <p className="text-white text-4xl font-medium tracking-tight md:text-8xl">
        My work
      </p>
      <div className="flex flex-col items-center  md:flex-row">
        <div className="bg-white w-full h-48 rounded-3xl md:w-2/5 md:h-72" />
        <div className="flex flex-col items-center md:items-start md:pl-10">
          <p className="text-white text-xl md:text-4xl">Tripster</p>
          <p className="text-white text-xl md:text-4xl">Mobile developer</p>
        </div>
      </div>
      <div className="flex flex-col items-center md:flex-row">
        <div className="bg-white w-full h-48 rounded-3xl md:w-2/5 md:h-72" />
        <div className="flex flex-col items-center md:items-start md:pl-10">
        <p className="text-white text-xl md:text-4xl">Tripster</p>
        <p className="text-white text-xl md:text-4xl">Backend developer</p>
        </div>
      </div>
      <div className="flex flex-col items-center md:flex-row">
        <div className="bg-white w-full h-48 rounded-3xl md:w-2/5 md:h-72" />
        <div className="flex flex-col items-center md:items-start md:pl-10">
          <p className="text-white text-xl md:text-4xl">Comprara!</p>
          <p className="text-white text-xl md:text-4xl">Full-Stack developer</p>
        </div>
      </div>
      <a className="text-white items-center justify-center hover:bg-stone-950 hover:text-stone-300 transition-colors flex">
        <p className="text-white text-xl md:text-4xl">See more on my GitHub</p>
        <FiArrowUpRight size={24} />
      </a>
    </div>
  );
};

export default Projects;
