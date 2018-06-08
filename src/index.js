import React from "react";
import {render} from "react-dom";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

import Login from "./login.jsx";
import Address from "./address.jsx";
import Chats from "./chats.jsx";
import Chat from "./chat.jsx";
import ChatAdd from "./chatAdd.jsx";

import './css/index.less';

render((
  <Router>
    <div className="bg">
      <Route exact path="/" component={Login}/>
      <Route path="/address" component={Address}/>
      <Route path="/chats/:id" component={Chats}/>
      <Route path="/chat" component={Chat}/>
      <Route path="/chatadd" component={ChatAdd}/>
    </div>
  </Router>
), document.getElementById('root'));