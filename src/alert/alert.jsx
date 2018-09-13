import React from 'react';

import './alert.less';

class Alert extends React.Component {
  constructor(props) {
    super(props);

    this.close = this.close.bind(this);
  }

  close() {
    this.props.onCloseAlert();
  }

  render() {
    const {name} = this.props;
    let cmpt = null;
    if (name !== '') {
      cmpt = <div className="alert-layer">
        <div className="alert-container">
          <header className="alert-tit">提示</header>
          <div className="alert-content">{name}</div>
          <footer className="alert-footer"
              onClick={this.close}
          >确定</footer>
        </div>
      </div>;
    }
    return cmpt;
  }
}

export default Alert;
