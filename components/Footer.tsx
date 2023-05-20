"use client"
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className="w-screen h-auto py-4 flex justify-between items-center bg-white px-8 md:px-16 shadow">
      <div className="flex items-center space-x-2">
        <FontAwesomeIcon icon={faCopyright} />
        <p>2023 Raju Nichols</p>
      </div>
      <div className="flex space-x-4">
        <a href="https://www.linkedin.com/in/raju-nichols-1172651a2/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a href="https://github.com/RajuNichols" target="_blank" rel="noopener noreferrer" className=" hover:text-blue-600">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
      </div>
    </div>
  );
};

export default Footer;