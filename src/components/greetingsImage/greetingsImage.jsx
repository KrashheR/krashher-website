import React from "react";
import { StyledGreetingsImage } from "./styled";
import { motion } from "framer-motion";

function GreetingsImage ({ imageSrc }) {

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 1, delayChildren: 2 }
    }
  };

  const child = {
    visible: {
      opacity: 1,
      border:"4px solid  #EDF738",
      borderRadius: "50%",
      y: 0,
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 }
    },
    hidden: {
      opacity: 0,
      border: "none",
      borderRadius: "50%",
      y: "50%",
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 }
    },
  };

  return (
    <motion.div
    variants={container}
    initial="hidden"
    animate="visible"
  >

    <motion.div variants={child}>
      <StyledGreetingsImage src={imageSrc} />
    </motion.div>

  </motion.div>



  )
}

export default GreetingsImage;