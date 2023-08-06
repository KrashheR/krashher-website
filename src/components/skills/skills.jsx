import React from "react";
import { StyledSkills, StyledSkillsSoft, StyledSkillsSoftContainer, StyledSkillsStack, StyledSkillsSubtitle } from "./styled";
import Title, { TitleColor, TitleLevel, TitleType } from "../title/title";
import Stack from "../stack/stack";
import SoftSkill from "../softSkill/softSkill";

function Skills () {
  const myStack = ["html", "css", "scss", "js", "ts", "react", "redux", "wordpress", "gulp", "webpack"];
  const otherStaff=["vscode",  "git", "figma", "styled-components", "bem"]

  return(
    <StyledSkills id="skills">
      <Title level={TitleLevel.H2} color={TitleColor.PRIMARY} type={TitleType.SECTION}>МОИ НАВЫКИ</Title>
      <StyledSkillsSubtitle>МОЙ СТЭК</StyledSkillsSubtitle>
      <StyledSkillsStack>
        <Stack stackList={myStack}/>
      </StyledSkillsStack>
      <StyledSkillsSubtitle>ИНСТРУМЕНТЫ И ПРОЧЕЕ</StyledSkillsSubtitle>
      <StyledSkillsStack>
        <Stack stackList={otherStaff}/>
      </StyledSkillsStack>
      <StyledSkillsSubtitle>SOFT-СКИЛЛЫ</StyledSkillsSubtitle>
      <StyledSkillsSoftContainer>
        <SoftSkill title={"Коммуникабельность"} description={"Могу найти связь с любым человекоум"}></SoftSkill>
        <SoftSkill title={"Самообучаемость"} description={"Ищу информацию "}></SoftSkill>
        <SoftSkill title={"Усидчивость"} description={"Могу просидеть весь день, увлекшись созданием сайта"}></SoftSkill>
        <SoftSkill title={"Пунктуальность"} description={"Могу найти связь с любым человекоум"}></SoftSkill>
        <SoftSkill title={"Целеустремленность"} description={"Могу найти связь с любым человекоум"}></SoftSkill>
        <SoftSkill title={"Доброжелательность"} description={":)"}></SoftSkill>
      </StyledSkillsSoftContainer>

    </StyledSkills>
  );
}

export default Skills;