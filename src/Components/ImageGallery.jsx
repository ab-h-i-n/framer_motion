import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

const ImageGallery = ({ things, className }) => {
  const Img = [
    `https://source.unsplash.com/random/500×750/?${things}`,
    `https://source.unsplash.com/random/500×750/?${things}s`,
    `https://source.unsplash.com/random/500×750/?new ${things}s`,
  ];

  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: [`start end`, "end start"],
  });

  const sm = useTransform(scrollYProgress, [0, 1], ["40%", "0%"]);
  const md = useTransform(scrollYProgress, [0, 1], ["-40%", "0%"]);

  return (
    <div className={`relative ${className}`} ref={container}>
      {/* large image  */}
      <div className="lg:w-[500px] lg:h-[750px] w-[250px] h-[375px] overflow-hidden rounded-xl">
        <img
          className="object-cover min-h-full min-w-full"
          src={Img[0]}
          alt="large img"
        />
      </div>

      {/* small image bottom */}
      <motion.div
        drag
        style={{ x: "-50%", y: md }}
        className="lg:w-[250px] lg:h-[300px] w-[125px] h-[150px] overflow-hidden rounded-xl shadow-2xl absolute bottom-0 -translate-x-1/2 translate-y-1/4"
      >
        <img
          draggable="false"
          className="object-cover min-h-full min-w-full select-none"
          src={Img[1]}
          alt="large img"
        />
      </motion.div>

      {/* small image top */}
      <motion.div
        drag
        style={{ x: "50%", y: sm }}
        className="lg:w-[250px] lg:h-[300px] w-[125px] h-[150px] overflow-hidden rounded-xl shadow-2xl absolute top-0 right-0 "
      >
        <img
          draggable="false"
          className="min-h-full min-w-full object-cover select-none"
          src={Img[2]}
          alt="large img"
        />
      </motion.div>
    </div>
  );
};

export default ImageGallery;
