import React from "react";
import { StyledCard, StyledImage, StyledCardLinksContainer, StyledStack } from "./styled";
import Title, { TitleColor, TitleLevel, TitleType } from "../title/title";
import Stack from "../stack/stack";
import Description from "../description/description";
import Link, { LinkType } from "../link/link";
import { motion } from "framer-motion";


function Card ({ data, animationOrder }) {

  const showingAnimation = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: animationOrder * 0.25,
        ease: "easeIn",
        duration: 0.5,
      },
    }
  }

  return (
    <StyledCard as={motion.div} variants={showingAnimation} initial="hidden" whileInView="visible" viewport={{ once: true }}>
      <StyledImage src={require("../../assets/images/oculus.webp")} alt={data.title + " скриншот"}/>
      <Title level={TitleLevel.H3} color={TitleColor.PRIMARY} type={TitleType.CARD}>{ data.title }</Title>
      <Description>
        {data.description}
      </Description>
      <StyledStack as={motion.div} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <Stack stackList={data.stack} cardStack={true}/>
      </StyledStack>
      <StyledCardLinksContainer>
        <Link linkType={LinkType.GITHUB} href={data.github} target="_blank">Перейти на GitHub</Link>
        <Link linkType={LinkType.DEMO} href={data.demo} target="_blank">Посмотреть Demo</Link>
      </StyledCardLinksContainer>
    </StyledCard>
  );
}

export default Card;