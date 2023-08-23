import React, { useState } from 'react';
import { StyledToggler, StyledNav } from './styled';
import Hamburger from '../../ui/hamburger/hamburger';
import NavigationUl from './navigationUl/navigationUl';

function Navbar() {
  const [isToggle, setToggle] = useState(false);

  return (
    <StyledNav>
      <NavigationUl isToggle={isToggle} setToggle={setToggle} />
      <StyledToggler
        type="button"
        aria-label="Открыть меню навигации"
        onClick={() => setToggle(!isToggle)}
      >
        <Hamburger isToggle={isToggle} />
      </StyledToggler>
    </StyledNav>
  );
}

export default Navbar;
