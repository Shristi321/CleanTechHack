import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import "./index.css";
import Home from "./Home";
import LogIn from "./Login";
import SignUp from "./SignUp";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={LogIn}/>
        <Route exact path="/signup" component={SignUp}/>
      </Switch>
    </Router>
  );
}

export default App;


