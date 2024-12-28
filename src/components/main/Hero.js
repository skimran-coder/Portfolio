import React, { useContext } from "react";
import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import SkillsIconSlider from "../SkillsIconSlider";
import { motion } from "motion/react";
import MotionContext from "../../utils/context/MotionContext";

const Hero = () => {
  const [backgroundImage, backgroundImage2, border, boxShadow] =
    useContext(MotionContext);

  console.log(backgroundImage2);

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
            <h2 className="text-[#e0e0e0] font-extrabold font-merriweather mb-2 text-3xl sm:text-4xl md:text-6xl overflow-hidden">
              Sk. Imran Hussain.
            </h2>
            <h2 className="text-[#e0e0e0] font-extrabold font-merriweather mb-2 text-3xl sm:text-4xl md:text-6xl overflow-hidden opacity-60 ">
              Full stack developer.
            </h2>
            <p className="text-sm max-w-lg md:text-sm text-[#e0e0e0] font-merriweather opacity-80 mb-6">
              I specialize in creating dynamic and responsive web applications,
              utilizing the latest technologies in the MERN stack.
            </p>

            <div className="flex py-4 px-2">
              <motion.a
                style={{ border, boxShadow }}
                className=" text-gray-300 font-semibold font-merriweather py-2 px-6 rounded-full border border-gray-800 text-center flex gap-2 relative group"
                href="/asset/Imran_Resume.pdf"
                download="Sk_Imran_Hussain_CV.pdf"
              >
                <span className="group-hover:pr-4 transition-all duration-150 ease-in-out">
                  Download CV{" "}
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="opacity-0 size-6 absolute right-4 group-hover:right-2 group-hover:opacity-100 transition-all duration-150 ease-in-out -z-10"
                  shapeRendering="geometricPrecision"
                  textRendering="geometricPrecision"
                  imageRendering="optimizeQuality"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  viewBox="0 0 512 243.58"
                >
                  <path
                    fillRule="nonzero"
                    d="M373.57 0 512 120.75 371.53 243.58l-20.92-23.91 94.93-83L0 137.09v-31.75l445.55-.41-92.89-81.02z"
                    fill="#fff"
                  />
                </svg>
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
