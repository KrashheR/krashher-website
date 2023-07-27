import React, { useState } from "react";
import { StyledHamburger, StyledNav } from "./styled";
import MenuToggler from "../menuToggler/menuToggler";
import NavigationUl from "../navigationUl/navigationUl";
import {StyledMenuToggler} from "../menuToggler/styled";



function Navbar () {
  const [isOpen, setOpen] = useState(false);

  return (
    <StyledNav>
    <NavigationUl toggle={isOpen}/>
    <StyledHamburger onClick={() => setOpen(!isOpen)}>
      <MenuToggler toggle={isOpen}/>
    </StyledHamburger>

  </StyledNav>
  )
}

export default Navbar;