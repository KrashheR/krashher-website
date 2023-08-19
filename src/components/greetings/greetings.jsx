import React from "react";
import { motion } from "framer-motion";
import { StyledGreetings } from "./styled";


function Greetings () {

  const blackBox = {
    initial: {
      opacity: 1,
      y: 0,
    },
    animate: {
      height: 0,
      opacity: 0,
      y: "-50%",
      transition: {
        when: "afterChildren",
        duration: 1,
        ease: "easeOut",
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
        delay: custom * 0.9,
        duration: 1,
        ease: "easeInOut",
      },
    }),
  };

  return (
    <StyledGreetings as={motion.span} variants={blackBox} initial="initial" animate="animate" viewport={{ once: true }}>
        <motion.h1 variants={showingText} custom={0}>Привет,</motion.h1>
        <motion.h1 variants={showingText} custom={1}>я Никита,</motion.h1>
        <motion.h1 variants={showingText} custom={2}>Веб-разработчик</motion.h1>
    </StyledGreetings>
  );
}

export default Greetings;

