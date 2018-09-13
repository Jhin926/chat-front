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
      <section className="chat-room"
          id="chat-room"
      >
        {
          msgList.map((msg, idx) => {
            if (msg.isJoin) {
              return (<div className="join"
                  key={msg.userName + idx}
                      >--{msg.userName}--</div>)
            }
            return (<div className={`chat-bubble${msg.isMy ? ' myself' : ''}`}
                key={msg.msg + idx}
                    >
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