import React from "react";
import {StyledHome, StyledImage } from "./styled";
import MyPhoto from "../../images/my_photo.jpg";
import Greetings from "../greetings/greetings";

function Home () {

  return(
    <StyledHome>
      <Greetings text = {"Привет, Я Никита, Веб-разработчик"} />
      <StyledImage src={MyPhoto} />
    </StyledHome>
  );
}

export default Home;