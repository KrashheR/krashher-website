import React from "react";
import { StyledEducationPlace } from "./styled";
import Title, {
  TitleColor,
  TitleLevel,
  TitleType,
} from "../../../ui/title/title";
import Description from "../../../ui/description/description";
import { motion } from "framer-motion";

function EducationPlaces({ data }) {
  const showingAnimation = {
    hidden: {
      opacity: 0,
    },
    visible: (custom) => ({
      opacity: 1,
      transition: {
        delay: custom * 0.5,
        duration: 3,
        ease: "easeInOut",
        type: "spring",
        bounce: 0.4,
      },
    }),
  };

  return (
    <>
      {data.map((item, index) => (
        <StyledEducationPlace
          as={motion.span}
          variants={showingAnimation}
          $position={item.position}
          key={index}
          custom={index}
        >
          <Title
            level={TitleLevel.H3}
            color={TitleColor.PRIMARY}
            type={TitleType.CARD}
          >
            {item.title}
          </Title>
          <Description>{item.description}</Description>
        </StyledEducationPlace>
      ))}
    </>
  );
}

export default EducationPlaces;
