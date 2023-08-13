import React from "react";
import { StyledSkills, StyledSkillsSoftContainer, StyledSkillsStack, StyledSkillsSubtitle } from "./styled";
import Title, { TitleColor, TitleLevel, TitleType } from "../title/title";
import Stack from "../stack/stack";
import SoftSkills from "../softSkills/softSkills";
import Container from "../container/container";
import { motion } from "framer-motion";


function Skills () {
  const myStack = ["html", "css", "scss", "js", "ts", "react", "redux", "wordpress", "gulp", "webpack"];
  const otherStaff=["vscode",  "git", "figma", "styled-components", "bem"];
  const softSkillsList=[
    ["Коммуникабельность", "Легко нахожу общий язык с окружающими меня людьми"],
    ["Умение работать в команде", "Имею опыт командной разработки проектов"],
    ["Любовь к учёбе", "Имею тягу к новым знаниям, в особенности в сфере IT"],
    ["Внимание к деталям", "Готовность и умение делать сайт Pixel Perfect всегда со мной"],
    ["Креативность", "Могу подойти к решению задачи с творческой стороны"],
    ["Ответственность", "Имею опыт выполнения поставленных задач в срок"]
];

  const mainAnimation = {
    hidden: {
      x: "-30%",
      opacity: 0,
    },
    visible: custom => ({
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: custom * 0.2,
        ease: "easeInOut",
        damping: 0.5,
      },})
  };

  return(
    <StyledSkills id="skills">
      <Container>
        <Title level={TitleLevel.H2} color={TitleColor.PRIMARY} type={TitleType.SECTION}>МОИ НАВЫКИ</Title>
        <StyledSkillsSubtitle as={motion.h3} variants={mainAnimation} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}>МОЙ СТЭК</StyledSkillsSubtitle>
        <StyledSkillsStack as={motion.div} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <Stack stackList={myStack} cardStack={false}/>
        </StyledSkillsStack>
        <StyledSkillsSubtitle as={motion.h3} variants={mainAnimation} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2}>ИНСТРУМЕНТЫ И ПРОЧЕЕ</StyledSkillsSubtitle>
        <StyledSkillsStack as={motion.div} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <Stack stackList={otherStaff} cardStack={false}/>
        </StyledSkillsStack>
        <StyledSkillsSubtitle as={motion.h3} variants={mainAnimation} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={3}>SOFT-СКИЛЛЫ</StyledSkillsSubtitle>
        <StyledSkillsSoftContainer as={motion.div} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <SoftSkills softSkillsList={softSkillsList} />
        </StyledSkillsSoftContainer>
      </Container>
    </StyledSkills>
  );
}

export default Skills;