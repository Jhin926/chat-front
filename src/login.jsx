import React, {Component} from 'react';
import * as api from './api';

import './css/index.css';
import './css/login.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {name: '', pwd: ''};

    this.changeName = this.changeName.bind(this);
    this.changePwd = this.changePwd.bind(this);
    this.login = this.login.bind(this);
  }
  login() {
    console.log(this.state);
    api.login(this.state);
  }

  changeName(event) {
    this.setState({name: event.target.value});
  }

  changePwd(event) {
    this.setState({pwd: event.target.value});
  }
  render() {
    return (
      <div className="bg">
        <div className="bg-layer">
          <div className="input-con">
            <div className="login-con">
              <div className="login-input">
                <input type="text" value={this.state.name} onChange={this.changeName} placeholder="请输入用户名/手机号码"/>
              </div>
              <div className="login-input">
                <input type="password"value={this.state.pwd} onChange={this.changePwd}  placeholder="请输入密码"/>
              </div>
              <div className="btn-con">
                <button className="btn" onClick={this.login}>登录</button>
                <button className="btn" id="register">注册</button>
              </div>
              <div className="visitor">
                <a href="./address.html">--以游客身份登录--</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Login;