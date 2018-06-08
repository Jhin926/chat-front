import React, {Component} from 'react';
import {Link} from "react-router-dom";

import Alert from "./alert/alert.jsx";
import * as api from './api';

import './css/login.less';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {phoneNo: '', pwd: '', msg: ''};

    this.changeName = this.changeName.bind(this);
    this.changePwd = this.changePwd.bind(this);
    this.login = this.login.bind(this);
    this.register = this.register.bind(this);
    this.closeAlert = this.closeAlert.bind(this);
  }

  componentDidMount() {
    document.title = '登录';
  }

  login() {
    const {phoneNo, pwd} = this.state;
    if (phoneNo === '') {
      this.setState({'msg': '用户名不能为空'});
      return;
    }
    if (pwd === '') {
      this.setState({'msg': '密码不能为空'});
      return;
    }
    api.login({phoneNo, pwd}).then(data => {
      if (data.success) {
        this.props.history.push('/address');
      } else {
        this.setState({'msg': data.msg});
      }
    });
  }

  register() {
    const {phoneNo, pwd} = this.state;
    if (phoneNo === '') {
      this.setState({'msg': '用户名不能为空'});
      return;
    }
    if (pwd === '') {
      this.setState({'msg': '密码不能为空'});
      return;
    }
    api.register({phoneNo, pwd}).then(data => {
      if (data.success) {
        this.props.history.push('/address');
      } else {
        this.setState({'msg': data.msg});
      }
    });
  }

  login1() {
    // api.login1();
    this.props.history.push('/address');
  }

  changeName(event) {
    this.setState({phoneNo: event.target.value});
  }

  changePwd(event) {
    this.setState({pwd: event.target.value});
  }

  closeAlert() {
    this.setState({msg: ''});
  }

  render() {
    return (
      <div className='bg-layer'>
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
              <span onClick={this.login1.bind(this)}>--以游客身份登录--</span>
            </div>
          </div>
          <Alert name={this.state.msg} onCloseAlert={this.closeAlert}>
          </Alert>
        </div>
      </div>
    )
  }
}

export default Login;