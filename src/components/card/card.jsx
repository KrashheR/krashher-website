import React from "react";
import { StyledCard, StyledDemoLink, StyledDescription, StyledGithubLink, StyledImage, StyledLinksContainer, StyledCardTitle } from "./styled";
import Title, { TitleColor, TitleLevel } from "../title/title";
import Stack from "../stack/stack";


function Card ({ data }) {

  return (
    <StyledCard>
      <StyledImage src={require("../../assets/images/oculus.png")}/>
      <StyledCardTitle>
        <Title level={TitleLevel.H3} color={TitleColor.PRIMARY}>{ data.title }</Title>
      </StyledCardTitle>
      <StyledDescription>
        {data.description}
      </StyledDescription>
      <Stack stackList={data.stack}></Stack>
      <StyledLinksContainer>
        <StyledDemoLink href={data.demo} target="_blank">Посмотреть Demo</StyledDemoLink>
        <StyledGithubLink href={data.github} target="_blank">Перейти на GitHub</StyledGithubLink>
      </StyledLinksContainer>
    </StyledCard>
  );
}

export default Card;