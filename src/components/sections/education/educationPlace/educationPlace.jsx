import { StyledEducationPlace } from "./styled";
import Title, {
  TitleColor,
  TitleLevel,
  TitleType,
} from "../../../ui/title/title";
import { motion } from "framer-motion";
import Description from "../../../ui/description/description";

function EducationPlace({ title, description, gridPosition, custom }) {
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
    <StyledEducationPlace
      as={motion.li}
      $position={gridPosition}
      variants={showingAnimation}
      custom={custom}
    >
      <Title
        level={TitleLevel.H3}
        color={TitleColor.PRIMARY}
        type={TitleType.CARD}
      >
        {title}
      </Title>
      <Description>{description}</Description>
    </StyledEducationPlace>
  );
}

export default EducationPlace;
