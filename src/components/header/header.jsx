import React from "react";
import Title, { TitleColor, TitleLevel } from "../title/title";
import Navbar from "../navbar/navbar";
import { StyledHeader, StyledHeaderTitle } from "./styled";

function Header () {
  return(
    <StyledHeader>
      <StyledHeaderTitle>
        <Title level={TitleLevel.H2} color={TitleColor.PRIMARY}>NIKITA KUCHERENKO</Title>
      </StyledHeaderTitle>
      <Navbar />
    </StyledHeader>
  )
}

export default Header;