import React from "react";
import { StyledHome } from "./styled";
import Greetings from "./greetings/greetings";

function Home() {
  return (
    <StyledHome>
      <Greetings letter={"Привет, я Никита, веб-разработчик"}></Greetings>
    </StyledHome>
  );
}

export default Home;
