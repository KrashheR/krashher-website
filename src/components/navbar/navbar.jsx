import React, { useEffect, useState, useRef } from "react";
import { StyledNavToggler, StyledNav } from "./styled";
import Hamburger from "../hamburger/hamburger";
import NavigationUl from "../navigationUl/navigationUl";


function Navbar () {
  const [openHamburger, setHamburger] = useState(false);
  const hamburgerRef = useRef(null);

  useEffect(() => {
    const closeHamburger = event => {
      if (hamburgerRef.current && hamburgerRef.current.contains(event.target)) {
        return;
      }
      setHamburger(false);
    }

    document.addEventListener("mousedown", closeHamburger);
    return () => document.removeEventListener("mousdown", closeHamburger);
  }, [openHamburger]);

  return (
    <StyledNav>
    <NavigationUl toggle={openHamburger}/>
    <StyledNavToggler ref={hamburgerRef} onClick={() => setHamburger(!openHamburger)}>
      <Hamburger  toggle={openHamburger} />
    </StyledNavToggler>
  </StyledNav>
  )
}

export default Navbar;