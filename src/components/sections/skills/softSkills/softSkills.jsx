import React from "react";
import {
  StyledSoftSkill,
  StyledSoftSkills,
  StyledSoftSkillsSubtitle,
  StyledSoftSkillsContainer,
} from "./styled";
import Title, {
  TitleColor,
  TitleLevel,
  TitleType,
} from "../../../ui/title/title";
import Description from "../../../ui/description/description";
import { motion } from "framer-motion";
import { slideFromLeftAnimation } from "../../../../assets/animations/slideFromLeftAnimation";
import { fadeInWithBounceAnimation } from "../../../../assets/animations/fadeInWithBounceAnimation";

function SoftSkills({ title, softSkillsList }) {
  return (
    <StyledSoftSkills>
      <StyledSoftSkillsSubtitle
        as={motion.h3}
        variants={slideFromLeftAnimation}
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
            variants={fadeInWithBounceAnimation}
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
