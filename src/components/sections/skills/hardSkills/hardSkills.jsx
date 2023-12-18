import Stack from "../../../ui/stack/stack";
import { StyledHardSkills, StyledHardSkillsStack, StyledHardSkillsSubtitle } from "./styled";
import { motion } from "framer-motion";

function HardSkills({ title, stackList }) {
  const titleAnimation = {
    hidden: {
      x: "-30%",
      opacity: 0,
    },
    visible: (custom) => ({
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: custom * 0.2,
        ease: "easeInOut",
        damping: 0.5,
      },
    }),
  };
  return (
    <StyledHardSkills>
      <StyledHardSkillsSubtitle
        as={motion.h3}
        variants={titleAnimation}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={1}
      >
        {title}
      </StyledHardSkillsSubtitle>
      <StyledHardSkillsStack
        as={motion.div}
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
