import React from "react";
import { StyledUl, StyledLi } from "./styled";

function NavigationUl ({ toggle }) {
  return (
    <StyledUl >
      <StyledLi>Обо мне</StyledLi>
      <StyledLi>Проекты</StyledLi>
      <StyledLi>Навыки</StyledLi>
      <StyledLi>Образование</StyledLi>
      <StyledLi>Контакты</StyledLi>
    </StyledUl>
  );
}

export default NavigationUl;