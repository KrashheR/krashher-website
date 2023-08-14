import React from "react";
import { StyledEducationPlaceContainer } from "./styled";
import Title, { TitleColor, TitleLevel, TitleType } from "../title/title";
import Description from "../description/description";
import { motion } from "framer-motion";

function EducationPlace ({ position, title, description, animationOrder }) {
  const showingAnimation = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {delay: animationOrder * 0.25,
        duration: 4,
        ease: "easeInOut",
        type: "spring",
        bounce: 0.4,},
    }
  }

  return(
    <StyledEducationPlaceContainer as={motion.span} variants={showingAnimation} $position={ position }>
      <Title level={TitleLevel.H3} color={TitleColor.PRIMARY} type={TitleType.CARD}>{ title }</Title>
      <Description>{ description }</Description>
    </StyledEducationPlaceContainer>
  );
}

export default EducationPlace;