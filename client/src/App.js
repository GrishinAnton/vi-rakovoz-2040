import React, { useEffect } from "react";
import { Router, Route, Switch } from "react-router-dom";
import { LoginPage } from "./components/LoginPage/LoginPage";
import { history } from "./utils";
import { NotificationContainer } from "react-notifications";
import { getPersons } from "./features/persons/persons.slice";
import { useDispatch } from "react-redux";

import { Main } from "./components/Main/Main";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPersons());
  }, []);

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
