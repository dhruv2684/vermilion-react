
import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import User from "./components/User";
import UserSignup from "./components/UserSignup";
import Cblog from "./components/Cblog";
import Logout from "./components/Logout";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">

      <Router>
        <Switch>

          <Route exact path="/" >
            <Header />
            <Home />
          </Route>

          <Route path="/user" >
            <User />
          </Route>

          <Route path="/signup">
            <UserSignup />
          </Route>

          <Route path="/blog">
            <Cblog />
          </Route>

          <Route path="/logout">
            <Logout />
          </Route>


        </Switch>
      </Router>

    </div>
  );
}

export default App;
