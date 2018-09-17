import React, {Component} from 'react';
import {Link} from 'react-router-dom';
// import * as api from './api';

import './address.less';

class Address extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    document.title = '选择地址';
  }

  render() {
    return (
      <div className="bg-layer address">
        <header className="header"
            id="default"
        >
          当前定位城市：<span style={{'color':'#ff7e27'}}>上海</span>
        </header>
        <section className="city-list">
          <header className="choice-city"> 选择其他城市:</header>
          <ul>
            <li><Link to="/chats/1">北京</Link></li>
            <li><Link to="/chats/2">上海</Link></li>
            <li><Link to="/chats/3">深圳</Link></li>
            <li><Link to="/chats/4">杭州</Link></li>
            <li><Link to="/chats/5">郑州</Link></li>
            <li><Link to="/chats/6">大连</Link></li>
          </ul>
        </section>
      </div>
    )
  }
}

export default Address;