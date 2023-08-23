import React from "react";
import { StyledUl, StyledLi, StyledLink } from "./styled";

function NavigationUl ({ toggle, setToggle }) {
  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <StyledUl $toggle={toggle}>
      <StyledLi><StyledLink href="#skills" onClick={handleToggle}>Навыки</StyledLink></StyledLi>
      <StyledLi><StyledLink href="#education" onClick={handleToggle}>Образование</StyledLink></StyledLi>
      <StyledLi><StyledLink href="#projects" onClick={handleToggle}>Проекты</StyledLink></StyledLi>
      <StyledLi><StyledLink href="#contacts" onClick={handleToggle}>Контакты</StyledLink></StyledLi>
    </StyledUl>
  );
}

export default NavigationUl;