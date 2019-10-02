import * as serviceWorker from "./serviceWorker";
import React from "react";
import ReactDOM from "react-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/styles";
import App from "./App";
import theme, { darkTheme } from "./theme";
import { ThemeSwitcherProvider, ThemeContext } from "./ThemeSwitcher";

ReactDOM.render(
  <ThemeSwitcherProvider>
    <ThemeContext.Consumer>
      {({ isLightTheme }) => (
        <ThemeProvider theme={isLightTheme ? theme : darkTheme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <App />
        </ThemeProvider>
      )}
    </ThemeContext.Consumer>
  </ThemeSwitcherProvider>,
  document.querySelector("#root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
