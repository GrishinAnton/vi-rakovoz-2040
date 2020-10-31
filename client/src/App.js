import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { LoginPage } from "./components/LoginPage/LoginPage";
import { history } from "./utils";
import { NotificationContainer } from "react-notifications";

import { Main } from "./components/Main/Main";

function App() {
  return (
    <>
      <Router history={history}>
        <Switch>
          <Route path="/" component={LoginPage} exact />
          <Route path="/profile/:userId" component={Main} />
        </Switch>
      </Router>
      <NotificationContainer />
    </>
  );
}

export default App;
