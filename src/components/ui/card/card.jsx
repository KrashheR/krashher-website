import React from "react";
import {
  StyledCard,
  StyledImage,
  StyledCardLinksContainer,
  StyledStack,
} from "./styled";
import Title, { TitleColor, TitleLevel, TitleType } from "../title/title";
import Stack from "../stack/stack";
import Description from "../description/description";
import Link, { LinkType } from "../link/link";
import { motion } from "framer-motion";

function Card({ data }) {
  const showingAnimation = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.25,
        duration: 1,
      },
    },
  };

  return (
    <>
      {data.map((item, index) => (
        <StyledCard
          as={motion.div}
          variants={showingAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          key={index}
        >
          <StyledImage
            src={process.env.PUBLIC_URL + item.image}
            alt={item.title + " скриншот"}
          />
          <Title
            level={TitleLevel.H3}
            color={TitleColor.PRIMARY}
            type={TitleType.CARD}
          >
            {item.title}
          </Title>
          <Description>{item.description}</Description>
          <StyledStack
            as={motion.div}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Stack stackList={item.stack} cardStack={true} />
          </StyledStack>
          <StyledCardLinksContainer>
            <Link linkType={LinkType.GITHUB} href={item.github} target="_blank">
              Перейти на GitHub
            </Link>
            <Link linkType={LinkType.DEMO} href={item.demo} target="_blank">
              Посмотреть Demo
            </Link>
          </StyledCardLinksContainer>
        </StyledCard>
      ))}
      ;
    </>
  );
}

export default Card;
