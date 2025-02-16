import React from "react";
import Title, {
  TitleColor,
  TitleLevel,
  TitleType,
} from "../../../ui/title/title";
import {
  StyledExperienceItem,
  StyledExperienceItemCards,
  StyledExperienceItemTitles,
  StyledExperienceItemDescriptions,
  StyledExperienceItemTopCorner,
  StyledExperienceItemBottomCorner,
  StyledExperienceItemContent,
} from "./styled";
import Description, {
  DescriptionType,
} from "../../../ui/description/description";
import RotatingCard from "../../../ui/rotatingCard/rotatingCard";
import achievementsImage from "../../../../assets/images/icons/achievements.svg";
import codeImage from "../../../../assets/images/icons/code.svg";
import { slideFromLeftAnimation } from "../../../../assets/animations/slideFromLeftAnimation";
import { motion } from "framer-motion";
import { fadeInAnimation } from "../../../../assets/animations/fadeInAnimation";

function ExperienceItem({ experienceItemData }) {
  return (
    <StyledExperienceItem>
      <StyledExperienceItemTopCorner
        as={motion.div}
        variants={slideFromLeftAnimation}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={0}
      />
      <StyledExperienceItemContent
        as={motion.div}
        variants={fadeInAnimation}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={1}
      >
        <StyledExperienceItemTitles>
          <Title
            level={TitleLevel.H4}
            color={TitleColor.PRIMARY}
            type={TitleType.EXPERIENCE}
          >
            {experienceItemData.position}
          </Title>
          <Title
            level={TitleLevel.H4}
            color={TitleColor.PRIMARY}
            type={TitleType.EXPERIENCE}
          >
            {experienceItemData.title}
          </Title>
        </StyledExperienceItemTitles>
        <StyledExperienceItemDescriptions>
          <Description type={DescriptionType.EXPERIENCE}>
            {experienceItemData.time}
          </Description>
          <Description type={DescriptionType.EXPERIENCE}>
            {experienceItemData.description}
          </Description>
        </StyledExperienceItemDescriptions>
        <StyledExperienceItemCards>
          <RotatingCard
            title={experienceItemData.duties.title}
            items={experienceItemData.duties.data}
            image={codeImage}
          />
          <RotatingCard
            title={experienceItemData.achievements.title}
            items={experienceItemData.achievements.data}
            image={achievementsImage}
          />
        </StyledExperienceItemCards>
      </StyledExperienceItemContent>
      <StyledExperienceItemBottomCorner
        as={motion.div}
        variants={slideFromLeftAnimation}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={2}
      />
    </StyledExperienceItem>
  );
}

export default ExperienceItem;
