import React from "react";
import { StyledSkills } from "./styled";
import Title, { TitleColor, TitleLevel, TitleType } from "../../ui/title/title";
import SoftSkills from "./softSkills/softSkills";
import HardSkills from "./hardSkills/hardSkills";
import { myInstruments, myStack, mySoftSkillsList } from "./skills.config";

function Skills() {
  return (
    <StyledSkills id="skills">
      <Title
        level={TitleLevel.H2}
        color={TitleColor.PRIMARY}
        type={TitleType.SECTION}
      >
        МОИ НАВЫКИ
      </Title>
      <HardSkills title="СТЕК ТЕХНОЛОГИЙ" stackList={myStack} />
      <HardSkills title="ИНСТРУМЕНТЫ И ПРОЧЕЕ" stackList={myInstruments} />
      <SoftSkills title="СОФТ СКИЛЛЫ" softSkillsList={mySoftSkillsList} />
    </StyledSkills>
  );
}

export default Skills;
