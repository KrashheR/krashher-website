import React from "react";
import { motion } from "framer-motion";
import { StyledGreetings } from "./styled";


function Greetings () {

  const blackBox = {
    initial: {
      height: "100vh",
      transition: {
        when: "afterChildren",
        duration: 1,
        ease: "easeInOut",
      },
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
      y: 20,
    },
    animate: custom => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom,
        duration: 1,
        ease: "easeInOut",
      },
      transitionEnd: { duration: 4}
    }),
  };

  const firstWord = {
    initial: {
      transition: {
        when: "afterChildren",
        duration: 1,
        ease: "easeInOut",
      },
    },
    animate: {
      opacity:0,
      transition: {
        when: "afterChildren",
        duration: 0.1,
        ease: "easeInOut",
      },
    },

  };


  return (
    <StyledGreetings as={motion.span} variants={blackBox} initial="initial" animate="animate">
        <motion.h1 variants={showingText} custom={1}>Привет,</motion.h1>
        <motion.h1 variants={showingText} custom={2}>я Никита,</motion.h1>
        <motion.h1 variants={showingText} custom={3}>веб-разработчик</motion.h1>
        <motion.h1 variants={showingText} custom={3}>Hello, I'm Nikita, web-developer</motion.h1>
    </StyledGreetings>
  );
}

export default Greetings;

