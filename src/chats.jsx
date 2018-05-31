import React, {Component} from 'react';
import {Link} from "react-router-dom";
import * as api from './api';

import './css/chats.css';

class Chats extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="chats-layer">
        <header className="header chats-header">
          <input className="ipt-search" id="ipt-search" type="text" placeholder="关键字搜索"/>
          <button className="btn-search" id="search">搜索</button>
        </header>
        <section className="chats-sort">
          <span className="sort-tip">排序方式：</span>
          <ul id="sort-type" className="sort">
            <li className="left">距离</li>
            <li className="left">活跃度</li>
            <li className="left">人数</li>
          </ul>
        </section>
        <section className="chat-list">
          <ul id="chas-con"></ul>
        </section>
      </div>
    )
  }
}

export default Chats;