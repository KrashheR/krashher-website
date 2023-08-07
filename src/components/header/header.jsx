import React from "react";
import Title, { TitleColor, TitleLevel } from "../title/title";
import Navbar from "../navbar/navbar";
import { StyledHeader, StyledHeaderTitle } from "./styled";
import Container from "../container/container";

function Header () {
  return(
    <Container>
      <StyledHeader>
        <StyledHeaderTitle>
          <Title level={TitleLevel.H2} color={TitleColor.PRIMARY}>NIKITA KUCHERENKO</Title>
        </StyledHeaderTitle>
        <Navbar />
      </StyledHeader>
    </Container>
  )
}

export default Header;