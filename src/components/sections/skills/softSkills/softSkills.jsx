import React from "react";
import { StyledSoftSkill, StyledSoftSkills, StyledSoftSkillsSubtitle, StyledSoftSkillsContainer } from "./styled";
import Title, {
  TitleColor,
  TitleLevel,
  TitleType,
} from "../../../ui/title/title";
import Description from "../../../ui/description/description";
import { motion } from "framer-motion";

function SoftSkills({ title, softSkillsList }) {
  const stackAnimation = {
    hidden: {
      y: 100,
      opacity: 0,
    },
    visible: (custom) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: custom * 0.3,
        ease: "easeInOut",
        type: "spring",
        bounce: 0.3,
      },
    }),
  };

  const titleAnimation = {
    hidden: {
      x: "-30%",
      opacity: 0,
    },
    visible: (custom) => ({
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: custom * 0.2,
        ease: "easeInOut",
        damping: 0.5,
      },
    }),
  };

  return (
    <StyledSoftSkills>
      <StyledSoftSkillsSubtitle
        as={motion.h3}
        variants={titleAnimation}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={3}
      >
        {title}
      </StyledSoftSkillsSubtitle>
      <StyledSoftSkillsContainer
        as={motion.div}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {softSkillsList.map((item, index) => (
          <StyledSoftSkill
            as={motion.span}
            variants={stackAnimation}
            key={index + item.title}
            custom={index + 1}
          >
            <Title
              level={TitleLevel.H4}
              color={TitleColor.PRIMARY}
              type={TitleType.SOFTSKILLS}
            >
              {item.title}
            </Title>
            <Description>{item.description}</Description>
          </StyledSoftSkill>
        ))}
      </StyledSoftSkillsContainer>
    </StyledSoftSkills>
  );
}

export default SoftSkills;
