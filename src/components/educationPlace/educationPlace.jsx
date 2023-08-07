import React from "react";
import { StyledEducationPlaceContainer } from "./styled";
import Title, { TitleColor, TitleLevel, TitleType } from "../title/title";
import Description from "../description/description";

function EducationPlace ({ position, title, description }) {
  return(
    <StyledEducationPlaceContainer $position={ position }>
      <Title level={TitleLevel.H3} color={TitleColor.PRIMARY} type={TitleType.CARD}>{ title }</Title>
      <Description>{ description }</Description>
    </StyledEducationPlaceContainer>
  );
}

export default EducationPlace;