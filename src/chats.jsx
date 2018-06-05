import React, {Component} from 'react';
import {Link} from "react-router-dom";
import * as api from './api';

import './css/chats.less';

class Chats extends Component {
  constructor(props) {
    super(props);

    this.state = {'chatlist': [], 'key': '', 'sortBy': ''};

    this.addchat = this.addchat.bind(this);
    this.getChats = this.getChats.bind(this);
  }

  componentDidMount() {
    document.title = '聊天室列表';
  }

  addchat() {
    this.props.history.push('/chatadd');
  }

  getChats() {
    const {sortBy, key} = this.state;

    api.getChats({sortBy, key}).then(data => {
      this.setState({'chatlist': data.result});
    });
  }

  changeSort(data) {
    this.setState({'sortBy': data});
    setTimeout(() => {
      this.getChats();
    });
  }

  goChat(item) {
    this.props.history.push(`/chat?id=${item._id}&title=${item.title}`);
  }

  render() {
    return (
      <div className="bg-layer chats-layer">
        <header className="header chats-header">
          <input className="ipt-search" type="text" value={this.state.key} placeholder="关键字搜索"/>
          <button onClick={this.getChats} className="btn-search">搜索</button>
          <a onClick={this.addchat} className="add-chat"></a>
        </header>
        <section className="chats-sort">
          <span className="sort-tip">排序方式：</span>
          <ul className="sort">
            <li className="left" onClick={this.changeSort.bind(this, 'area')}>距离</li>
            <li className="left" onClick={this.changeSort.bind(this, 'hot')}>活跃度</li>
            <li className="left" onClick={this.changeSort.bind(this, 'number')}>人数</li>
          </ul>
        </section>
        <section className="chat-list">
          <ul id="chas-con">
            {this.state.chatlist.map(item => (<li key={item._id} onClick={this.goChat.bind(this, item)}>{item.title}</li>))}
          </ul>
        </section>
      </div>
    )
  }
}

export default Chats;