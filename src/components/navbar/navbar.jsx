import React, {  useState } from "react";
import { StyledToggler, StyledNav } from "./styled";
import Hamburger from "../hamburger/hamburger";
import NavigationUl from "../navigationUl/navigationUl";


function Navbar () {
  const [openHamburger, setHamburger] = useState(false);

  return (
    <StyledNav>
      <NavigationUl toggle={openHamburger}/>
      <StyledToggler type="button" aria-label="Открыть меню навигации" onClick={() => setHamburger(!openHamburger)}>
        <Hamburger toggle={openHamburger} />
      </StyledToggler>
  </StyledNav>
  )
}

export default Navbar;