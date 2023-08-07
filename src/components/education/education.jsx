import React from "react";
import { StyledEducation, StyledEducationGrid } from "./styled";
import Title, { TitleColor, TitleLevel, TitleType } from "../title/title";
import EducationPlace from "../educationPlace/educationPlace";

function Education() {
  return(
    <StyledEducation>
      <Title level={TitleLevel.H2} color={TitleColor.PRIMARY} type={TitleType.SECTION}>Образование</Title>
      <StyledEducationGrid>
        <EducationPlace position={"universityBac"} title={"Бакалавриат"} description={"Волгоградский государственный технический университет. Прикладная информатика. 2017-2021"}/>
        <EducationPlace position={"htmlacademy"} title={"html academy"} description={"Прикладная информатика. Бакалавриат. 2017-2021"}/>
        <EducationPlace position={"learnjs"} title={"learnjs"} description={"Прикладная информатика. Бакалавриат. 2017-2021"}/>
        <EducationPlace position={"universityMag"} title={"Магистратура"} description={"Волгоградский государственный технический университет. Прикладная информатика. 2021-2023"}/>
        <EducationPlace position={"react"} title={"react"} description={"Прикладная информатика. Бакалавриат. 2017-2021"}/>
      </StyledEducationGrid>

    </StyledEducation>
  );
}

export default Education;