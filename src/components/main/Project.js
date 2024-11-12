import { PROJECT_DATA } from "../../utils/constant";
import ProjectCard from "../ProjectCard";
import Underline from "../Underline";

const Project = () => {
  return (
    <section
      className="w-5/6 m-auto mb-20 xl:mb-0 mt-8 sm:mt-0 lg:-mt-32 min-h-screen"
      id="projects"
    >
      <div className="flex justify-center items-center gap-2 mt-16">
        <Underline />
        <h2 className="font-extrabold font-merriweather text-4xl md:text-6xl py-4 opacity-50 ">
          My Portfolio
        </h2>
      </div>

      <h3 className="text-text font-merriweather text-2xl md:text-4xl py-4 text-center opacity-90">
        Finest Works
      </h3>

      <div className="grid gap-8  justify-center mt-8 lg:grid-cols-2 xl:grid-cols-3">
        {PROJECT_DATA.map((data, index) => (
          <ProjectCard data={data} key={index} />
        ))}
      </div>
    </section>
  );
};

export default Project;
