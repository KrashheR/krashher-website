import React from "react";
import { StyledExperience, StyledExperienceList } from "./styled";
import Title, { TitleColor, TitleLevel, TitleType } from "../../ui/title/title";
import myExperienceList from "../../../data/experienceData.json";
import ExperienceItem from "./experienceItem/experienceItem";

function Experience() {
  return (
    <StyledExperience id="experience">
      <Title
        level={TitleLevel.H2}
        color={TitleColor.PRIMARY}
        type={TitleType.SECTION}
      >
        Опыт работы
      </Title>
      <StyledExperienceList>
        {myExperienceList.map((item) => (
          <ExperienceItem key={item?.id} experienceItemData={item} />
        ))}
      </StyledExperienceList>
    </StyledExperience>
  );
}

export default Experience;
