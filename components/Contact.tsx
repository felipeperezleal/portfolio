"use client";
import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { IoCopy, IoSend } from "react-icons/io5";

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
    <div className="h-screen bg-stone-950 px-20 py-6 md:px-64 md:py-20">
      <div className="flex flex-col h-full">
        <div className="h-1/8">
          <p className="text-5xl tracking-tight font-medium text-white md:text-8xl">
            Contact me!
          </p>
        </div>
        <div className="flex flex-col justify-around h-full">
          <div>
            <p className="text-white text-2xl md:text-4xl pb-10">
              {
                "If you're interested in working together, feel free to reach out to me at:"
              }
            </p>
            <div className="flex items-center justify-center space-x-2">
              <input
                type="email"
                value={"seperezl@unal.edu.co"}
                className="border bg-transparent border-white rounded-lg text-white w-full px-4 text-xl md:text-3xl md:w-3/4"
              />
              <button
                type="button"
                onClick={copyToClipboard}
                className="rounded-full p-1 ml-2 text-white hover:bg-stone-950 hover:text-stone-400 transition-colors"
              >
                <IoCopy size={25} />
              </button>
              <a
                href="mailto: seperezl@unal.edu.co"
                className="rounded-full p-1 ml-2 text-white hover:bg-stone-950 hover:text-stone-400 transition-colors"
                target="_blank"
              >
                <IoSend size={25} />
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center space-y-12">
            <p className="text-white text-2xl md:text-4xl">
              {"Let's connect!"}
            </p>
            <div className="flex items-center justify-evenly space-x-32">
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
        </div>

        <div>
          <hr className="border-t border-white pb-2 md:pb-5" />
          <div className="flex items-center justify-center">
            <p className="text-white">
              Website design and content © 2024 by Felipe Pérez Leal
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
