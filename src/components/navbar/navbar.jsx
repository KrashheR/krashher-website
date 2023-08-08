import React, { useEffect, useState } from "react";
import { StyledNavToggler, StyledNav } from "./styled";
import Hamburger from "../hamburger/hamburger";
import NavigationUl from "../navigationUl/navigationUl";


function Navbar () {
  const [openHamburger, setHamburger] = useState(false);

  useEffect(() => {
    const closeHamburger = ()=> {
      setHamburger(false);
    }

    document.addEventListener("mousedown", closeHamburger);
    return () => document.removeEventListener("mousdown", closeHamburger);
  }, []);

  return (
    <StyledNav>
    <NavigationUl toggle={openHamburger}/>
    <StyledNavToggler onClick={() => setHamburger(!openHamburger)}>
      <Hamburger toggle={openHamburger} />
    </StyledNavToggler>
  </StyledNav>
  )
}

export default Navbar;