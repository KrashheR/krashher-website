import React from "react";
import { StyledHome } from "./styled";
import Greetings from "./greetings/greetings";

function Home() {
  return (
    <StyledHome>
      <Greetings textData="Привет, я Никита, веб-разработчик" />
    </StyledHome>
  );
}

export default Home;
