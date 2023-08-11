import React from "react";
import { StyledHome } from "./styled";
import Greetings from "../greetings/greetings";

function Home () {
  return(
    <StyledHome>
      <Greetings text = {"Привет, <br/> Я Никита,<br/> Веб-разработчик"}/>
    </StyledHome>
  );
}

export default Home;