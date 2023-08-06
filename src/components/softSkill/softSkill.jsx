import React from "react";
import { StyledSoftSkill, StyledSoftSkillDescription, StyledSoftSkillTitle } from "./styled";

function SoftSkill({ title, description }) {
  return(
    <StyledSoftSkill>
      <StyledSoftSkillTitle>{ title }</StyledSoftSkillTitle>
      <StyledSoftSkillDescription>{ description }</StyledSoftSkillDescription>
    </StyledSoftSkill>

  );
}

export default SoftSkill;