import React from "react";
import GlobalStyles from "./theme/globalStyles";
import Header from "./components/header/header";
import { ThemeProvider } from "styled-components";
import { DefaultTheme } from "./theme/defaultTheme";
import Container from "./components/container/container";

function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <GlobalStyles />
      <Container>
        <Header>

        </Header>
      </Container>
    </ThemeProvider>
  );
}

export default App;
