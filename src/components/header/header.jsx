import React from "react";
import Title, { TitleColor, TitleLevel } from "../title/title";
import Navbar from "../navbar/navbar";
import { StyledHeader } from "./styled";

function Header () {
  return(
    <StyledHeader>
      <Title level={TitleLevel.H2} color={TitleColor.PRIMARY}>NIKITA KUCHERENKO</Title>
      <Navbar />
    </StyledHeader>
  )
}

export default Header;