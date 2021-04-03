import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./index.css";
import Home from "./Home";
import SignIn from "./SignIn";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signin" component={SignIn}/>
      </Switch>
    </Router>
  );
}

export default App;


