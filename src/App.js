import React, { Fragment } from "react";
import GlobalStyle from "./styles/global";
import Main from "./pages/Main/index";
import { BrowserRouter } from "react-router-dom";

const App = () => (
  <BrowserRouter>
    <Fragment>
      <GlobalStyle />

      <Main />
    </Fragment>
  </BrowserRouter>
);

export default App;
