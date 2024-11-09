import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const ProjectCard = ({ data }) => {
  return (
    <div className="w-full h-[300px] border-t-4 border-r-8 border-text relative group transition-all duration-300 ease-in hover:border-t-0 hover:border-r-0 hover:border-b-4 hover:border-l-8 bg-secondary rounded-md shadow-md">
      <img
        src={`/asset/${data.imgName}`}
        alt="project screenshot"
        className="h-full w-full object-cover transition-all duration-300 ease-in group-hover:opacity-20 pl-1 pb-2 hover:p-0 rounded-md "
      ></img>

      <div className="absolute inset-0 flex justify-center items-center overflow-hidden transition-opacity duration-300 ease-in opacity-0  z-20 py-4 group-hover:opacity-100">
        <div className="flex flex-col items-center gap-4 max-w-sm px-6">
          <h4 className="text-text font-extrabold font-merriweather text-xl sm:text-2xl">
            {data.title}
          </h4>
          <p className="text-text font-bold font-roboto text-sm sm:text-base">
            {data.description}
          </p>
          <div className="flex gap-8 items-center">
            <a
              href={data.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="flex flex-col gap-1 items-center"
            >
              <FontAwesomeIcon
                icon={faGithub}
                className="text-2xl sm:text-4xl text-text cursor-pointer hover:scale-90 hover:shadow-md shadow-secondary transition-all duration-300 ease-in"
              ></FontAwesomeIcon>
              <p className="text-text text-sm">Github</p>
            </a>

            <a
              href={data.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="flex flex-col gap-1 items-center"
            >
              <FontAwesomeIcon
                icon={faGlobe}
                className="text-2xl sm:text-4xl text-text cursor-pointer hover:scale-90 hover:shadow-md shadow-secondary transition-all duration-300 ease-in"
              ></FontAwesomeIcon>
              <p className="text-text text-sm">Live</p>
            </a>
          </div>
        </div>
      </div>

      <div className="absolute z-10 w-full h-0 transition-all duration-300 ease-in opacity-0 bg-primary bottom-0 right-0 group-hover:opacity-50 group-hover:h-full "></div>
    </div>
  );
};

export default ProjectCard;
