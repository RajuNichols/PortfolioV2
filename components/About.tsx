"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useInView } from "react-intersection-observer";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const [visibility, setVisibility] = useState("invisible");

  useEffect(() => {
    if (inView) {
      setVisibility("visible animate-fadeInRight"); // when the section comes into view, set the visibility and add the animation class
    }
  }, [inView]);

  const programmingLanguages = [
    "/csharp.png",
    "/java.png",
    "/javascript.png",
    "/typescript.png",
    "/pythonlogo.png",
    "/C.png",
  ];
  const technicalSkills = [
    "/html.png",
    "/css.png",
    "/github.png",
    "/node.png",
    "/react.png",
    "/sql.png",
  ];
  const experiences = [
    "Shamrock Trading Corporation - Software Developer",
    "Shamrock Trading Corporation - Software Developer Intern",
    "Panda Express - Shift Lead",
    "Santa Fe Honey Farm - Assistant",
  ];

  const { theme } = useTheme();

  const aboutClasses =
    theme === "dark" ? "bg-zinc-900 text-white" : "bg-gray-100 text-gray-500";
  const titleClasses = "text-blue-500";
  const circleClasses =
    theme === "dark" ? "bg-zinc-800 shadow-md" : "bg-white shadow-md";

  return (
    <div className={aboutClasses}>
      <div
        id="about"
        className={`w-screen fade h-auto py-20 flex flex-col md:flex-row justify-center items-start overflow-x-hidden ${aboutClasses} px-8 md:px-16 ${visibility}`}
        ref={ref}
      >
        <div className="w-full md:w-1/2 space-y-10 mx-auto text-center md:text-left md:mr-8 md:max-w-3/4">
          <h2 className={`text-4xl md:text-5xl ${titleClasses} font-bold mb-8`}>
            About
          </h2>

          <div className="mb-10">
            <h3
              className={`text-xl md:text-2xl ${titleClasses} font-semibold mb-2`}
            >
              Background
            </h3>
            <p className="text-base">
              I&apos;m a Software Developer at{" "}
              <span className="text-blue-500 font-bold">
                Shamrock Trading Corporation
              </span>{" "}
              and a recent graduate from the{" "}
              <span className="text-blue-500 font-bold">
                University of Missouri-Columbia
              </span>
              . I excel at blending coding and design to create efficient,
              user-friendly applications.
            </p>
          </div>

          <div>
            <h3
              className={`text-xl md:text-2xl ${titleClasses} font-semibold mb-2`}
            >
              Interests/Hobbies
            </h3>
            <p className="text-base">
              When I&apos;m not coding, you&apos;ll often find me immersed in
              the latest video games, catching up on my favorite TV shows and
              movies, or experimenting with new recipes in the kitchen. I also
              have a special fondness for coffee and enjoy exploring different
              brewing techniques.
            </p>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:mx-auto mt-5 md:mt-16">
          <div className="flex flex-col md:flex-row justify-around items-start w-full">
            <div className="w-full md:w-1/2 flex flex-col items-center mt-5">
              <h4
                className={`text-xl md:text-2xl ${titleClasses} font-semibold mb-2 text-center`}
              >
                Languages
              </h4>
              <div className="flex gap-2 flex-wrap justify-center mt-4">
                {programmingLanguages.map((skill, index) => (
                  <div
                    key={index}
                    className={`w-12 h-12 rounded-full ${circleClasses} flex items-center justify-center first:mx-0 last:mx-0`}
                  >
                    <Image
                      src={skill}
                      alt="Programming Language"
                      width="30"
                      height="30"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="hidden md:flex md:self-stretch border-gray-500  md:border-l md:mx-6"></div>

            <div className="w-full md:w-1/2 flex flex-col items-center mt-5 border-left">
              <h4
                className={`text-xl md:text-2xl ${titleClasses} font-semibold mb-2 text-center`}
              >
                Technical
              </h4>
              <div className="flex gap-2 flex-wrap justify-center mt-4">
                {technicalSkills.map((skill, index) => (
                  <div
                    key={index}
                    className={`w-12 h-12 rounded-full ${circleClasses} flex items-center justify-center first:mx-0 last:mx-0`}
                  >
                    <Image
                      src={skill}
                      alt="Technical Skill"
                      width="30"
                      height="30"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="w-full my-auto mt-10 text-center">
            <h3
              className={`text-xl md:text-2xl ${titleClasses} font-semibold mb-2 text-center`}
            >
              Experience
            </h3>
            <ul className="space-y-1 text-base">
              {experiences.map((experience, index) => {
                const [company, role] = experience.split(" - ");
                return (
                  <li key={index}>
                    {company} -{" "}
                    <span className="text-blue-500 font-bold">{role}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
