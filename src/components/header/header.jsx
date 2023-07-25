import React from "react";
import Title, { TitleColor, TitleLevel } from "../title/title";
import Navbar from "../navbar/navbar";
import { StyledHeader } from "./styled";

function Header () {
  return(
    <StyledHeader>
      <Title level={TitleLevel.H1} color={TitleColor.PRIMARY}>KrashheR</Title>
      <Navbar />
    </StyledHeader>
  )
}

export default Header;