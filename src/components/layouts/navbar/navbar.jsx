import React, {  useState } from "react";
import { StyledToggler, StyledNav } from "./styled";
import Hamburger from "../../ui/hamburger/hamburger";
import NavigationUl from "./navigationUl/navigationUl";


function Navbar () {
  const [toggle, setToggle] = useState(false);

  return (
    <StyledNav>
      <NavigationUl toggle={toggle} setToggle={setToggle} />
      <StyledToggler type="button" aria-label="Открыть меню навигации" onClick={() => setToggle(!toggle)}>
        <Hamburger toggle={toggle} />
      </StyledToggler>
  </StyledNav>
  )
}

export default Navbar;