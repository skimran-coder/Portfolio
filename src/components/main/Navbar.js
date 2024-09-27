import React from "react";
import ThemeSwitcher from "../../utils/ThemeSwitcher";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLine } from "@fortawesome/free-brands-svg-icons";
import { faBars, faCross } from "@fortawesome/free-solid-svg-icons";

const Navbar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  console.log(setIsSidebarOpen);
  return (
    <>
      <div className="hidden md:block">
        <nav>
          <ul className="flex gap-4 text-lg">
            <li>Home</li>
            <li>Projects</li>
            <li>Services</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </div>
      <div
        className="lg:hidden"
        
      >
        {!isSidebarOpen && <FontAwesomeIcon icon={faBars} onClick={() => setIsSidebarOpen((prevState) => !prevState)}></FontAwesomeIcon>}
      </div>
      <div className="hidden lg:block">
        <ThemeSwitcher />
      </div>
    </>
  );
};

export default Navbar;
