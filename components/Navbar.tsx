"use client";
import React, { useState, useEffect } from "react";
import { Transition } from "@headlessui/react";
import { Link } from "react-scroll";
import Image from "next/image";
import Scrollspy from "react-scrollspy";
import { useTheme } from "next-themes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon, faBars } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [isMobile, setIsMobile] = useState(false);

  const switchTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const navClasses =
    theme === "dark" ? "bg-zinc-800 text-white" : "bg-white text-black";
  const linkClasses = theme === "dark" ? "text-white" : "text-black";
  const menuClasses = theme === "dark" ? "bg-zinc-800" : "bg-white";

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Set initial window size

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={`fixed top-0 z-50 shadow ${navClasses}`}>
      <nav className={`fixed w-full z-50 shadow ${navClasses}`}>
        <div className="w-full">
          <div className="flex items-center h-20 w-full">
            <div className="flex items-center mx-14 justify-between w-full">
              <div className="flex justify-center items-center flex-shrink-0">
                <Link
                  to="about"
                  smooth={true}
                  offset={0}
                  duration={500}
                  className={`cursor-pointer ${linkClasses} py-2 rounded-md text-lg font-bold`}
                >
                  Raju.dev
                </Link>
              </div>
              {isMobile ? (
                <>
                    <button
                      onClick={switchTheme}
                      className={`cursor-pointer ${linkClasses} py-2 rounded-md text-sm font-medium transition-colors duration-200 go-left flex relative`}
                    >
                      {theme === "dark" ? (
                        <FontAwesomeIcon icon={faSun} />
                      ) : (
                        <FontAwesomeIcon icon={faMoon} />
                      )}
                    </button>
                    <div className="flex md:hidden">
                      <button
                        onClick={() => setIsOpen(!isOpen)}
                        type="button"
                        className="bg-blue-500 inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-800 focus:ring-white"
                        aria-controls="mobile-menu"
                        aria-expanded="false"
                      >
                        <span className="sr-only">Open main menu</span>
                        {!isOpen ? (
                          <FontAwesomeIcon
                            icon={faBars}
                            className="block h-6 w-6"
                          />
                        ) : (
                          <svg
                            className="block h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        )}
                      </button>
                    </div>
                </>
              ) : (
                <div className="hidden md:block items-center">
                  <div className="ml-10 flex items-baseline space-x-4">
                    <Scrollspy
                      items={["home", "about", "projects", "contact"]}
                      currentClassName="active"
                      offset={-60}
                    >
                      <Link
                        to="home"
                        smooth={true}
                        offset={0}
                        duration={500}
                        className={`cursor-pointer hover:bg-blue-500 ${linkClasses} hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200`}
                      >
                        Home
                      </Link>
                      <Link
                        to="about"
                        smooth={true}
                        offset={-20}
                        duration={500}
                        className={`cursor-pointer hover:bg-blue-500 ${linkClasses} hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200`}
                      >
                        About
                      </Link>
                      <Link
                        to="projects"
                        smooth={true}
                        offset={-20}
                        duration={500}
                        className={`cursor-pointer hover:bg-blue-500 ${linkClasses} hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200`}
                      >
                        Projects
                      </Link>
                      <Link
                        to="contact"
                        smooth={true}
                        offset={0}
                        duration={500}
                        className={`cursor-pointer hover:bg-blue-500 ${linkClasses} hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200`}
                      >
                        Contact
                      </Link>
                    </Scrollspy>
                    <button
                      onClick={switchTheme}
                      className={`cursor-pointer hover:bg-blue-500 ${linkClasses} hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200`}
                    >
                      {theme === "dark" ? (
                        <FontAwesomeIcon icon={faSun} />
                      ) : (
                        <FontAwesomeIcon icon={faMoon} />
                      )}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div
                ref={ref}
                className={`px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col`}
              >
                <Scrollspy
                  items={["home", "about", "projects", "contact"]}
                  currentClassName="active"
                  className="flex flex-col"
                  offset={-60}
                >
                  <Link
                    onClick={() => setIsOpen(false)}
                    to="home"
                    smooth={true}
                    offset={0}
                    duration={500}
                    className={`cursor-pointer hover:bg-blue-500 ${linkClasses} hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200`}
                  >
                    Home
                  </Link>
                  <Link
                    onClick={() => setIsOpen(false)}
                    to="about"
                    smooth={true}
                    offset={-20}
                    duration={500}
                    className={`cursor-pointer hover:bg-blue-500 ${linkClasses} hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200`}
                  >
                    About
                  </Link>
                  <Link
                    onClick={() => setIsOpen(false)}
                    to="projects"
                    smooth={true}
                    offset={-20}
                    duration={500}
                    className={`cursor-pointer hover:bg-blue-500 ${linkClasses} hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200`}
                  >
                    Projects
                  </Link>
                  <Link
                    onClick={() => setIsOpen(false)}
                    to="contact"
                    smooth={true}
                    offset={0}
                    duration={500}
                    className={`cursor-pointer hover:bg-blue-500 ${linkClasses} hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200`}
                  >
                    Contact
                  </Link>
                </Scrollspy>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}

export default Navbar;
