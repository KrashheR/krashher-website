import React from "react";
import { StyledAboutMe } from "./styled";
import MyPhoto from "../../assets/images/my_photo.jpg";
import Greetings from "../greetings/greetings";
import GreetingsImage from "../greetingsImage/greetingsImage";
import Container from "../container/container";

function AboutMe () {

  return(
    <Container>
      <StyledAboutMe>
        <Greetings text = {"Привет,<br/> Я Никита,<br/> Веб-разработчик"} />
        <GreetingsImage imageSrc={MyPhoto}/>
      </StyledAboutMe>
    </Container>
  );
}

export default AboutMe;