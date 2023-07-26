import React from "react";
import { StyledNav } from "./styled";
import MenuToggler from "../menuToggler/menuToggler";
import { motion, useCycle } from "framer-motion";
import NavigationUl from "../navigationUl/navigationUl";



function Navbar () {
  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <motion.nav initial={false} animate={isOpen ? "open" : "closed"}>
      <StyledNav>
        <NavigationUl toggle={() => toggleOpen()}/>
        <MenuToggler toggle={() => toggleOpen()}/>
      </StyledNav>
    </motion.nav>
  )
}

export default Navbar;