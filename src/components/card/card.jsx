import React from "react";
import { StyledCard, StyledDemoLink, StyledDescription, StyledGithubLink, StyledImage, StyledLinksContainer } from "./styled";
import Button, { ButtonType } from "../button/button";
import { ButtonContainer } from "../button/styled";


function Card ( {data} ) {

  return (
    <StyledCard>
      <StyledImage src={require("../../assets/images/oculus.png")}/>
      <StyledDescription>
        {data.description}
      </StyledDescription>
      <StyledLinksContainer>
        <StyledGithubLink href={data.github} target="_blank">Перейти на GitHub</StyledGithubLink>
        <StyledDemoLink href={data.demo} target="_blank">Посмотреть Demo</StyledDemoLink>
      </StyledLinksContainer>
    </StyledCard>
  );
}

export default Card;