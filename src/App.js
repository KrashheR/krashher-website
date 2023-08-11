import React from "react";
import GlobalStyles from "./theme/globalStyles";
import Header from "./components/header/header";
import { ThemeProvider } from "styled-components";
import { DefaultTheme } from "./theme/defaultTheme";

import Main from "./components/main/main";
import Footer from "./components/footer/footer";
import Home from "./components/home/home";

function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <GlobalStyles />
      <Header />
      <Main />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
