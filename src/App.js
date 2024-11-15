import "./App.css";
import Header from "./components/main/Header";
import Hero from "./components/main/Hero";
import { useState } from "react";
import DarkContext from "./utils/context/DarkContext";
import ThemeContext from "./utils/context/ThemeContext";
import Project from "./components/main/Project";
import Footer from "./components/main/Footer";
import AboutMe from "./components/main/About";
import Services from "./components/main/Services";
import Contact from "./components/main/Contact";

function App() {
  const [isDark, setIsDark] = useState(() => {
    if (!localStorage.getItem("darkMode")) {
      return true;
    } else {
      return localStorage.getItem("darkMode") === "true";
    }
  });

  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "red";
  });

  return (
    <DarkContext.Provider value={[isDark, setIsDark]}>
      <ThemeContext.Provider value={[theme, setTheme]}>
        <Header />
        <main>
          <Hero />
          <Project />
          <Services />
          <AboutMe />
          <Contact />
        </main>
        <Footer />
      </ThemeContext.Provider>
    </DarkContext.Provider>
  );
}

export default App;
