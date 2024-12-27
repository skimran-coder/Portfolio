import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "motion/react";

const Underline = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      slideControls.start("visible");
    }
  }, [isInView, slideControls]);

  return (
    <div ref={ref} className="flex flex-col items-center">
      <motion.div
        variants={{
          hidden: { right: "0", width: 0 },
          visible: { right: "100%", width: "0.5rem" },
        }}
        initial="hidden"
        animate={slideControls}
        transition={{ duration: 0.5, ease: "easeIn", delay: 0.25 }}
        className=" h-12 md:h-20 bg-blue-400"
      ></motion.div>
    </div>
  );
};

export default Underline;
