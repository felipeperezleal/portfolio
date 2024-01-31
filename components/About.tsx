import React from "react";

const About = () => {
  return (
    <div className="h-fit bg-stone-950 rounded-t-3xl px-20 py-6 md:px-64 md:py-20">
      <p className="text-white text-5xl font-medium pt-20 tracking-tight md:text-8xl">About me</p>
      <p className="text-white text-2xl pt-10 md:text-4xl">
        {
          "Passionate about crafting digital experiences that leave a lasting impact. With a foundation in diverse programming languages and a commitment to continuous learning, I thrive on challenges that push the boundaries of what's possible."
        }
      </p>
      <p className="text-white text-5xl font-medium pt-20 tracking-tight md:text-8xl">What I do</p>
      <p className="text-white text-2xl pt-10 md:text-4xl">
        {
          "Beyond code, I bring creativity, adaptability, and a collaborative spirit to every project, making each endeavor an exciting opportunity to transform ideas into reality."
        }
      </p>
    </div>
  );
};

export default About;
