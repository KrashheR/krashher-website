import React from "react";
import { StyledCard, StyledImage, StyledLinksContainer, StyledStack } from "./styled";
import Title, { TitleColor, TitleLevel, TitleType } from "../title/title";
import Stack from "../stack/stack";
import Description from "../description/description";
import Link, { LinkType } from "../link/link";


function Card ({ data }) {

  return (
    <StyledCard>
      <StyledImage src={require("../../assets/images/oculus.png")}/>
      <Title level={TitleLevel.H3} color={TitleColor.PRIMARY} type={TitleType.CARD}>{ data.title }</Title>
      <Description>
        {data.description}
      </Description>
      <StyledStack>
        <Stack stackList={data.stack}/>
      </StyledStack>
      <StyledLinksContainer>
        <Link linkType={LinkType.GITHUB} href={data.github} target="_blank">Перейти на GitHub</Link>
        <Link linkType={LinkType.DEMO} href={data.demo} target="_blank">Посмотреть Demo</Link>
      </StyledLinksContainer>
    </StyledCard>
  );
}

export default Card;