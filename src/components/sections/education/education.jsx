import React from "react";
import { StyledEducation, StyledEducationGrid } from "./styled";
import Title, { TitleColor, TitleLevel, TitleType } from "../../ui/title/title";
import { motion } from "framer-motion";
import educationData from "../../../data/educationData.json";
import EducationPlaces from "./educationPlaces/educationPlaces";

function Education() {
  return (
    <StyledEducation id="education">
      <Title
        level={TitleLevel.H2}
        color={TitleColor.PRIMARY}
        type={TitleType.SECTION}
      >
        Образование
      </Title>
      <StyledEducationGrid
        as={motion.div}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <EducationPlaces data={educationData} />
      </StyledEducationGrid>
    </StyledEducation>
  );
}

export default Education;
