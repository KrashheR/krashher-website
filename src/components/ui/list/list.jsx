import React from "react";
import { StyledUnorderedList, StyledListItem } from "./styled";
import { motion } from "framer-motion";
import { fadeInAnimation } from "../../../assets/animations/fadeInAnimation";

export const listType = {
  ORDERED: "ordered",
  UNORDERED: "unordered",
};

function List({ type, items }) {
  if (type === listType.UNORDERED) {
    return (
      <StyledUnorderedList>
        {items.map((item, index) => (
          <StyledListItem
            as={motion.li}
            variants={fadeInAnimation}
            key={item?.id}
            initial="hidden"
            animate="visible"
            custom={index + 1}
          >
            {item?.text}
          </StyledListItem>
        ))}
      </StyledUnorderedList>
    );
  }
}

export default List;
