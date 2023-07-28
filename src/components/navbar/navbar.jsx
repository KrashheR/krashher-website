import React, { useState } from "react";
import { StyledNavToggler, StyledNav } from "./styled";
import Hamburger from "../hamburger/hamburger";
import NavigationUl from "../navigationUl/navigationUl";


function Navbar () {
  const [isOpen, setOpen] = useState(false);

  return (
    <StyledNav>
    <NavigationUl toggle={isOpen}/>
    <StyledNavToggler onClick={() => setOpen(!isOpen)}>
      <Hamburger toggle={isOpen} />
    </StyledNavToggler>
  </StyledNav>
  )
}

export default Navbar;