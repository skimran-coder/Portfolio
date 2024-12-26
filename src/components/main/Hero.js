import React, { useEffect } from "react";
import { motion, useMotionTemplate, useMotionValue } from "motion/react";
import { animate, easeInOut } from "motion";
import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
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
          <div className="flex  flex-col max-w-2xl gap-4 z-10">
            <span className="text-blue-400 text-sm pl-2">Hi, my name is</span>
            <h2 className="text-[#e0e0e0] font-extrabold font-merriweather mb-2 text-4xl md:text-6xl overflow-hidden">
              Sk. Imran Hussain.
            </h2>
            <h2 className="text-[#e0e0e0] font-extrabold font-merriweather mb-2 text-4xl md:text-6xl overflow-hidden opacity-60">
              Full stack developer.
            </h2>
            <p className="text-sm max-w-lg md:text-sm text-[#e0e0e0] font-merriweather opacity-80 mb-6">
              I specialize in creating dynamic and responsive web applications,
              utilizing the latest technologies in the MERN stack.
            </p>
            <div className="flex py-4 px-2">
              <motion.a
                style={{ border, boxShadow }}
                z
                className=" text-gray-300 font-semibold font-merriweather py-2 px-6 rounded-full border border-gray-800 text-center"
                href="/asset/Imran_Resume.pdf"
                download="Sk_Imran_Hussain_CV.pdf"
              >
                <span className=" gap-2 items-center flex">
                  Download CV{" "}
                  <svg
                    width="25"
                    height="16"
                    viewBox="0 0 51 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <motion.path
                      d="M50.7071 8.70711C51.0976 8.31658 51.0976 7.68342 50.7071 7.29289L44.3431 0.928932C43.9526 0.538408 43.3195 0.538408 42.9289 0.928932C42.5384 1.31946 42.5384 1.95262 42.9289 2.34315L48.5858 8L42.9289 13.6569C42.5384 14.0474 42.5384 14.6805 42.9289 15.0711C43.3195 15.4616 43.9526 15.4616 44.3431 15.0711L50.7071 8.70711ZM0 9H50V7H0L0 9Z"
                      fill="white"
                      pathLength={0}
                    />
                  </svg>
                </span>
              </motion.a>
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
