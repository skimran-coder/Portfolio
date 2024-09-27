import "./App.css";
import Header from "./components/main/Header";
import Hero from "./components/main/Hero";
import { useState } from "react";
import DarkContext from "./utils/context/DarkContext";
import ThemeContext from "./utils/context/ThemeContext";

function App() {
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "red";
  });

  return (
    <DarkContext.Provider value={[isDark, setIsDark]}>
      <ThemeContext.Provider value={[theme, setTheme]}>
        <Header />
        <Hero />
      </ThemeContext.Provider>
    </DarkContext.Provider>
  );
}

export default App;
