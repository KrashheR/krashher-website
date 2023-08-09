import React from "react";
import { StyledSoftSkill } from "./styled";
import Title, { TitleColor, TitleLevel, TitleType } from "../title/title";
import Description from "../description/description";
import { motion } from "framer-motion";

function SoftSkill({ title, description }) {

  return(
    <StyledSoftSkill>
      <Title level={TitleLevel.H4} color={TitleColor.PRIMARY} type={TitleType.CARD}>{ title }</Title>
      <Description>{ description }</Description>
    </StyledSoftSkill>

  );
}

export default SoftSkill;