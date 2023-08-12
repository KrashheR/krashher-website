import React from "react";
import { StyledAboutMe } from "./styled";
import Container from "../container/container";
import GreetingsImage from "../greetingsImage/greetingsImage";
import myPhoto from "../../assets/images/my_photo.jpg";

function AboutMe () {

  return(
    <Container>
      <StyledAboutMe>
        <GreetingsImage imageSrc={myPhoto}></GreetingsImage>
      </StyledAboutMe>
    </Container>
  );
}

export default AboutMe;