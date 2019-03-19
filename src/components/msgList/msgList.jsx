import React from 'react';

class MsgList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    document.getElementById('chat-room').scrollTop = document.getElementById(
      'chat-room'
    ).scrollHeight;
  }

  componentDidUpdate() {
    document.getElementById('chat-room').scrollTop = document.getElementById(
      'chat-room'
    ).scrollHeight;
  }

  render() {
    const msgList = this.props.msgList;
    return (
      <section className="chat-room"
          id="chat-room"
      >
        {msgList.map((msg, idx) => {
          if (msg.isJoin) {
            return (
              <div className="join"
                  key={msg.userName + idx}
              >
                --
                {msg.userName}
                --
              </div>
            );
          }
          return (
            <div
                className={`chat-bubble${msg.isMy ? ' myself' : ''}`}
                key={msg.msg + idx}
            >
              <div className="chat-head" />
              <div className="chat-cont">
                <div className="chat-name">
                  {msg.name}{' '}
                  <span
                      className="send-item iconfont icon-location"
                      style={{ fontSize: '14px' }}
                  />
                  70km
                </div>
                <div className="chat-msg">
                  <span>{msg.msg}</span>
                  {
                    msg.type ==='img'?
                    <img height="100%"
                        src={msg.url}
                        width="100%"
                    />:''
                  }
                </div>
              </div>
            </div>
          );
        })}
      </section>
    );
  }
}

export default MsgList;
