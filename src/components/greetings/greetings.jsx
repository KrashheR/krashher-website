import React from "react";
import { motion } from "framer-motion";
import { StyledGreetings } from "./styled";


function Greetings () {

  const blackBox = {
    initial: {
      height: "100vh",
    },
    animate: {
      height: 0,
      transition: {
        when: "afterChildren",
        duration: 1,
        ease: "easeInOut",
      },
    }
  };

  const showingText = {
    initial: {
      opacity:0,
      y: 30,
    },
    animate: custom => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.7,
        duration: 1,
        ease: "easeInOut",
      },
    }),
  };

  return (
    <StyledGreetings as={motion.span} variants={blackBox} initial="initial" animate="animate">
        <motion.h1 variants={showingText} custom={1}>Привет,</motion.h1>
        <motion.h1 variants={showingText} custom={2}>я Никита,</motion.h1>
        <motion.h1 variants={showingText} custom={3}>Веб-разработчик</motion.h1>
    </StyledGreetings>
  );
}

export default Greetings;

