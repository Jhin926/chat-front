import React from "react";
import {render} from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Login from "./login.jsx";

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

render((
  <Router>
    <Route exact path="/" component={Login} />
  </Router>
), document.getElementById('root'));