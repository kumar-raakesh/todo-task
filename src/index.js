// Set up your application entry point here.../* eslint-disable import/default */

import React from "react";
import { render } from "react-dom";
import { AppContainer } from "react-hot-loader";
import configureStore, { history } from "./store/configureStore";
import Root from "./Root";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import "./styles/materialDesignIcons.css"; // Yep, that's right. You can import SASS/CSS files too! Webpack will run the associated loader and plug this into the page.
import "./styles/style.scss"; // Yep, that's right. You can import SASS/CSS files too! Webpack will run the associated loader and plug this into the page.
// require("./favicon.ico"); // Tell webpack to load favicon.ico
export const store = configureStore();

render(
  <MuiThemeProvider>
    <AppContainer>
      <Root store={store} history={history} />
    </AppContainer>
  </MuiThemeProvider>,
  document.getElementById("app")
);

if (module.hot) {
  module.hot.accept("./Root", () => {
    const NewRoot = require("./Root").default;
    render(
      <MuiThemeProvider>
        <AppContainer>
          <NewRoot store={store} history={history} />
        </AppContainer>
      </MuiThemeProvider>,
      document.getElementById("app")
    );
  });
}
