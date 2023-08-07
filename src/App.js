import React from "react";
import GlobalStyles from "./theme/globalStyles";
import Header from "./components/header/header";
import { ThemeProvider } from "styled-components";
import { DefaultTheme } from "./theme/defaultTheme";
import Container from "./components/container/container";
import Main from "./components/main/main";
import Footer from "./components/footer/footer";

function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <GlobalStyles />
      <Container>
        <Header />
        <Main />
        <Footer />
      </Container>
    </ThemeProvider>
  );
}

export default App;
