import React from "react";
import Navbar from "../navbar/navbar";
import { StyledHeader } from "./styled";
import Container from "../../containers/container/container";

function Header() {
  return (
    <StyledHeader>
      <Container>
        <Navbar />
      </Container>
    </StyledHeader>
  );
}

export default Header;
