import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
// import { StylesProvider } from "@material-ui/core/styles";
import { store } from "./features";

ReactDOM.render(
  <React.StrictMode>
    {/* <StylesProvider injectFirst> */}
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
    {/* </StylesProvider> */},
  </React.StrictMode>,
  document.getElementById("root")
);
