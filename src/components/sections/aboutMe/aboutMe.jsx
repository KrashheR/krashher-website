import React from "react";
import { StyledAboutMe, StyledAboutMeLink, StyledKeyword } from "./styled";
import MyPhoto from "../../ui/myPhoto/myPhoto";
import { StyledAboutMeText } from "./styled";
import myDesktopPhoto from "../../../assets/images/photos/my_photo.webp";
import myMobilePhoto from "../../../assets/images/photos/my_photo_mobile.webp";

function AboutMe() {
  return (
    <StyledAboutMe id="aboutMe">
      <MyPhoto imageSrc={myDesktopPhoto} imageSrcMobile={myMobilePhoto} />
      <StyledAboutMeText>
        Я <StyledKeyword>Web3 Frontend разработчик</StyledKeyword> в финтех
        компании. В свободное от работы время изучаю{" "}
        <StyledKeyword> тонкости оптимизации в вебе, </StyledKeyword>
        грокаю алгоритмы на <StyledKeyword>Leetcode</StyledKeyword> и слушаю{" "}
        <StyledKeyword>веб-стандарты.</StyledKeyword> А ещё раньше я занимался
        геймдизайном и AI, и вёл{" "}
        <StyledAboutMeLink href="https://www.youtube.com/@krashher_ai">
          YouTube
        </StyledAboutMeLink>{" "}
        канал об этом :)
      </StyledAboutMeText>
    </StyledAboutMe>
  );
}

export default AboutMe;
