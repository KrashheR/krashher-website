import React from "react";
import { StyledDescription } from "./styled";

export const DescriptionType = {
  EXPERIENCE: "experience",
};

function Description({ children, type }) {
  return (
    <StyledDescription $descriptionType={type}>{children}</StyledDescription>
  );
}

export default Description;
