import React from "react";
import { StyledAboutMe, StyledAboutMeLink } from "./styled";
import Container from "../container/container";
import myPhotoImg from "../../assets/images/my_photo.jpg";
import MyPhoto from "../myPhoto/myPhoto";
import Description from "../description/description";
import { StyledAboutMeText } from "./styled";

function AboutMe () {

  return(
    <Container>
      <StyledAboutMe>
        <MyPhoto imageSrc={myPhotoImg}></MyPhoto>
        <StyledAboutMeText>Я с детства увлекаюсь IT, во время учёбы занимался геймдизайном и вёл <StyledAboutMeLink href="https://www.youtube.com/@krashher2690">YouTube</StyledAboutMeLink> канал об этом.
          Сейчас полностью сконцентрирован на становлении frontend web разработчиком.
          Активно изучаю реакт, грокаю алгоритмы на leetcode и слушаю веб-стандарты.</StyledAboutMeText>
      </StyledAboutMe>
    </Container>
  );
}

export default AboutMe;