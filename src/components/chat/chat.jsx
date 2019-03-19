import React, { Component } from 'react';
import io from 'socket.io-client';

// import * as api from "./api";
// import { getSer } from '@/common';
import Alert from '@/components/alert/alert.jsx';
import MsgList from '../msgList/msgList.jsx';
import Upload from '../upload/upload.jsx';

import './mChat.less';
import '../font/iconfont.less';
let socket;

class Chat extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tip: '',
      msgs: [
        { name: '木木', isMy: true, msg: '', url: 'http://localhost/2019-03-15-125602.gif', type: 'img' },
        { name: '木木', isMy: false, msg: '我还以为你们从来都不会选我呢', type: 'text' },
        { name: '木木', isMy: true, msg: '我还以为你们从来都不会选我呢', type: 'text' },
        { name: '木木', isMy: false, msg: '我还以为你们从来都不会选我呢', type: 'text' }
      ],
      num: 0
    };

    this.sendMsg = this.sendMsg.bind(this);
  }

  componentDidMount() {
    document.title = '聊天室标题';

    socket = io('http://localhost');
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
        isMy: false,
        type: data.type,
        url: data.url
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
      socket.emit('send msg', { msg: event.target.value, type: 'text' });
      event.target.value = '';
    }
  }

  sendFile(msgObj) {
    this.setState({ msgs: this.state.msgs.concat({ ...msgObj, isMy: true, name: '我' }) });
    socket.emit('send msg', msgObj);
  }


  closeAlert() {
    this.setState({tip: ''});
  }

  render() {
    return (
      <div className="bg-layer chat-layer">
        <header className="header chat-tit">
          <div className="chat-name">
            <p>{this.chatName}</p>
            <p className="chat-num">
              在线人数({this.state.num})
            </p>
          </div>
        </header>
        <MsgList msgList={this.state.msgs} />
        <footer className="mchat-footer">
          <div className="chat-input">
            <input onKeyDown={this.sendMsg}
                type="text"
            />
          </div>
          <div className="send-btn">
            <span className="send-item">
              <Upload sendFile1={this.sendFile.bind(this)} />
            </span>
            <span className="send-item">
              <i className="iconfont icon-video" />
            </span>
            <span className="send-item iconfont icon-yuyin" />
            <span className="send-item iconfont icon-location" />
          </div>
        </footer>
          <Alert name={this.state.tip}
              onCloseAlert={this.closeAlert.bind(this)}
          >
          </Alert>
      </div>
    );
  }
}

export default Chat;
