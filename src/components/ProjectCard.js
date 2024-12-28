import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect, useRef } from "react";
import MotionContext from "../utils/context/MotionContext";
import { motion, useAnimationControls, useInView } from "motion/react";

const ProjectCard = ({ data, index }) => {
  const { title, description, imgName, githubUrl, liveUrl, techIcons } = data;
  const Motion = useContext(MotionContext);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const cardControl = useAnimationControls();

  const border = Motion[2];
  const boxShadow = Motion[3];

  useEffect(() => {
    if (isInView) {
      cardControl.start("visible");
    }
  }, [isInView, cardControl]);

  const x = index % 2 !== 0 ? "-25%" : "25%";

  return (
    <motion.div
      variants={{ hidden: { x, opacity: 0 }, visible: { x: 0, opacity: 1 } }}
      initial="hidden"
      animate={cardControl}
      transition={{ duration: 0.5, ease: "easeIn" }}
      ref={ref}
      style={{
        border,
        boxShadow,
      }}
      className={`w-3/4 border p-6 rounded-lg flex gap-6 transition-all duration-300 ease-in-out hover:shadow-lg m-2 ${
        index % 2 !== 0
          ? "xl:flex-row-reverse flex-col justify-start bg-[#222C5D] hover:bg-[#1C2750]"
          : "xl:flex-row flex-col justify-end bg-[#131C45] hover:bg-[#0F183A]"
      }`}
    >
      {/* Image Section */}
      <div className="p-2">
        <motion.img
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          src={`asset/${imgName}`}
          alt={imgName}
          className="rounded-md"
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-col justify-around text-left">
        <div>
          {/* Title */}
          <h3 className="text-xl lg:text-2xl font-bold text-[#FDF9E8] font-merriweather mb-4">
            {title}
          </h3>

          <div className="flex flex-col">
            {/* Description */}
            <p className="text-sm lg:text-base text-gray-300 font-roboto mb-4">
              {description}
            </p>

            {/* icons */}
            <div className="flex gap-2 flex-wrap mb-4">
              {techIcons &&
                techIcons.map((icon) => (
                  <img
                    src={`asset/icons/${icon}.svg`}
                    alt="icon"
                    className="size-6"
                    key={icon}
                  ></img>
                ))}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 ">
          <a
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            className="text-gray-200 hover:text-white transition-all duration-300 flex items-center gap-2"
          >
            <FontAwesomeIcon
              icon={faGithub}
              className="text-xl hover:scale-105"
            />
            <span className="text-sm lg:text-base">GitHub</span>
          </a>
          <a
            href={liveUrl}
            target="_blank"
            rel="noreferrer"
            className="text-gray-200 hover:text-white transition-all duration-300 flex items-center gap-2"
          >
            <FontAwesomeIcon
              icon={faGlobe}
              className="text-xl hover:scale-105"
            />
            <span className="text-sm lg:text-base">Live Demo</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
