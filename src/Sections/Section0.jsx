import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
const Section0 = () => {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start center", "end start"],
  });

  const sm = useTransform(scrollYProgress, [0, 1], [1, 10]);

  return (
    <div className="h-screen grid place-items-center text-[2rem] lg:text-[5rem] font-black relative overflow-hidden">
      <video className="min-h-screen absolute object-cover" autoPlay muted loop>
        <source src="/vedio.mp4" type="video/mp4" />
      </video>
      <div>
        <motion.div style={{ scale: sm }} className="text-white">
          Scroll Down
        </motion.div>
      </div>
    </div>
  );
};

export default Section0;
