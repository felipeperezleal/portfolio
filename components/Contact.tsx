"use client";
import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { IoSend } from "react-icons/io5";

const Contact = () => {
  const copyToClipboard = async () => {
    const email = "seperezl@unal.edu.co";

    try {
      await navigator.clipboard.writeText(email);
      console.log("Email copied to clipboard:", email);
    } catch (error) {
      console.error("Error copying to clipboard:", error);
    }
  };

  return (
    <div className="h-screen bg-stone-950 px-10 py-10 md:px-32 md:py-32 ">
      <div className="flex flex-col justify-between h-full">
        <p className="text-4xl tracking-tight font-medium text-white text-center md:text-8xl">
          {"Let's build something great together!"}
        </p>
        <div className="flex items-center justify-center space-x-2">
          <button
            onClick={copyToClipboard}
            className="rounded-full border w-full py-2 text-sm text-white hover:bg-stone-900 transition-colors md:w-1/2 md:py-3 md:text-2xl"
          >
            seperezl@unal.edu.co
          </button>
          <a
            href="mailto: seperezl@unal.edu.co"
            className="rounded-full p-1 text-white hover:bg-stone-950 hover:text-stone-400 transition-colors"
            target="_blank"
          >
            <IoSend size={35} />
          </a>
        </div>
        <div className="flex flex-col items-center space-y-12">
          <p className="text-white text-xl md:text-4xl">{"Connect with me:"}</p>
          <div className="flex items-center justify-evenly space-x-10 md:space-x-32">
            <a
              href="https://www.linkedin.com/in/felipeperezleal/"
              target="_blank"
              className="text-white hover:bg-stone-950 hover:text-stone-300 transition-colors"
            >
              <FaLinkedin size={50} />
            </a>
            <a
              href="https://www.github.com/felipeperezleal"
              target="_blank"
              className="text-white hover:bg-stone-950 hover:text-stone-300 transition-colors"
            >
              <FaGithub size={50} />
            </a>
            <a
              href="https://www.instagram.com/felipeperezleal/"
              target="_blank"
              className="text-white hover:bg-stone-950 hover:text-stone-300 transition-colors"
            >
              <FaInstagram size={50} />
            </a>
          </div>
        </div>
        <div>
          <hr className="border-t border-white pb-2 md:pb-5" />
          <div className="flex flex-col items-center justify-center">
            <p className="text-white text-center text-xs md:text-lg">
              Website design and development by Felipe Pérez Leal
            </p>
            <p className="text-white text-center text-xs md:text-lg">All rights reserved © 2024</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
