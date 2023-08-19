import React from "react";
import { StyledContacts, StyledContactsContainer } from "./styled";
import Title, { TitleColor, TitleLevel, TitleType } from "../title/title";
import Link, { LinkType } from "../link/link";

function Contacts () {
  return(
    <StyledContacts id="contacts">
      <Title level={TitleLevel.H3} color={TitleColor.PRIMARY} type={TitleType.SECTION}>Мои контакты:</Title>
      <StyledContactsContainer>
        <Link linkType={LinkType.GITHUB} href={"https://github.com/KrashheR"} target="_blank">GitHub</Link>
        <Link linkType={LinkType.TELEGRAM} href={"https://t.me/IamKrashheR"} target="_blank">Telegram</Link>
        <Link linkType={LinkType.DEMO} href={"mailto:nikita.kucherencko.ya@yandex.ru"} target="_blank">Почта</Link>
      </StyledContactsContainer>
    </StyledContacts>
  );
}

export default Contacts;