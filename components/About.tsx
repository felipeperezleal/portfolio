import React from "react";
import { FiArrowDownRight } from "react-icons/fi";

const About = () => {
  return (
    <div className="h-fit bg-stone-950 rounded-t-3xl px-20 py-10 md:px-64 md:py-32 space-y-20">
      <div className="space-y-10">
        <p className="text-white text-5xl font-medium tracking-tight md:text-8xl">
          About me
        </p>
        <p className="text-white text-2xl md:text-4xl">
          {
            "Hola! I'm Felipe, a passionate software developer based in Bogotá, Colombia. I find joy in crafting digital experiences that not only meet technical excellence but also resonate with users on a profound level."
          }
        </p>
      </div>
      <div className="space-y-10">
        <p className="text-white text-5xl font-medium tracking-tight md:text-8xl">
          What I do
        </p>
        <p className="text-white text-2xl md:text-4xl">
          {
            "Beyond code, I bring creativity, adaptability, and a collaborative spirit to every project, making each endeavor an exciting opportunity to transform ideas into reality."
          }
        </p>
        <div>
          <hr className="border-t border-white pb-2 md:pb-5" />
          <div className="flex items-center justify-between">
            <p className=" text-white text-2xl md:text-4xl">
              Frontend development
            </p>
            <button className="text-white hover:bg-stone-950 hover:text-stone-300 transition-colors">
              <FiArrowDownRight size={32} />
            </button>
          </div>
        </div>
        <div>
          <hr className="border-t border-white pb-2 md:pb-5" />
          <div className="flex items-center justify-between">
            <p className=" text-white text-2xl md:text-4xl">
              Backend development
            </p>
            <button className="text-white hover:bg-stone-950 hover:text-stone-300 transition-colors">
              <FiArrowDownRight size={32} />
            </button>
          </div>
        </div>
        <div>
          <hr className="border-t border-white pb-2 md:pb-5" />
          <div className="flex items-center justify-between">
            <p className=" text-white text-2xl md:text-4xl">
              Mobile development
            </p>
            <button className="text-white hover:bg-stone-950 hover:text-stone-300 transition-colors">
              <FiArrowDownRight size={32} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
