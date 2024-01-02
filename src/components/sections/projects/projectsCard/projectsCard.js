import React from "react";
import {
  StyledProjectsCard,
  StyledProjectsCardImage,
  StyledCardLinksContainer,
  StyledProjectsCardStack,
  StyledProjectsCardPicture,
} from "./styled";
import Title, { TitleColor, TitleLevel, TitleType } from "../../../ui/title/title";
import Stack from "../../../ui/stack/stack";
import Description from "../../../ui/description/description";
import Link, { LinkType } from "../../../ui/link/link";
import { motion } from "framer-motion";

function ProjectsCard({ projectData }) {
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
    <StyledProjectsCard
      as={motion.li}
      variants={showingAnimation}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <StyledProjectsCardPicture>
        <source
          srcSet={projectData.imageMobile}
          media="(max-width: 576px)"
        />
        <StyledProjectsCardImage
          src={projectData.image}
          alt={projectData.title + " скриншот"}
        />
      </StyledProjectsCardPicture>
      <Title
        level={TitleLevel.H3}
        color={TitleColor.PRIMARY}
        type={TitleType.CARD}
      >
        {projectData.title}
      </Title>
      <Description>{projectData.description}</Description>
      <StyledProjectsCardStack
        as={motion.ul}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Stack stackList={projectData.stack} cardStack={true} />
      </StyledProjectsCardStack>
      <StyledCardLinksContainer>
        <Link linkType={LinkType.GITHUB} href={projectData.github} target="_blank">
          Перейти на GitHub
        </Link>
        <Link linkType={LinkType.DEMO} href={projectData.demo} target="_blank">
          Посмотреть Demo
        </Link>
      </StyledCardLinksContainer>
    </StyledProjectsCard>
  );
}

export default ProjectsCard;
