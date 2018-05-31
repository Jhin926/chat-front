import React, {Component} from 'react';
import {Link} from "react-router-dom";
import * as api from './api';

import './css/chatadd.css';

class ChatAdd extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="chatadd-layer">
        <ul className="chatadd-con">
          <li>
            <label htmlFor="title">聊天室标题：</label>
            <div className="input-chatadd">
              <input className="input-tit" id="title" type="text" placeholder="请输入聊天室标题"/>
            </div>
          </li>
          <li>
            <label htmlFor="addr">聊天室地址：</label>
            <div className="input-chatadd">
              <select id="addr" className="input-addr">
                <option value="1">北京</option>
                <option value="2">上海</option>
                <option value="3">深圳</option>
                <option value="4">杭州</option>
                <option value="5">郑州</option>
                <option value="6">大连</option>
              </select>
            </div>
          </li>
          <li>
            <label htmlFor="intro">聊天室介绍：</label>
            <div className="input-chatadd">
              <textarea className="input-intro" rows="5" id="intro"></textarea>
            </div>
          </li>
        </ul>
        <div className="input-sub">
          <button id='sub'>提交</button>
        </div>
      </div>
    )
  }
}

export default ChatAdd;