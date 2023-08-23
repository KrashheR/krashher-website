import React from "react";
import { StyledSoftSkill } from "./styled";
import Title, { TitleColor, TitleLevel, TitleType } from "../../../ui/title/title";
import Description from "../../../ui/description/description";
import { motion } from "framer-motion";

function SoftSkills({ softSkillsList }) {

  const stackAnimation = {
    hidden: {
      y: 100,
      opacity: 0,
    },
    visible: custom => ({
      y: 0,
      opacity: 1,
      transition: {delay: custom * 0.3,
                    ease: "easeInOut",
                    type: "spring",
                    bounce: 0.3,},
  })
}

  return(
    <>
      {softSkillsList.map((item, index) =>(
        <StyledSoftSkill as={motion.span} variants={stackAnimation} key={index} custom={index+1}>
          <Title level={TitleLevel.H4} color={TitleColor.PRIMARY} type={TitleType.SOFTSKILLS}>{ item[0] }</Title>
          <Description>{ item[1] }</Description>
        </StyledSoftSkill>
      ))}
    </>
  );
}

export default SoftSkills;