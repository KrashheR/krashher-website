import React from "react";
import { StyledAboutMe, StyledAboutMeLink, StyledKeyword } from "./styled";
import MyPhoto from "../../ui/myPhoto/myPhoto";
import { StyledAboutMeText } from "./styled";

function AboutMe() {
  return (
    <StyledAboutMe id="aboutMe">
      <MyPhoto
        imageSrc={"https://www.krashher.ru/images/photo/my_photo.webp"}
        imageSrcMobile={"https://www.krashher.ru/images/photo/my_photo_mobile.webp"}
      ></MyPhoto>
      <StyledAboutMeText>
        <StyledKeyword>C детства увлекаюсь разработкой,</StyledKeyword> во время учёбы
        занимался геймдизайном и вёл{" "}
        <StyledAboutMeLink href="https://www.youtube.com/@krashher_ai">
          YouTube
        </StyledAboutMeLink>{" "}
        канал об этом. Сейчас занимаюсь{" "}
        <StyledKeyword>Frontend разработкой,</StyledKeyword> ведь это
        сочетает две моих любимых вещи в IT: написание кода и создание интерфейсов :) Активно изучаю{" "}
        <StyledKeyword>React</StyledKeyword> и <StyledKeyword>TypeScript,</StyledKeyword> грокаю алгоритмы на{" "}
        <StyledKeyword>Leetcode</StyledKeyword> и слушаю{" "}
        <StyledKeyword>веб-стандарты.</StyledKeyword>
      </StyledAboutMeText>
    </StyledAboutMe>
  );
}

export default AboutMe;
