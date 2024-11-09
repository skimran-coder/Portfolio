import React from "react";
import ThemeSwitcher from "../utils/ThemeSwitcher";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Navlist from "./Navlist";

const Navbar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  return (
    <>
      <div className="hidden md:block">
        <nav>
          <ul className="flex gap-4 text-lg">
            <Navlist />
          </ul>
        </nav>
      </div>
      <div className="lg:hidden">
        {!isSidebarOpen && (
          <FontAwesomeIcon
            icon={faBars}
            onClick={() => setIsSidebarOpen((prevState) => !prevState)}
          ></FontAwesomeIcon>
        )}
      </div>
      <div className="hidden lg:block">
        <ThemeSwitcher />
      </div>
    </>
  );
};

export default Navbar;
