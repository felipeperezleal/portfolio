'use client';
import React from "react";
import { IoCopy } from "react-icons/io5";

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
      <div className="flex flex-col">
        <p className="text-5xl tracking-tight font-medium text-white md:text-8xl">
          Contact me!
        </p>
        <div className="flex">
          <input
            type="email"
            value={"seperezl@unal.edu.co"}
            className="border bg-transparent border-white rounded-lg text-white px-4 text-xs md:text-lg"
          />
          <button
            type="button"
            onClick={copyToClipboard}
            className="rounded-full p-1 ml-2 text-white hover:bg-stone-950 hover:text-stone-400 transition-colors"
          >
            <IoCopy size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
