import React from "react";
import { StyledButton, StyledLi, StyledNav, StyledUl } from "./styled";

function Navbar () {
  return (
    <StyledNav>
      <StyledUl>
        <StyledLi>Обо мне</StyledLi>
        <StyledLi>Моё образование</StyledLi>
        <StyledLi>Мои проекты</StyledLi>
        <StyledLi>Контакты</StyledLi>
      </StyledUl>
      <StyledButton> asd  </StyledButton>
    </StyledNav>
  )
}

export default Navbar;