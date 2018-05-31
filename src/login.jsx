import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

import {Alert} from "./layer.jsx";
import * as api from './api';

import './css/login.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {phoneNo: '', pwd: ''};

    this.changeName = this.changeName.bind(this);
    this.changePwd = this.changePwd.bind(this);
    this.login = this.login.bind(this);
    this.register = this.register.bind(this);
  }

  login() {
    api.login(this.state).then(data => {
      if (data.success) {
        this.props.history.push('/address');
      } else {
        console.log(data);
      }
    });
  }

  register() {
    api.register(this.state).then(data => {
      if (data.success) {
        this.props.history.push('/address');
      } else {
        console.log(data);
      }
    });
  }

  changeName(event) {
    this.setState({phoneNo: event.target.value});
  }

  changePwd(event) {
    this.setState({pwd: event.target.value});
  }

  render() {
    return (
      <div className="input-con">
        <div className="login-con">
          <div className="login-input">
            <input type="text" value={this.state.phoneNo} onChange={this.changeName} placeholder="请输入用户名/手机号码"/>
          </div>
          <div className="login-input">
            <input type="password" value={this.state.pwd} onChange={this.changePwd} placeholder="请输入密码"/>
          </div>
          <div className="btn-con">
            <button className="btn" onClick={this.login}>登录</button>
            <button className="btn" onClick={this.register}>注册</button>
          </div>
          <div className="visitor">
            <Link to="/address">--以游客身份登录--</Link>
          </div>
        </div>
        {
          <Alert></Alert>
        }
      </div>
    )
  }
}

export default Login;