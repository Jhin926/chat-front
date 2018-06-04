import React, {Component} from 'react';
import {Link} from "react-router-dom";
import * as api from './api';

import './css/chats.less';

class Chats extends Component {
  constructor(props) {
    super(props);

    this.addchat = this.addchat.bind(this);
  }

  componentDidMount() {
    document.title = '聊天室列表';
  }

  addchat() {
    this.props.history.push('/chatadd');
  }

  render() {
    return (
      <div className="bg-layer chats-layer">
        <header className="header chats-header">
          <input className="ipt-search" type="text" placeholder="关键字搜索"/>
          <button className="btn-search">搜索</button>
          <a onClick={this.addchat} className="add-chat"></a>
        </header>
        <section className="chats-sort">
          <span className="sort-tip">排序方式：</span>
          <ul className="sort">
            <li className="left">距离</li>
            <li className="left">活跃度</li>
            <li className="left">人数</li>
          </ul>
        </section>
        <section className="chat-list">
          <ul id="chas-con">
            <li>德玛西亚</li>
            <li>诺克萨斯</li>
          </ul>
        </section>
      </div>
    )
  }
}

export default Chats;