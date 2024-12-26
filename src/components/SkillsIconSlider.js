import { motion } from "motion/react";
import { SKILL_ICONS_NAME } from "../utils/constant";

const SkillsIconSlider = () => {
  return (
    <div>
      <div className="flex fadeGradient mt-8 lg:mt-0">
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="flex gap-6 pb-8 overflow-visible flex-shrink-0 "
        >
          {SKILL_ICONS_NAME.map((icon, index) => (
            <div
              key={index}
              className="flex justify-center items-center gap-2 py-2 px-4"
            >
              <img
                src={`/asset/icons/${icon}.svg`}
                alt={icon}
                className="size-8"
              ></img>
              <p className="text-[#e0e0e0] text-lg">{icon}</p>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="flex gap-6 pb-8 overflow-visible flex-shrink-0"
        >
          {SKILL_ICONS_NAME.map((icon, index) => (
            <div
              key={index}
              className="flex justify-center items-center gap-2 py-2 px-4 "
            >
              <img
                src={`/asset/icons/${icon}.svg`}
                alt={icon}
                className="size-8"
              ></img>
              <p className="text-[#e0e0e0] text-lg">{icon}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default SkillsIconSlider;
