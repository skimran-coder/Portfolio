import React, { useContext, useEffect, useState } from "react";
import DarkContext from "../../utils/context/DarkContext";
import { motion, useMotionTemplate, useMotionValue } from "motion/react";
import { animate, easeInOut } from "motion";
import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { SKILL_ICONS_NAME } from "../../utils/constant";
import SkillsIconSlider from "../SkillsIconSlider";

const Hero = () => {
  const COLORS = ["#ff4444", "#4488ff", "#4caf50", "#aa44ff", "#ffc107"];
  const color = useMotionValue(COLORS[0]);
  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 12px ${color}`;

  useEffect(() => {
    animate(color, COLORS, {
      ease: easeInOut,
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  return (
    <motion.div
      style={{
        backgroundImage,
      }}
    >
      <section className="w-5/6 m-auto lg:h-screen z-10" id="home">
        <div className="lg:h-5/6 flex flex-col-reverse lg:flex-row justify-between items-center mt-8 lg:mt-0">
          <div className="flex  flex-col max-w-xl gap-2 z-10">
            <h2 className="text-[#e0e0e0] font-extrabold font-merriweather mb-2 text-4xl md:text-6xl overflow-hidden">
              Sk. Imran Hussain
            </h2>
            <p className="text-[#e0e0e0] font-merriweather text-lg md:text-xl mb-4">
              Full Stack Developer
            </p>
            <p className="text-base md:text-lg text-[#e0e0e0] font-merriweather opacity-80 mb-6">
              I specialize in creating dynamic and responsive web applications,
              utilizing the latest technologies in the MERN stack.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 py-4">
              <motion.button
                style={{ border, boxShadow }}
                className="text-white font-semibold font-merriweather py-2 px-4 rounded"
                onClick={() =>
                  (window.location.href =
                    "mailto:skimranhussain4@example.com?subject=Hiring Inquiry")
                }
              >
                Hire Me!
              </motion.button>
              <a
                className="bg-gray-200 text-gray-800 font-semibold font-merriweather py-2 px-4 rounded shadow hover:bg-gray-300 transition duration-300 text-center"
                href="/asset/Imran_Resume.pdf"
                download="Sk_Imran_Hussain_CV.pdf"
              >
                Download CV
              </a>
            </div>
          </div>
          <div className="mb-8 lg:mt-0 p-2 ">
            <motion.img
              src={"/asset/myPhoto_3.jpg"}
              alt="header"
              style={{ border, boxShadow }}
              className="w-36 h-36 sm:w-72 sm:h-72 lg:w-96 lg:h-96 object-cover  rounded-full shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* component */}
      <SkillsIconSlider />

      <div className="absolute inset-0 z-0">
        <Canvas>
          <Stars radius={50} count={2500} factor={4} fade speed={2} />
        </Canvas>
      </div>
    </motion.div>
  );
};

export default Hero;
