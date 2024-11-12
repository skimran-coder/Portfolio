import React, { useContext, useEffect, useState } from "react";
import DarkContext from "../../utils/context/DarkContext";

const Hero = () => {
  const [isDark] = useContext(DarkContext);
  const [photoPath, setPhotoPath] = useState("/asset/myPhoto_3.jpg");

  useEffect(() => {
    if (isDark) {
      setPhotoPath("/asset/myPhoto.jpg");
    } else {
      setPhotoPath("/asset/myPhoto_3.jpg");
    }
  }, [isDark]);

  return (
    <section className=" w-5/6 m-auto lg:h-screen" id="home">
      <div className="lg:h-5/6 flex flex-col lg:flex-row justify-between items-center mt-8 lg:mt-0">
        <div className="flex  flex-col max-w-xl gap-2">
          <h2 className="text-primary font-extrabold font-merriweather mb-2 text-4xl md:text-6xl overflow-hidden">
            Sk. Imran Hussain
          </h2>
          <p className="text-text font-merriweather text-lg md:text-xl mb-4">
            Full Stack Developer
          </p>
          <p className="text-base md:text-lg text-text font-merriweather opacity-80 mb-6">
            I specialize in creating dynamic and responsive web applications,
            utilizing the latest technologies in the MERN stack.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              className="text-white font-semibold font-merriweather py-2 px-4 rounded shadow transition duration-300"
              onClick={() =>
                (window.location.href =
                  "mailto:skimranhussain4@example.com?subject=Hiring Inquiry")
              }
            >
              Hire Me!
            </button>
            <a
              className="bg-gray-200 text-gray-800 font-semibold font-merriweather py-2 px-4 rounded shadow hover:bg-gray-300 transition duration-300 text-center"
              href="/asset/Imran_Resume.pdf"
              download="Sk_Imran_Hussain_CV.pdf"
            >
              Download CV
            </a>
          </div>
        </div>
        <div className="mt-8 lg:mt-0">
          <img
            src={photoPath}
            alt="header"
            className="w-72 h-72 lg:w-96 lg:h-96 object-cover  rounded-full shadow-lg border-4 border-primary"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
