import React, {Component} from 'react';
import {Link} from "react-router-dom";
import * as api from './api';

import './css/address.css';

class Address extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="address">
        <header className="header" id="default">
          当前定位城市：<span></span>
        </header>
        <section className="city-list">
          <header className="choice-city"> 选择其他城市:</header>
          <ul>
            <li><Link to="./chats?addr=1">北京</Link></li>
            <li><Link to="./chats?addr=2">上海</Link></li>
            <li><Link to="./chats?addr=3">深圳</Link></li>
            <li><Link to="./chats?addr=4">杭州</Link></li>
            <li><Link to="./chats?addr=5">郑州</Link></li>
            <li><Link to="./chats?addr=6">大连</Link></li>
          </ul>
        </section>
      </div>
    )
  }
}

export default Address;