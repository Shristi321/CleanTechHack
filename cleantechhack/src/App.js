import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import "./index.css";
import Home from "./Home";
import LogIn from "./Login";
import SignUp from "./SignUp";
import Dashboard from "./Dashboard";
import Feed from "./Feed";
import Events from "./Events";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={LogIn}/>
        <Route exact path="/signup" component={SignUp}/>
        <Route exact path="/dashboard" component={Dashboard}/>
        <Route exact path="/feed" component={Feed}/>
        <Route exact path="/events" component={Events}/>
      </Switch>
    </Router>
  );
}

export default App;


