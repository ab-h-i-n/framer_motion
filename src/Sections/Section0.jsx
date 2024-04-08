import React, { useRef } from 'react'
import { useScroll,useTransform,motion } from "framer-motion";
const Section0 = () => {
  const container = useRef();
  const {scrollYProgress} = useScroll({
    target : container,
    offset: ['start center','end start']
  })

  const sm = useTransform(scrollYProgress , [0,1] , [1,10])

  return (
    <div  className='h-screen grid place-items-center text-[2rem] lg:text-[5rem] font-black'>
      <div><motion.div  style={{scale : sm}}>Scroll Down</motion.div></div>
    </div>
  )
}

export default Section0