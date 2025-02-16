import React from "react";
import {
  StyledExperienceItemsList,
  StyledExperienceItemsTitle,
} from "./styled";
import List, { listType } from "../../../ui/list/list";
import { motion } from "framer-motion";
import { slideFromLeftAnimation } from "../../../../assets/animations/slideFromLeftAnimation";

function ExperienceItemList({ items, title }) {
  return (
    <StyledExperienceItemsList>
      <StyledExperienceItemsTitle
        as={motion.h3}
        variants={slideFromLeftAnimation}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={1}
      >
        {title}
      </StyledExperienceItemsTitle>
      <List type={listType.UNORDERED} items={items} />
    </StyledExperienceItemsList>
  );
}

export default ExperienceItemList;
