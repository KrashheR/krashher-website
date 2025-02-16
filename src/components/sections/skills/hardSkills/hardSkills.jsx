import { slideFromLeftAnimation } from "../../../../assets/animations/slideFromLeftAnimation";
import Stack from "../../../ui/stack/stack";
import {
  StyledHardSkills,
  StyledHardSkillsStack,
  StyledHardSkillsSubtitle,
} from "./styled";
import { motion } from "framer-motion";

function HardSkills({ title, stackList }) {
  return (
    <StyledHardSkills>
      <StyledHardSkillsSubtitle
        as={motion.h3}
        variants={slideFromLeftAnimation}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={1}
      >
        {title}
      </StyledHardSkillsSubtitle>
      <StyledHardSkillsStack
        as={motion.ul}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Stack stackList={stackList} isTitleVisible={true} />
      </StyledHardSkillsStack>
    </StyledHardSkills>
  );
}

export default HardSkills;
