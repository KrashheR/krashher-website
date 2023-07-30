import React from "react";
import { StyledHome } from "./styled";
import MyPhoto from "../../images/my_photo.jpg";
import Greetings from "../greetings/greetings";
import GreetingsImage from "../greetingsImage/greetingsImage";

function Home () {

  return(
    <StyledHome>
      <Greetings text = {"Привет,<br/> Я Никита,<br/> Веб-разработчик"} />
      <GreetingsImage imageSrc={MyPhoto}/>
    </StyledHome>
  );
}

export default Home;