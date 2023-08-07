import React from "react";
import { StyledContacts } from "./styled";
import Title, { TitleColor, TitleLevel, TitleType } from "../title/title";

function Contacts () {
  return(
    <StyledContacts>
      <Title level={TitleLevel.H3} color={TitleColor.PRIMARY} type={TitleType.SECTION}>Контакты</Title>

    </StyledContacts>
  );
}

export default Contacts;