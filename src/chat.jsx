import React, {Component} from 'react';
import {Link} from "react-router-dom";
import * as api from './api';

import './css/chat.less';

class Chat extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="chat-layer">
        <header className="header chat-tit">
          <span id="chat-back" className="chat-back"></span>
          <span id="chat-title"></span>
        </header>
        <section className="chat-room" id="chat-room">
        </section>
        <footer>
          <div className="chat-input">
            <input id="msg-input" type="text"/>
          </div>
        </footer>
      </div>
    )
  }
}

export default Chat;