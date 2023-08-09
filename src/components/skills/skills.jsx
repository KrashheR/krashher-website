import React from "react";
import { StyledSkills, StyledSkillsSoftContainer, StyledSkillsStack, StyledSkillsSubtitle } from "./styled";
import Title, { TitleColor, TitleLevel, TitleType } from "../title/title";
import Stack from "../stack/stack";
import SoftSkill from "../softSkill/softSkill";
import Container from "../container/container";
import { motion } from "framer-motion";


function Skills () {
  const myStack = ["html", "css", "scss", "js", "ts", "react", "redux", "wordpress", "gulp", "webpack"];
  const otherStaff=["vscode",  "git", "figma", "styled-components", "bem"];

  const sectionAnimation = {
    hidden: {
      y: 100,
      opacity: 0,
    },
    visible: custom => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: custom * 0.1,
        ease: "easeInOut",
        type: "spring",
        bounce: 0.4,
      },})
  };

  return(
    <StyledSkills id="skills">
      <Container>
        <Title level={TitleLevel.H2} color={TitleColor.PRIMARY} type={TitleType.SECTION}>МОИ НАВЫКИ</Title>
        <StyledSkillsSubtitle as={motion.h3} variants={sectionAnimation} initial="hidden" whileInView="visible" viewport={{ once: true }}>МОЙ СТЭК</StyledSkillsSubtitle>
        <StyledSkillsStack as={motion.div} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <Stack stackList={myStack}/>
        </StyledSkillsStack>
        <StyledSkillsSubtitle as={motion.h3} variants={sectionAnimation} initial="hidden" whileInView="visible" viewport={{ once: true }}>ИНСТРУМЕНТЫ И ПРОЧЕЕ</StyledSkillsSubtitle>
        <StyledSkillsStack as={motion.div} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <Stack stackList={otherStaff}/>
        </StyledSkillsStack>
        <StyledSkillsSubtitle as={motion.h3} variants={sectionAnimation} initial="hidden" whileInView="visible" viewport={{ once: true }}>SOFT-СКИЛЛЫ</StyledSkillsSubtitle>
        <StyledSkillsSoftContainer as={motion.div} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <SoftSkill title={"Коммуникабельность"} description={"Могу найти связь с любым человекоум"}></SoftSkill>
          <SoftSkill title={"Самообучаемость"} description={"Ищу информацию "}></SoftSkill>
          <SoftSkill title={"Усидчивость"} description={"Могу просидеть весь день, увлекшись созданием сайта"}></SoftSkill>
          <SoftSkill title={"Пунктуальность"} description={"Могу найти связь с любым человекоум"}></SoftSkill>
          <SoftSkill title={"Целеустремленность"} description={"Могу найти связь с любым человекоум"}></SoftSkill>
          <SoftSkill title={"Доброжелательность"} description={":)"}></SoftSkill>
        </StyledSkillsSoftContainer>
      </Container>
    </StyledSkills>
  );
}

export default Skills;