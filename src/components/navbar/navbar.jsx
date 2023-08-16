import React, {  useState } from "react";
import { StyledNavToggler, StyledNav } from "./styled";
import Hamburger from "../hamburger/hamburger";
import NavigationUl from "../navigationUl/navigationUl";


function Navbar () {
  const [openHamburger, setHamburger] = useState(false);

  return (
    <StyledNav>
      <NavigationUl toggle={openHamburger} />
      <StyledNavToggler type="button" aria-label="Открыть меню навигации" onClick={() => setHamburger(!openHamburger)}>
        <Hamburger toggle={openHamburger} />
      </StyledNavToggler>
  </StyledNav>
  )
}

export default Navbar;