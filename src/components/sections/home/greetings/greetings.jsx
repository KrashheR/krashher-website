import React from "react";
import { motion } from "framer-motion";
import { StyledGreetings } from "./styled";
import { showingText } from "../../../../assets/animations/showingTextAnimation";
import { blackBox } from "../../../../assets/animations/blackBoxAnimation";
import useIsDesktop from "../../../hooks/useIsDesktop";

function Greetings({ textData }) {
  const isDesktop = useIsDesktop(970);
  const lettersArr = isDesktop
    ? textData?.split("")
    : textData?.match(/[^,]+,?/g);

  return (
    <StyledGreetings
      as={motion.span}
      variants={blackBox}
      initial="initial"
      animate="animate"
      viewport={{ once: true }}
    >
      {lettersArr.map((item, index) => {
        return (
          <motion.h1 variants={showingText} custom={index}>
            {item}
          </motion.h1>
        );
      })}
    </StyledGreetings>
  );
}

export default Greetings;
