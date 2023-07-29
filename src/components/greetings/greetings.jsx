import React from "react";
import { motion } from "framer-motion";
import { StyledGreetings } from "./styled";

const Greetings = ({ text }) => {
  let words = text.split(",");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 1.1, delayChildren: 1.1 * i },
      duration: 1
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 }
    },
    hidden: {
      opacity: 0,
      y: 40,
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 }
    },
  };

  return (

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <StyledGreetings>
          {words.map((word, index) => (
            <motion.span
              variants={child}
              key={index}
            >
              {word}
            </motion.span>
          ))}
        </StyledGreetings>
      </motion.div>

  );

};

export default Greetings;