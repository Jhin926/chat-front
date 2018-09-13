import React, { Component } from 'react';
import io from 'socket.io-client';

// import * as api from "./api";
import { getSer } from './common';
import MsgList from './msgList.jsx';
import Upload from './upload.jsx';

import './css/chat.less';
import './font/iconfont.less';
let socket;

class Chat extends Component {
  constructor(props) {
    super(props);

    this.chatName = getSer().title;

    this.state = {
      msgs: [
        { name: '木木', isMy: true, msg: '我还以为你们从来都不会选我呢' },
        { name: '木木', isMy: false, msg: '我还以为你们从来都不会选我呢' },
        { name: '木木', isMy: true, msg: '我还以为你们从来都不会选我呢' },
        { name: '木木', isMy: false, msg: '我还以为你们从来都不会选我呢' },
        { name: '木木', isMy: false, msg: '我还以为你们从来都不会选我呢' },
        { name: '木木', isMy: true, msg: '我还以为你们从来都不会选我呢' },
        { name: '木木', isMy: false, msg: '我还以为你们从来都不会选我呢' },
        { name: '木木', isMy: true, msg: '我还以为你们从来都不会选我呢' },
        { name: '木木', isMy: false, msg: '我还以为你们从来都不会选我呢' },
        { name: '木木', isMy: false, msg: '我还以为你们从来都不会选我呢' }
      ],
      num: 0
    };

    this.sendMsg = this.sendMsg.bind(this);
  }

  componentDidMount() {
    document.title = '聊天室标题';

    socket = io('http://localhost:8080');
    socket.on('sys', data => {
      let msg = {
        isJoin: true,
        userName: data.msg
      };
      this.setState({ msgs: this.state.msgs.concat(msg) });
    });
    socket.on('get msg', data => {
      let msg = {
        name: data.userName,
        msg: data.msg,
        isMy: false
      };
      this.setState({ msgs: this.state.msgs.concat(msg) });
    });
    socket.on('get num', data => {
      this.setState({ num: data.num });
    });
  }

  sendMsg(event) {
    if (event.keyCode === 13 && event.target.value !== '') {
      let msg = {
        name: '我',
        msg: event.target.value,
        isMy: true
      };
      this.setState({ msgs: this.state.msgs.concat(msg) });
      socket.emit('send msg', { params: event.target.value });
      event.target.value = '';
    }
  }

  goBack() {
    this.props.history.goBack();
  }

  render() {
    return (
      <div className="bg-layer chat-layer">
        <header className="header chat-tit">
          <span className="chat-back"
              onClick={this.goBack.bind(this)}
          />
          <div className="chat-name">
            <p>{this.chatName}</p>
            <p className="chat-num">
              在线人数(
              {this.state.num})
            </p>
          </div>
        </header>
        <MsgList msgList={this.state.msgs} />
        <footer>
          <div className="chat-input">
            <input onKeyDown={this.sendMsg}
                type="text"
            />
          </div>
          <div className="send-btn">
            <span className="send-item">
              <Upload />
            </span>
            <span className="send-item">
              <i className="iconfont icon-video" />
            </span>
            <span className="send-item iconfont icon-yuyin" />
            <span className="send-item iconfont icon-location" />
          </div>
        </footer>
      </div>
    );
  }
}

export default Chat;
