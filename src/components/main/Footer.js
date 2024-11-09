import {
  faGithub,
  faInstagram,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

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

          {/* Social Icons */}
          <div className="flex space-x-6">
            <a
              href="https://github.com/skimran-coder"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-gray-400 hover:text-primary transition-colors"
            >
              <FontAwesomeIcon
                icon={faGithub}
                className="w-5 h-5"
              ></FontAwesomeIcon>
            </a>
            <a
              href="https://www.linkedin.com/in/sk-imran-hussain/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-gray-400 hover:text-primary transition-colors"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                className="w-5 h-5"
              ></FontAwesomeIcon>
            </a>
            <a
              href="https://x.com/skimranhussain"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="text-gray-400 hover:text-primary transition-colors"
            >
              <FontAwesomeIcon
                icon={faXTwitter}
                className="w-5 h-5"
              ></FontAwesomeIcon>
            </a>
            <a
              href="https://www.instagram.com/skimranhussain4/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="text-gray-400 hover:text-primary transition-colors"
            >
              <FontAwesomeIcon
                icon={faInstagram}
                className="w-5 h-5"
              ></FontAwesomeIcon>
            </a>
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
