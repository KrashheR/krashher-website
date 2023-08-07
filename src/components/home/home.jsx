import React from "react";
import { StyledHome } from "./styled";
import MyPhoto from "../../assets/images/my_photo.jpg";
import Greetings from "../greetings/greetings";
import GreetingsImage from "../greetingsImage/greetingsImage";
import Container from "../container/container";

function Home () {

  return(
    <Container>
      <StyledHome>
        <Greetings text = {"Привет,<br/> Я Никита,<br/> Веб-разработчик"} />
        <GreetingsImage imageSrc={MyPhoto}/>
      </StyledHome>
    </Container>
  );
}

export default Home;