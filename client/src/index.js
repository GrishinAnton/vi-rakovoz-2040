import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { StylesProvider } from "@material-ui/core/styles";
import { store } from "./features";
import "react-notifications/lib/notifications.css";

ReactDOM.render(
  <StylesProvider injectFirst>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </StylesProvider>,
  document.getElementById("root")
);
