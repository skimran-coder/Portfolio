import {
  faGithub,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Underline from "../Underline";
import { MY_INTRO } from "../../utils/constant";

const About = () => {
  const skills = [
    "JavaScript",
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "CSS & Tailwind",
    "Git & GitHub",
  ];

  return (
    <div className="w-4/6 mx-auto">
      <div className="flex justify-center items-center gap-2 mt-16">
        <h2 className="font-extrabold font-merriweather text-4xl lg:text-6xl py-4 opacity-50 ">
          About Me
        </h2>
        <Underline />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="w-5/6">
          <h3 className="text-text font-merriweather text-2xl lg:text-4xl py-4 text-center opacity-90">
            Introduction
          </h3>
          <p className="text-justify pb-8">
            {MY_INTRO}
          </p>
          <div className="flex justify-center space-x-8 text-xl text-secondary">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={faGithub}
                className="hover:text-primary transition"
              />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                className="hover:text-primary transition"
              />
            </a>
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={faXTwitter}
                className="hover:text-primary transition"
              />
            </a>
          </div>
        </div>
        <div className="">
          <h3 className="text-text font-merriweather text-2xl lg:text-4xl py-4 text-center opacity-90">
            Skills
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="px-4 py-2 border rounded-lg border-secondary text-center text-sm font-semibold hover:bg-primary hover:text-background transition"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
