import React from "react";
import Underline from "../Underline";
import {
  MY_INTRO,
  SKILL_ICONS_NAME,
  SOCIAL_ICONS_URL,
} from "../../utils/constant";
import SocialIcons from "../SocialIcons";

const About = () => {
  return (
    <section className="mt-12 md:mt-0 mx-auto min-h-screen w-11/12 sm:w-5/6 px-4 sm:px-0 " id="about">
      <div className="flex justify-center items-center gap-2">
        <Underline />
        <h2 className="font-extrabold font-merriweather text-4xl md:text-6xl py-4 opacity-50 ">
          About Me
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 mt-4 lg:mt-20 gap-12 md:gap-0 ">
        <div className="w-5/6 flex flex-col gap-0 md:gap-12 mx-auto">
          <div>
            <h3 className="text-text font-merriweather text-2xl lg:text-4xl py-4 text-center opacity-90 ">
            Personal Overview
            </h3>
            <p className="text-justify text-base lg:text-lg pb-8 leading-relaxed md:text-left">
              {MY_INTRO}
            </p>
          </div>
          <div className="flex justify-center space-x-8 text-xl text-secondary overflow-visible">
            {SOCIAL_ICONS_URL.map(({ name, url, icon }) => (
              <SocialIcons name={name} url={url} icon={icon} key={name} />
            ))}
          </div>
        </div>

        <div className="">
          <h3 className="text-text font-merriweather text-2xl lg:text-4xl py-4 text-center opacity-90">
          Skills & Tools
          </h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-8 py-4 place-items-center">
            {SKILL_ICONS_NAME.map((icon) => (
              <img
                src={`/asset/icons/${icon}`}
                alt={icon}
                key={icon}
                className="w-12 transition-all duration-150 ease-in hover:scale-110 hover:shadow-md hover:bg-gray-100 rounded-md hover:p-2 "
              ></img>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
