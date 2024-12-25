import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import ThemeSwitcher from "../utils/ThemeSwitcher";
import Navlist from "./Navlist";

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  return (
    <>
      {isSidebarOpen && (
        <div
          className="lg:hidden bg-black fixed top-0 bottom-0 right-0 left-0 z-10 bg-opacity-40 transition-all"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setIsSidebarOpen((prevState) => !prevState);
            }
          }}
        >
          <aside className="lg:hidden fixed top-0  right-0 h-screen w-[40%] bg-background bg-opacity-50 z-20 transition-all">
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
                <div className="md:hidden ">
                  <nav>
                    <ul className="text-text text-lg mt-8 px-4 flex flex-col gap-4 font-semibold">
                      <Navlist />
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="px-4 py-8">
                <ThemeSwitcher isSidebarOpen={isSidebarOpen} />
              </div>
            </div>
          </aside>
        </div>
      )}
    </>
  );
};

export default Sidebar;
