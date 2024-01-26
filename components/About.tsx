import React from "react";

const About = () => {
  return (
    <div className="h-screen w-full flex bg-stone-950 rounded-t-3xl justify-center">
      <div className="flex flex-col p-20">
        <p className="text-white text-5xl font-medium">About me</p>
        <p className="text-white text-2xl pt-10">
          {"Passionate about crafting digital experiences that leave a lasting impact. With a foundation in diverse programming languages and a commitment to continuous learning, I thrive on challenges that push the boundaries of what's possible."}
        </p>
        <p className="text-white text-5xl font-medium pt-20">What I do</p>
        <p className="text-white text-2xl pt-10">
          {"Beyond code, I bring creativity, adaptability, and a collaborative spirit to every project, making each endeavor an exciting opportunity to transform ideas into reality."}
        </p>
        
      </div>
    </div>
  );
};

export default About;
