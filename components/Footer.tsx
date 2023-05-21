"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "next-themes";

const Footer = () => {
  const { theme } = useTheme();

  const footerClasses =
    theme === "dark" ? "bg-zinc-900 text-white" : "bg-white";
  const iconClasses = theme === "dark" ? "text-white" : "text-black";

  return (
    <div className={`w-screen h-auto py-4 flex justify-between items-center ${footerClasses} px-8 md:px-16 shadow`}>
      <div className="flex items-center space-x-2">
        <FontAwesomeIcon icon={faCopyright} className={iconClasses} />
        <p>2023 Raju Nichols</p>
      </div>
      <div className="flex space-x-4">
        <a
          href="https://www.linkedin.com/in/raju-nichols-1172651a2/"
          target="_blank"
          rel="noopener noreferrer"
          className={`hover:text-blue-600 ${iconClasses}`}
        >
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a
          href="https://github.com/RajuNichols"
          target="_blank"
          rel="noopener noreferrer"
          className={`hover:text-blue-600 ${iconClasses}`}
        >
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
