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
import Addevent from "./Addevent";
import Addpost from "./Addpost";
import TestNav from "./OurNav";

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
        <Route exact path="/addevent" component={Addevent}/>
        <Route exact path="/addpost" component={Addpost}/>
        <Route exact path="/testnav" component={TestNav}/>
      </Switch>
    </Router>
  );
}

export default App;


