import React from "react";
import { StyledStackImg, StyledStackItem } from "./styled";
import { motion } from "framer-motion";
import { stackData } from "./stack.config";

function Stack({ stackList, isTitleVisible }) {
  const stackAnimation = {
    hidden: {
      y: 30,
      opacity: 0,
      scale: 1.5,
    },
    visible: (custom) => ({
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { delay: custom * 0.2, duration: 0.45 },
    }),
  };

  return (
    <>
      {stackList.map((item, index) => {
        return (
          <StyledStackItem
            as={motion.li}
            custom={index + 1}
            variants={stackAnimation}
            key={index + stackData[item].title}
          >
            <StyledStackImg
              src={stackData[item].icon}
              alt={"логотип " + stackData[item].title}
              $cardStack={isTitleVisible}
            />
            {isTitleVisible && <p>{stackData[item].title}</p>}
          </StyledStackItem>
        );
      })}
    </>
  );
}

export default Stack;
