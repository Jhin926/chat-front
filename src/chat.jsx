import React, {Component} from 'react';
import {Link} from "react-router-dom";
import io from 'socket.io-client';

import * as api from './api';
import MsgList from './msgList.jsx';

import './css/chat.less';

const socket = io('http://106.12.40.68:8080');

class Chat extends Component {
  constructor(props) {
    super(props);

    this.state = {
      msgs: [
        {name: '木木', isMy: true, msg: '我还以为你们从来都不会选我呢'},
        {name: '木木', isMy: false, msg: '我还以为你们从来都不会选我呢'},
        {name: '木木', isMy: true, msg: '我还以为你们从来都不会选我呢'},
        {name: '木木', isMy: false, msg: '我还以为你们从来都不会选我呢'},
        {name: '木木', isMy: false, msg: '我还以为你们从来都不会选我呢'},
        {name: '木木', isMy: true, msg: '我还以为你们从来都不会选我呢'},
        {name: '木木', isMy: false, msg: '我还以为你们从来都不会选我呢'},
        {name: '木木', isMy: true, msg: '我还以为你们从来都不会选我呢'},
        {name: '木木', isMy: false, msg: '我还以为你们从来都不会选我呢'},
        {name: '木木', isMy: false, msg: '我还以为你们从来都不会选我呢'},
      ]
    };

    this.sendMsg = this.sendMsg.bind(this);
  }

  componentDidMount() {
    socket.on('sys', data => {
      let msg = {
        isJoin: true,
        userName: data.msg
      };
      this.setState(
        {msgs: this.state.msgs.concat(msg)}
      );
    });
    socket.on('get msg', data => {
      let msg = {
        name: data.userName,
        msg: data.msg,
        isMy: false
      };
      this.setState(
        {msgs: this.state.msgs.concat(msg)}
      );
    });
  }

  sendMsg(event) {
    if (event.keyCode === 13) {
      let msg = {
        name: '我',
        msg: event.target.value,
        isMy: true
      };
      this.setState(
        {msgs: this.state.msgs.concat(msg)}
        );
      socket.emit('send msg', { params: event.target.value });
      event.target.value = '';
    }
  }

  render() {
    return (
      <div className="bg-layer chat-layer">
        <header className="header chat-tit">
          <span id="chat-back" className="chat-back"></span>
          <span id="chat-title"></span>
        </header>
        <MsgList msgList={this.state.msgs}></MsgList>
        <footer>
          <div className="chat-input">
            <input type="text" onKeyDown={this.sendMsg}/>
          </div>
          <div className="send-btn">
            <span className="send-item">图</span>
            <span className="send-item">视</span>
            <span className="send-item">音</span>
            <span className="send-item">址</span>
          </div>
        </footer>
      </div>
    )
  }
}

export default Chat;