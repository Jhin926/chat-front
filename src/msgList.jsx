import React from 'react';

class MsgList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    document.getElementById('chat-room').scrollTop = document.getElementById('chat-room').scrollHeight;
  }

  componentDidUpdate() {
    document.getElementById('chat-room').scrollTop = document.getElementById('chat-room').scrollHeight;
  }

  render() {
    const msgList = this.props.msgList;
    return (
      <section id="chat-room" className="chat-room">
        {
          msgList.map((msg, idx) => {
            if (msg.isJoin) {
              return (<div key={msg.userName + idx} className="join">--{msg.userName}--</div>)
            }
            return (<div key={msg.msg + idx} className={`chat-bubble${msg.isMy ? ' myself' : ''}`}>
              <div className="chat-head"></div>
              <div className="chat-cont">
                <div className="chat-name">{msg.name}</div>
                <div className="chat-msg">
                  {msg.msg}
                </div>
              </div>
            </div>)
          })
        }
      </section>
    )
  }
}

export default MsgList;