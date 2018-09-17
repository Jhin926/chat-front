import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
// import VConsole from 'vconsole/dist/vconsole.min.js'

import Login from '@/components/login/login.jsx';
import Address from '@/components/address/address.jsx';
import Chats from '@/components/chats/chats.jsx';
import Chat from '@/components/chat/chat.jsx';
import ChatAdd from '@/components/chatAdd/chatAdd.jsx';

import './index.less';

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
