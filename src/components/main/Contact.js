import React, { useContext, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
  faGamepad,
  faBook,
  faPen,
  faLaptop,
} from "@fortawesome/free-solid-svg-icons";
import Underline from "../Underline";
import { SOCIAL_ICONS_URL } from "../../utils/constant";
import SocialIcons from "../SocialIcons";
import Reveal from "../Reveal";
import QrCode from "../QrCode";
import MotionContext from "../../utils/context/MotionContext";
import { motion, useAnimationControls, useInView } from "motion/react";

const Contact = () => {
  const Motion = useContext(MotionContext);
  const backgroundImage = Motion[0];
  const border = Motion[2];
  const boxShadow = Motion[3];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const cardControl = useAnimationControls();

  useEffect(() => {
    if (isInView) {
      cardControl.start("visible");
    }
  }, [isInView, cardControl]);

  return (
    <motion.div
      style={{ backgroundImage }}
      className="min-h-screen w-screen  text-[#FDF9E8] "
    >
      <section
        className="min-h-screen mt-12 md:mt-0 flex flex-col justify-around items-center px-4 sm:px-8 w-5/6 mx-auto"
        id="contact"
      >
        <div>
          <div className="flex justify-center items-center gap-2">
            <Reveal width={"fit-content"} direction={"left"}>
              <h2 className="font-extrabold fonat-merriweather text-4xl md:text-6xl py-4 opacity-50 ">
                Contact Me
              </h2>
            </Reveal>
            <Underline />
          </div>

          <Reveal width={"fit-content"} direction={"left"}>
            <h3 className="font-merriweather text-lg md:text-xl py-4 text-center opacity-90">
              I’m here to help with your projects, questions, or just to
              connect!
            </h3>
          </Reveal>
        </div>

        {/* Content for the two boxes */}
        <div
          className="w-full flex flex-col md:flex-row justify-center gap-4 lg:gap-8 mt-8"
          ref={ref}
        >
          {/* Left Box */}

          <motion.div
            variants={{
              hidden: { scale: 0, opacity: 0 },
              visible: { scale: 1, opacity: 1 },
            }}
            initial="hidden"
            animate={cardControl}
            transition={{ duration: 0.5, ease: "easeIn" }}
            style={{ border, boxShadow }}
            className="border w-full md:w-1/2 lg:w-1/3 p-8 space-y-6 bg-[#1E1F28] rounded-md flex flex-col justify-between md:m-2"
          >
            <div className="flex  flex-col gap-2">
              <h4 className="font-bold text-xl text-primary-light">About Me</h4>
              <p className="text-sm text-gray-300">
                I’m Sk Imran Hussain, a passionate web developer who loves
                building responsive applications. When I'm not coding, you'll
                find me reading, writing, or gaming.
              </p>
            </div>

            <div className="flex justify-around items-center mt-4">
              <div className="flex flex-col items-center">
                <FontAwesomeIcon
                  icon={faLaptop}
                  className="text-2xl text-primary-light"
                />
              </div>
              <div className="flex flex-col items-center">
                <FontAwesomeIcon
                  icon={faGamepad}
                  className="text-2xl text-primary-light"
                />
              </div>
              <div className="flex flex-col items-center">
                <FontAwesomeIcon
                  icon={faBook}
                  className="text-2xl text-primary-light"
                />
              </div>
              <div className="flex flex-col items-center">
                <FontAwesomeIcon
                  icon={faPen}
                  className="text-2xl text-primary-light"
                />
              </div>
            </div>
          </motion.div>

          {/* Right Box */}
          <motion.div
            variants={{
              hidden: { scale: 0, opacity: 0 },
              visible: { scale: 1, opacity: 1 },
            }}
            initial="hidden"
            animate={cardControl}
            transition={{ duration: 0.5, ease: "easeIn" }}
            style={{ border, boxShadow }}
            className="border w-full md:w-1/2 p-8 space-y-6 bg-[#1E1F28] rounded-md md:m-2"
          >
            <h4 className="font-bold text-xl text-primary-light">
              Connect with Me
            </h4>
            <p className="text-sm">
              Reach out to me via email, phone, or connect with me on social
              media platforms. I'm always open to collaborating or discussing
              new projects.
            </p>

            <div className="flex justify-between items-center">
              <div className="flex justify-center mt-4">
                <QrCode url={"https://linktr.ee/skimrancoder"} maxWidth={50} />
              </div>

              <div className="flex justify-center gap-4 mt-4">
                {SOCIAL_ICONS_URL.map(({ name, url, icon }) => (
                  <SocialIcons key={name} name={name} url={url} icon={icon} />
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Get in touch button */}
        <motion.button
          style={{ border, boxShadow }}
          className="text-gray-300 font-semibold font-merriweather py-2 px-6 border-gray-800 text-center flex gap-2 rounded-full border my-8"
          onClick={() =>
            (window.location.href =
              "mailto:skimranhussain4@example.com?subject=Hiring Inquiry")
          }
        >
          <span className="">Get in touch</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-6"
            shapeRendering="geometricPrecision"
            textRendering="geometricPrecision"
            imageRendering="optimizeQuality"
            fillRule="evenodd"
            clipRule="evenodd"
            viewBox="0 0 512 243.58"
          >
            <path
              variants={{
                hidden: { right: "150%" },
                visible: { right: "50%" },
              }}
              fillRule="nonzero"
              d="M373.57 0 512 120.75 371.53 243.58l-20.92-23.91 94.93-83L0 137.09v-31.75l445.55-.41-92.89-81.02z"
              fill="#fff"
            />
          </svg>
        </motion.button>
      </section>
    </motion.div>
  );
};

export default Contact;
