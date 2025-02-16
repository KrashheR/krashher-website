import React from "react";
import { StyledStackImg, StyledStackItem } from "./styled";
import { motion } from "framer-motion";
import { stackData } from "./stack.config";
import { popUpFromDownAnimation } from "../../../assets/animations/popUpFromDownAnimation";

function Stack({ stackList, isTitleVisible }) {
  return (
    <>
      {stackList.map((item, index) => {
        return (
          <StyledStackItem
            as={motion.li}
            custom={index + 1}
            variants={popUpFromDownAnimation}
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
