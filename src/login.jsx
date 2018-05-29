import React, {Component} from 'react';
import './css/index.css';
import './css/login.css';

class Login extends Component {
  render() {
    return (
      <div className="bg">
        <div className="bg-layer">
          <div className="input-con">
            <div className="login-con">
              <div className="login-input">
                <input id="mobile" type="text" placeholder="请输入用户名/手机号码"/>
              </div>
              <div className="login-input">
                <input id="pwd" type="password" placeholder="请输入密码"/>
              </div>
              <div className="btn-con">
                <button className="btn" id="login">登录</button>
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