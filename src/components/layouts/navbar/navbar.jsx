import React, { useState } from "react";
import { StyledToggler, StyledNav } from "./styled";
import Hamburger from "../../ui/hamburger/hamburger";
import NavigationUl from "./navigationUl/navigationUl";
import Title, { TitleColor, TitleLevel } from "../../ui/title/title";

function Navbar() {
  const [isToggle, setToggle] = useState(false);

  return (
    <StyledNav>
      <Title level={TitleLevel.H2} color={TitleColor.PRIMARY}>
        NIKITA KUCHERENKO
      </Title>
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
