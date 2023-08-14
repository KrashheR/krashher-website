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
          <EducationPlace animationOrder={2} position={"htmlacademy"} title={"html academy"} description={'Изучал теорию по HTML, CSS, JS, решал задачи на тренажере. Проходил курсы "Навык Разметка по БЭМ" и "Создание семантической разметки по макету".'}/>
          <EducationPlace animationOrder={3} position={"learnjs"} title={"learnjs"} description={"Изучал теорию об особенностях и устройстве JavaScript, DOM, работе браузеров и их движков."}/>
          <EducationPlace animationOrder={5} position={"universityMag"} title={"Магистратура"} description={"Волгоградский государственный технический университет. Прикладная информатика. 2021-2023"}/>
          <EducationPlace animationOrder={4} position={"react"} title={"react"} description={'Проходил курс от HtmlAcademy "Вёрстка React-компонентов". Изучал статьи на Medium, Habr, других профильных сайтах.'}/>
          <EducationPlace animationOrder={10} position={"andOther"} title={"А также"} description={'Множество просмотренных уроков и курсов, как с англоязычных, так и с русскоязычных YouTube каналов :)'}/>
        </StyledEducationGrid>
      </StyledEducation>
    </Container>
  );
}

export default Education;