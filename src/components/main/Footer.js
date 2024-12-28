import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import SocialIcons from "../SocialIcons";
import { SOCIAL_ICONS_URL } from "../../utils/constant";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 w-screen">
      <div className="w-5/6 mx-auto">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Personal Note & Name */}
          <p className="text-center md:text-left text-gray-400">
            Built with{" "}
            <FontAwesomeIcon
              icon={faHeart}
              className="text-blue-400"
            ></FontAwesomeIcon>{" "}
            by <span className="font-semibold">Sk Imran Hussain</span>
          </p>

          <p className="text-center text-gray-500 text-sm mt-6">
            &copy; {new Date().getFullYear()} Sk Imran Hussain. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
