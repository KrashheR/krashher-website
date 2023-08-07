import React from "react";
import { StyledUl, StyledLi, StyledLink } from "./styled";

function NavigationUl ({ toggle }) {
  return (
    <StyledUl $toggle={toggle}>
      <StyledLi><StyledLink href="#projects">Обо мне</StyledLink></StyledLi>
      <StyledLi><StyledLink href="#skills">Навыки</StyledLink></StyledLi>
      <StyledLi><StyledLink href="#education">Образование</StyledLink></StyledLi>
      <StyledLi><StyledLink href="#projects">Проекты</StyledLink></StyledLi>
      <StyledLi><StyledLink href="#projects">Контакты</StyledLink></StyledLi>
    </StyledUl>
  );
}

export default NavigationUl;