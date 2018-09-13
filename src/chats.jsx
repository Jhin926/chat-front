import React, {Component} from 'react';
import * as api from './api'
import Alert from './alert/alert.jsx';

import './css/chats.less';

let hotAsc = false;
let numAsc = false;

class Chats extends Component {
  constructor(props) {
    super(props);

    this.state = {'chatlist': [], 'key': '', 'sortBy': '', msg: ''};
    this.addrId = props.match.params.id;

    this.addchat = this.addchat.bind(this);
    this.getChats = this.getChats.bind(this);
    this.changeKey = this.changeKey.bind(this);
    this.closeAlert = this.closeAlert.bind(this);
  }

  componentDidMount() {
    document.title = '聊天室列表';
    this.getChats();
  }

  addchat() {
    this.props.history.push('/chatadd');
  }

  getChats() {
    const {sortBy, key} = this.state;
    const addr = this.addrId;

    let sortAsc;
    if (sortBy === 'hot') {
      sortAsc = hotAsc;
      hotAsc = !hotAsc;
    } else {
      sortAsc = numAsc;
      numAsc = !numAsc;
    }
    api.getChats({sortBy, sortAsc, key, addr}).then(data => {
      if (data.success) {
        this.setState({'chatlist': data.result});
      } else {
        this.setState({'msg': data.msg});
      }
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

  changeKey(event) {
    this.setState({key: event.target.value});
  }

  closeAlert() {
    this.setState({msg: ''});
  }

  render() {
    return (
      <div className="bg-layer chats-layer">
        <header className="header chats-header">
          <input className="ipt-search"
              onChange={this.changeKey}
              placeholder="关键字搜索"
              type="text"
              value={this.state.key}
          />
          <button className="btn-search"
              onClick={this.getChats}
          >搜索</button>
          <a className="add-chat"
              onClick={this.addchat}
          ></a>
        </header>
        <section className="chats-sort">
          <span className="sort-tip">排序方式：</span>
          <ul className="sort">
            {/*<li className="left" onClick={this.changeSort.bind(this, 'area')}>距离</li>*/}
            <li className="left"
                onClick={this.changeSort.bind(this, 'hot')}
            >活跃度</li>
            <li className="left"
                onClick={this.changeSort.bind(this, 'number')}
            >人数</li>
          </ul>
        </section>
        <section className="chat-list">
          <ul id="chas-con">
            {this.state.chatlist.map(item => (<li key={item._id}
                onClick={this.goChat.bind(this, item)}
                                              >{item.title}<span style={{marginLeft: '10px'}}>({item.numbers || 0}人)</span></li>))}
          </ul>
        </section>
        <Alert name={this.state.msg}
            onCloseAlert={this.closeAlert}
        >
        </Alert>
      </div>
    )
  }
}

export default Chats;