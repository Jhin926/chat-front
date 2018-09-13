import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
// import VConsole from 'vconsole/dist/vconsole.min.js'

import Login from './login.jsx';
import Address from './address.jsx';
import Chats from './chats.jsx';
import Chat from './chat.jsx';
import ChatAdd from './chatAdd.jsx';

import './css/index.less';

// new VConsole()

render((
  <Router>
    <div className="bg">
      <Route component={Login}
          exact
          path="/"
      />
      <Route component={Address}
          path="/address"
      />
      <Route component={Chats}
          path="/chats/:id"
      />
      <Route component={Chat}
          path="/chat"
      />
      <Route component={ChatAdd}
          path="/chatadd"
      />
    </div>
  </Router>
), document.getElementById('root'));
