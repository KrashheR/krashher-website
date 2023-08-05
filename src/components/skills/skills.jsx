import React from "react";
import { StyledSkills } from "./styled";
import Title, { TitleColor, TitleLevel, TitleType } from "../title/title";

function Skills () {

  return(
    <StyledSkills>
      <Title level={TitleLevel.H2} color={TitleColor.PRIMARY} type={TitleType.SECTION}>МОИ НАВЫКИ</Title>

    </StyledSkills>
  );
}

export default Skills;