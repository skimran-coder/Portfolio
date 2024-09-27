import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import ThemeSwitcher from "../../utils/ThemeSwitcher";

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  return (
    <>
      {isSidebarOpen && (
        <aside className="lg:hidden fixed top-0  right-0 h-screen w-[40%] bg-background bg-opacity-50 z-10 ">
         <div className="flex flex-col h-full justify-between md:justify-start pb-8">
         <div className="flex flex-col">
          <div className="p-4 flex flex-col items-start ">
            <FontAwesomeIcon
              icon={faTimes}
              className="text-2xl text-text"
              onClick={() => setIsSidebarOpen((prevState) => !prevState)}
            ></FontAwesomeIcon>
          </div>
            <hr className="bg-text w-full"></hr>
          <div className="md:hidden">
          <nav >
          <ul className="text-text text-lg mt-8 px-4 flex flex-col gap-4 font-semibold ">
            <li>Home</li>
            <li>Projects</li>
            <li>Services</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
          </div>
        
          </div>
          <div className="px-4 py-8">
        <ThemeSwitcher isSidebarOpen={isSidebarOpen}/>
        </div>
         </div>
        </aside>
      )}
    </>
  );
};

export default Sidebar;
