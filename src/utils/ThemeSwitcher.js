import React, { useEffect, useContext } from "react";
import DarkContext from "../utils/context/DarkContext";
import ThemeContext from "../utils/context/ThemeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-regular-svg-icons";
import { faMoon } from "@fortawesome/free-regular-svg-icons";

function ThemeSwitcher({ isSidebarOpen }) {
  const [isDark, setIsDark] = useContext(DarkContext);
  const [theme, setTheme] = useContext(ThemeContext);

  const toggleDarkMode = () => {
    localStorage.setItem("darkMode", !isDark);
    setIsDark(!isDark);
  };

  useEffect(() => {
    document.body.classList.toggle("dark-mode", isDark);
  }, [isDark]);

  // Change color theme
  const handleThemeChange = (e) => {
    localStorage.setItem("theme", e.target.value);
    setTheme(e.target.value);
  };

  useEffect(() => {
    // Remove previous theme classes
    const themeClasses = document.body.className
      .split(" ")
      .filter((className) => className.startsWith("theme-"));
    document.body.classList.remove(...themeClasses);

    // Add new theme class
    document.body.classList.add(`theme-${theme}`);
  }, [theme]);

  return (
    <div
      className={` ${
        isSidebarOpen
          ? "flex flex-wrap-reverse items-center gap-4"
          : "flex flex-wrap items-center gap-4"
      }`}
    >
      {/* Light/Dark Mode Toggle */}
      <div onClick={toggleDarkMode} className="cursor-pointer">
        {isDark ? (
          <FontAwesomeIcon
            icon={faSun}
            className={`${
              isSidebarOpen ? "text-text text-2xl px-2" : "text-2xl text-white"
            }`}
          ></FontAwesomeIcon>
        ) : (
          <FontAwesomeIcon
            icon={faMoon}
            className={`${
              isSidebarOpen ? "text-text text-2xl px-2" : "text-2xl text-white"
            }`}
          ></FontAwesomeIcon>
        )}
      </div>

      {/* Color Theme Selector */}
      <div className="flex flex-wrap items-center gap-2">
        <label
          htmlFor="themeSelector"
          className={`${
            isSidebarOpen
              ? "text-text text-lg font-semibold"
              : "text-lg font-semibold text-white"
          }`}
        >
          Theme:
        </label>
        <select
          id="themeSelector"
          value={theme}
          onChange={handleThemeChange}
          className="text-white bg-primary rounded-md p-2 shadow-sm focus:outline-none transition duration-300 cursor-pointer"
        >
          <option value="red">Red</option>
          <option value="blue">Blue</option>
          <option value="green">Green</option>
          <option value="purple">Purple</option>
          <option value="yellow">Yellow</option>
        </select>
      </div>
    </div>
  );
}

export default ThemeSwitcher;
