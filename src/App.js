import Header from "./components/main/Header";
import Hero from "./components/main/Hero";
import { useEffect, useState } from "react";
import DarkContext from "./utils/context/DarkContext";
import ThemeContext from "./utils/context/ThemeContext";
import Project from "./components/main/Project";
import Footer from "./components/main/Footer";
import Contact from "./components/main/Contact";
import { useMotionTemplate, useMotionValue } from "motion/react";
import { animate, easeInOut } from "motion/react";
import MotionContext from "./utils/context/MotionContext";

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

  const COLORS = ["#ff4444", "#4488ff", "#4caf50", "#aa44ff", "#ffc107"];
  const color = useMotionValue(COLORS[0]);
  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;
  const backgroundImage2 = useMotionTemplate`radial-gradient(150% 150% at 50% 100%, #020617 50%, ${color})`;

  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 12px ${color}`;

  useEffect(() => {
    animate(color, COLORS, {
      ease: easeInOut,
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  return (
    <DarkContext.Provider value={[isDark, setIsDark]}>
      <ThemeContext.Provider value={[theme, setTheme]}>
        <MotionContext.Provider
          value={[backgroundImage, backgroundImage2, border, boxShadow]}
        >
          <Header />
          <main>
            <Hero />
            <Project />
            <Contact />
          </main>
          <Footer />
        </MotionContext.Provider>
      </ThemeContext.Provider>
    </DarkContext.Provider>
  );
}

export default App;
