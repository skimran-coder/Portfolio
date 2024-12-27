import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "motion/react";

const Reveal = ({ children, width }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControl = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControl.start("visible");
      slideControls.start("visible");
    }
  }, [isInView, mainControl, slideControls]);

  return (
    <div ref={ref} style={{ width }} className="relative overflow-hidden">
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControl}
        transition={{ duration: 0.5, delay: 0.25, ease: "easeInOut" }}
      >
        {children}
      </motion.div>

      <motion.div
        variants={{ hidden: { right: 0 }, visible: { right: "100%" } }}
        initial="hidden"
        animate={slideControls}
        transition={{ duration: 0.5, ease: "easeIn" }}
        style={{
          position: "absolute",
          top: 4,
          bottom: 4,
          left: 0,
          right: 0,
          background: "#60a5fa",
          zIndex: 20,
        }}
      >
        {" "}
      </motion.div>
    </div>
  );
};

export default Reveal;
