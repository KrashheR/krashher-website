import React from 'react';
import { StyledUl, StyledLi, StyledLink } from './styled';

function NavigationUl({ isToggle, setToggle }) {
  const handleToggleChange = () => {
    setToggle(!isToggle);
  };

  return (
    <StyledUl $isToggle={isToggle}>
      <StyledLi>
        <StyledLink href="#skills" onClick={handleToggleChange}>
          Навыки
        </StyledLink>
      </StyledLi>
      <StyledLi>
        <StyledLink href="#education" onClick={handleToggleChange}>
          Образование
        </StyledLink>
      </StyledLi>
      <StyledLi>
        <StyledLink href="#projects" onClick={handleToggleChange}>
          Проекты
        </StyledLink>
      </StyledLi>
      <StyledLi>
        <StyledLink href="#contacts" onClick={handleToggleChange}>
          Контакты
        </StyledLink>
      </StyledLi>
    </StyledUl>
  );
}

export default NavigationUl;
