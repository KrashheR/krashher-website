import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./assets/theme/globalStyles";
import { DefaultTheme } from "./assets/theme/defaultTheme";

import Header from "./components/layouts/header/header";
import Main from "./components/layouts/main/main";
import Footer from "./components/layouts/footer/footer";
import Home from "./components/sections/home/home";

function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <GlobalStyles />
      <Home />
      <Header />
      <Main />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
