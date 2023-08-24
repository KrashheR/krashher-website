import React from "react";
import Container from "../../containers/container/container";
import { StyledFooter } from "./styled";
import Contacts from "../../sections/contacts/contacts";

function Footer() {
  return (
    <StyledFooter>
      <Container>
        <Contacts />
      </Container>
    </StyledFooter>
  );
}

export default Footer;
