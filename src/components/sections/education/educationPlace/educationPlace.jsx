import { StyledEducationPlace } from "./styled";
import Title, {
  TitleColor,
  TitleLevel,
  TitleType,
} from "../../../ui/title/title";
import { motion } from "framer-motion";
import Description from "../../../ui/description/description";
import { fadeInAnimation } from "../../../../assets/animations/fadeInAnimation";

function EducationPlace({ title, description, gridPosition, custom }) {
  return (
    <StyledEducationPlace
      as={motion.li}
      $position={gridPosition}
      variants={fadeInAnimation}
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
