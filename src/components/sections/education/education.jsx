import React from "react";
import { StyledEducation } from "./styled";
import Title, { TitleColor, TitleLevel, TitleType } from "../../ui/title/title";
import educationData from "../../../data/educationData.json";
import EducationPlacesList from "./educationPlacesList/educationPlacesList";

function Education() {
  return (
    <StyledEducation id="education">
      <Title
        level={TitleLevel.H2}
        color={TitleColor.PRIMARY}
        type={TitleType.SECTION}
      >
        Образование
      </Title>
      <EducationPlacesList
        data={educationData}
      />
    </StyledEducation>
  );
}

export default Education;
