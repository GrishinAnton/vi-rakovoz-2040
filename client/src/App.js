import "./App.css";
import { Router, Route, Redirect, Switch } from "react-router-dom";
import LoginPage from './components/LoginPage';
import ProfilePage from './components/ProfilePage';
import { history } from "./utils";

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" component={LoginPage} exact />
        <Route path="/profile/:userId" component={ProfilePage} exact />
      </Switch>
    </Router>
  );
}

export default App;
