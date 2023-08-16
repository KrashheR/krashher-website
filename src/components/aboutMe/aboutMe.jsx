import React from "react";
import { StyledAboutMe, StyledAboutMeLink, StyledKeyword } from "./styled";
import Container from "../container/container";
import myPhotoImg from "../../assets/images/my_photo.webp";
import MyPhoto from "../myPhoto/myPhoto";
import { StyledAboutMeText } from "./styled";

function AboutMe () {

  return(
    <Container>
      <StyledAboutMe id="#aboutme">
        <MyPhoto imageSrc={myPhotoImg}></MyPhoto>
        <StyledAboutMeText><StyledKeyword>C детства увлекаюсь IT,</StyledKeyword> во время учёбы занимался геймдизайном и вёл <StyledAboutMeLink href="https://www.youtube.com/@krashher2690">YouTube</StyledAboutMeLink> канал об этом.
          Сейчас нацелен на становлении <StyledKeyword>Frontend Web разработчиком,</StyledKeyword> ведь эта сфера оказалась на удивленее интересной :)
          Активно изучаю <StyledKeyword>React,</StyledKeyword> грокаю алгоритмы на <StyledKeyword>Leetcode</StyledKeyword> и слушаю <StyledKeyword>веб-стандарты.</StyledKeyword></StyledAboutMeText>
      </StyledAboutMe>
    </Container>
  );
}

export default AboutMe;