import React from "react";
import Title, { TitleColor, TitleLevel } from "../title/title";

function Header () {
  return(
    <header>
      <Title level={TitleLevel.H1} color={TitleColor.PRIMARY}>KrashheR</Title>
    </header>
  )
}

export default Header;