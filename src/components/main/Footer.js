
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import SocialIcons from "../SocialIcons";
import { SOCIAL_ICONS_URL } from "../../utils/constant";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 w-screen">
      <div className="w-5/6 mx-auto">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Personal Note & Name */}
          <p className="text-center md:text-left text-gray-400">
            Built with{" "}
            <FontAwesomeIcon
              icon={faHeart}
              className="text-primary"
            ></FontAwesomeIcon>{" "}
            by <span className="font-semibold">Sk Imran Hussain</span>
          </p>

          {/* Navigation Links */}
          <div className="flex space-x-8">
            <a
              href="#projects"
              className="text-gray-400 hover:text-primary transition-colors"
            >
              Projects
            </a>
            <a
              href="#services"
              className="text-gray-400 hover:text-primary transition-colors"
            >
              Services
            </a>
            <a
              href="#about"
              className="text-gray-400 hover:text-primary transition-colors"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-gray-400 hover:text-primary transition-colors"
            >
              Contact
            </a>
          </div>

          <div className="flex space-x-6 text-gray-400">
          {SOCIAL_ICONS_URL.map(({ name, url, icon }) => (
              <SocialIcons name={name} url={url} icon={icon} key={name} />
            ))}

            
          </div>
        </div>

        <p className="text-center text-gray-500 text-sm mt-6">
          &copy; {new Date().getFullYear()} Sk Imran Hussain. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
