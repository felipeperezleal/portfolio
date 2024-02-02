import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

const Home = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-between">
      <div className="h-full w-full flex flex-col justify-evenly px-10 md:px-32 md:py-32 ">
        <div>
          <p className="text-4xl tracking-tight font-medium md:text-8xl">
            {"Hello, I'm Felipe Pérez Leal."}
          </p>
          <p className="text-lg tracking-widest py-10 md:text-3xl">
            SOFTWARE DEVELOPER
          </p>
        </div>
        <div className="flex flex-col md:items-center md:flex-row">
          <button className="text-base rounded-full border py-2 px-4 text-stone-950 border-stone-950 hover:bg-stone-950 hover:text-white transition-colors md:text-lg">
            <a href="/cv.pdf" target="_blank">
              Get my resume
            </a>
          </button>
          <div className="flex items-center justify-evenly md:flex-none md:items-baseline md:justify-normal">
            <div className="py-12 md:px-11 md:py-0">
              <a
                href="https://www.linkedin.com/in/felipeperezleal/"
                target="_blank"
                className="text-stone-950 hover:text-stone-700 transition-colors"
              >
                <FaLinkedin size={46} />
              </a>
            </div>
            <a
              href="https://www.github.com/felipeperezleal"
              target="_blank"
              className="text-stone-950 hover:text-stone-700 transition-colors"
            >
              <FaGithub size={46} />
            </a>
          </div>
        </div>
      </div>
      <div className="flex h-1/6 justify-center items-center">
        <a href="">
          <IoIosArrowDown size={46} />
        </a>
      </div>
    </div>
  );
};

export default Home;
