import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

const Heading = ({ title }) => {
  const container = useRef();
  const description =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto velad voluptas voluptate. Optio voluptatem et molestias dolores cumofficiis vero obcaecati magnam quod labore, aspernatur vitae quam eavoluptatibus.";

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  return (
    <div
      className="w-full h-full flex flex-col justify-center px-20"
      ref={container}
    >
      <motion.h1
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
        className="font-black text-[5rem] lg:text-[10rem]"
      >
        {title}
      </motion.h1>
      <h1 className="font-black text-[1rem] lg:text-[2rem] text-gray-500 relative">
        {description}
      </h1>
    </div>
  );
};

export default Heading;
