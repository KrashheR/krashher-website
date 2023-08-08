import React from "react";
import { StyledUl, StyledLi, StyledLink } from "./styled";

function NavigationUl ({ toggle }) {
  return (
    <StyledUl $toggle={toggle}>
      <StyledLi><StyledLink href="#aboutme">Обо мне</StyledLink></StyledLi>
      <StyledLi><StyledLink href="#skills">Навыки</StyledLink></StyledLi>
      <StyledLi><StyledLink href="#education">Образование</StyledLink></StyledLi>
      <StyledLi><StyledLink href="#projects">Проекты</StyledLink></StyledLi>
      <StyledLi><StyledLink href="#contacts">Контакты</StyledLink></StyledLi>
    </StyledUl>
  );
}

export default NavigationUl;