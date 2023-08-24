import React from "react";
import Title, { TitleColor, TitleLevel } from "../../ui/title/title";
import Navbar from "../navbar/navbar";
import { StyledHeader } from "./styled";
import Container from "../../containers/container/container";

function Header() {
  return (
    <Container>
      <StyledHeader>
        <Title level={TitleLevel.H2} color={TitleColor.PRIMARY}>
          NIKITA KUCHERENKO
        </Title>
        <Navbar />
      </StyledHeader>
    </Container>
  );
}

export default Header;
