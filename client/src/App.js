import "./App.css";
import { Router, Route, Redirect, Switch } from "react-router-dom";
import { Test } from "./Test";
import { history } from "./utils";

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" component={Test} exact />
      </Switch>
    </Router>
  );
}

export default App;
