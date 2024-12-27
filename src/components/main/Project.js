import { useContext } from "react";
import { PROJECT_DATA } from "../../utils/constant";
import ProjectCard from "../ProjectCard";
import Underline from "../Underline";
import { motion } from "motion/react";
import MotionContext from "../../utils/context/MotionContext";
import Reveal from "../Reveal";

const Project = () => {
  const Motion = useContext(MotionContext);
  const backgroundImage2 = Motion[1];

  return (
    <motion.div
      className="text-text pb-20 xl:pb-0  lg:-pt-32"
      style={{ backgroundImage: backgroundImage2 }}
    >
      <section className="w-5/6 m-auto min-h-screen" id="projects">
        <div className="flex justify-center items-center gap-2 mt-16">
          <Underline />
          <Reveal>
            <h2 className="font-extrabold font-merriweather text-4xl md:text-6xl py-4 opacity-50 ">
              My Portfolio
            </h2>
          </Reveal>
        </div>

        <div className="flex justify-center items-center">
          <Reveal width={"fit-content"}>
            <h3 className="text-text font-merriweather text-2xl md:text-4xl py-4 text-center opacity-90">
              Finest Works
            </h3>
          </Reveal>
        </div>

        <div className="grid gap-8  justify-center mt-8 ">
          {PROJECT_DATA.map((data, index) => (
            <div
              key={index}
              className={`w-full flex ${
                index % 2 !== 0 ? "justify-end" : "justify-start"
              }`}
            >
              {" "}
              <ProjectCard data={data} index={index} />
            </div>
          ))}
        </div>
      </section>
    </motion.div>
  );
};

export default Project;
