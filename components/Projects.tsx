"use client";
import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Projects = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const projects = [
    {
      image: "/websitev1.jpg",
      title: "Peronal Portfolio Website V1",
      tools: "React, TypeScript, SaSS, Email.js",
      desc: "This portfolio website represented my debut in Web Development and was my introduction to React. It was a pivotal learning tool, deepening my understanding of React's mechanics and illuminating the finer aspects of web development.",
      githubUrl: "https://github.com/RajuNichols/portfoliov1",
    },
    {
      image: "/websitev2.jpg",
      title: "Personal Portfolio Website V2",
      tools: "Next.js, TypeScript, Tailwind CSS, Email.js",
      desc: "This is my current personal portfolio, which represents a refined evolution from my initial project. Through the development of this portfolio, I gained valuable experience with Next.js and Tailwind CSS, deepening my understanding of creating responsive websites adaptable to a variety of device sizes.",
      githubUrl: "https://github.com/RajuNichols/PortfolioV2",
    },
    {
      image: "/capstonev2.png",
      title: "30 Days Challenge App",
      tools: "React Native, TypeScript, Firebase, Expo, Redux",
      desc: "My undergraduate capstone project was a mobile application designed to enable users to create and track their progress on 30-day challenges. The experience enriched my skills in mobile application development, and it provided insights into how user experiences differ between mobile and web applications.",
      githubUrl: "https://github.com/RajuNichols/30DaysChallenge",
    },
    {
      image: "/chatroom.jpg",
      title: "Chat Room App",
      tools: "Python, Socket, Threading",
      desc: "For a school project, I developed a terminal-based chat room application, allowing users to connect to a server and interact. This project was a rewarding experience that enhanced my knowledge in networking and in the development of both server and client applications.",
      githubUrl: "https://github.com/RajuNichols/ChatRoom",
    },
  ];
  const [imagesLoaded, setImagesLoaded] = useState(
    new Array(projects.length).fill(false)
  );

  useEffect(() => {
    projects.forEach((project, index) => {
      const img = new window.Image();
      img.src = project.image;
      img.onload = () => handleImageLoad(index);
    });
  }, []);

  const handleImageLoad = (index: any) => {
    setImagesLoaded((prevState) => {
      const newState = [...prevState];
      newState[index] = true;
      return newState;
    });
  };

  const allImagesLoaded = imagesLoaded.every(Boolean);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === projects.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? projects.length - 1 : prevSlide - 1
    );
  };

  return (
    <div
      id="projects"
      className="w-screen h-auto py-20 flex flex-col md:flex-row text-center md:text-center overflow-x-hidden bg-gray-100 px-8 md:px-16"
    >
      <div className="md:text-center">
        <h2 className="text-4xl md:text-5xl text-blue-600 font-bold md:text-left mb-10">
          Projects
        </h2>
      </div>
      <div className="w-full md:w-1/2 mb-14">
        <div className="relative">
          {allImagesLoaded ? (
            <Carousel
              selectedItem={currentSlide}
              onChange={setCurrentSlide}
              showArrows={false}
              showIndicators={false}
              className="w-full h-full"
              infiniteLoop={true}
              showStatus={false}
            >
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center  w-full h-full"
                >
                  <div className="relative">
                    <Image
                      onLoad={() => handleImageLoad(index)}
                      className="object-cover w-full h-full"
                      src={project.image}
                      alt={project.title}
                      fill={false}
                      width={1600}
                      height={900}
                      sizes="max-width: 600px) 300px, (max-width: 900px) 600px, 1280px"
                    />
                  </div>
                </div>
              ))}
            </Carousel>
          ) : (
            <p>Loading images...</p>
          )}
          <div className="absolute left-0 right-0 flex justify-center space-x-4 mt-0">
            <button
              className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600"
              onClick={prevSlide}
            >
              <FiChevronLeft size={24} />
            </button>
            <button
              className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600"
              onClick={nextSlide}
            >
              <FiChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 space-y-6 text-center md:text-center flex flex-col justify-center">
        <h2 className="text-2xl text-blue-600 font-semibold">
          {projects[currentSlide].title}
        </h2>
        <h3 className="text-m text-gray-500 mb-2">
          {projects[currentSlide].desc}
        </h3>
        <div className="flex justify-center flex-wrap">
          {projects[currentSlide].tools.split(", ").map((tool, index) => (
            <span
              key={index}
              className="px-2 py-1 text-sm text-blue-600 border border-blue-600 mb-6 mr-2 hover:bg-blue-600 hover:text-white transition-colors duration-200"
            >
              {tool}
            </span>
          ))}
        </div>
        <a
          target="_blank"
          rel="noreferrer"
          href={projects[currentSlide].githubUrl}
          className="mt-6 px-4 py-2 border bg-blue-600 text-white rounded hover:bg-blue-700 shadow  hover:text-white transition-colors duration-200 self-center"
        >
          View on GitHub
        </a>
      </div>
    </div>
  );
};

export default Projects;
