import React from "react";
import { StyledEducation, StyledEducationGrid } from "./styled";
import Title, { TitleColor, TitleLevel, TitleType } from "../title/title";
import EducationPlace from "../educationPlace/educationPlace";
import Container from "../container/container";
import { motion } from "framer-motion";

function Education() {
  return(
    <Container>
      <StyledEducation id="education">
        <Title level={TitleLevel.H2} color={TitleColor.PRIMARY} type={TitleType.SECTION}>Образование</Title>
        <StyledEducationGrid as={motion.div} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <EducationPlace animationOrder={1} position={"universityBac"} title={"Бакалавриат"} description={"Волгоградский государственный технический университет. Прикладная информатика. 2017-2021"}/>
          <EducationPlace animationOrder={2} position={"htmlacademy"} title={"html academy"} description={"Прикладная информатика. Бакалавриат. 2017-2021"}/>
          <EducationPlace animationOrder={3} position={"learnjs"} title={"learnjs"} description={"Прикладная информатика. Бакалавриат. 2017-2021"}/>
          <EducationPlace animationOrder={4} position={"universityMag"} title={"Магистратура"} description={"Волгоградский государственный технический университет. Прикладная информатика. 2021-2023"}/>
          <EducationPlace animationOrder={5} position={"react"} title={"react"} description={"Прикладная информатика. Бакалавриат. 2017-2021"}/>
        </StyledEducationGrid>
      </StyledEducation>
    </Container>
  );
}

export default Education;