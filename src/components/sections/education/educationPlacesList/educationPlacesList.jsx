import React from "react";
import { StyledEducationPlacesList } from "./styled";
import EducationPlace from "../educationPlace/educationPlace";
import { motion } from "framer-motion";
function EducationPlacesList({ data }) {
  return (
    <StyledEducationPlacesList
      as={motion.ul}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {data.map((item, index) => (
        <EducationPlace
          key={item.title + index}
          title={item.title}
          description={item.description}
          gridPosition={item.position}
          custom={index}
        />
      ))}
    </StyledEducationPlacesList>
  );
}

export default EducationPlacesList;
