"use client";
import React from "react";
import Image from "next/image";
import pic from "../public/portfoliopic.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFileDownload } from "@fortawesome/free-solid-svg-icons";

import dynamic from "next/dynamic";

const Typewriter = dynamic(() => import("typewriter-effect"), { ssr: false });

const Hero = () => {
  return (
    <div
      id="home"
      className="w-screen h-screen py-20 flex flex-col-reverse md:flex-row justify-center items-center overflow-x-hidden bg-gray-100"
    >
      <div className="w-full md:w-1/2 space-y-5 mx-auto text-center md:text-left">
        <p className="text-md md:text-lg text-gray-500">Hello, I&apos;m</p>
        <h1 className="text-4xl md:text-6xl text-blue-600 font-bold">Raju Nichols <span className="wave">👋</span></h1>
        <div className="text-md md:text-lg text-gray-500">
          I&apos;m a{" "}
          <span className="text-blue-600 font-bold">
            <Typewriter
              options={{
                strings: ["Software Developer", "Web Developer", "Mobile Developer"],
                autoStart: true,
                loop: true,
                delay: 50,
              }}
            />
          </span>
        </div>
        <p className="text-lg md:text-xl text-gray-500">
          I&apos;m a software developer specializing in web and mobile applications. I love learning new technologies and using them to create user-friendly digital experiences.
        </p>
        <div className="flex justify-center md:justify-start space-x-4 mt-4">
          <a href="https://www.linkedin.com/in/raju-nichols-1172651a2/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a href="https://github.com/RajuNichols" target="_blank" rel="noopener noreferrer" className=" hover:text-blue-600">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a href="NicholsResume.pdf" download className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-800 flex items-center space-x-2">
            <FontAwesomeIcon icon={faFileDownload} />
            <span>Resume</span>
          </a>
        </div>
      </div>
      <div className="w-1/2 md:w-1/4 mx-auto mt-8 md:mt-0">
        <div className="w-3/4 h-3/4 md:w-3/4  mx-auto">
          <Image
          src={pic}
          alt="Raju Nichols"
          className="mb-8 md:mb-0 rounded-lg animate-morph border-2 border-blue-600"
        />
        </div>
      </div>
    </div>
  );
};


export default Hero;

