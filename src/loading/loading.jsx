import React, { Component } from "react";

import "./loading.less";

class Loading extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.isLoading ? (
          <div style={{opacity: 1}}>
            <div className="weui-mask_transparent" />
            <div className="weui-toast">
              <i className="weui-loading weui-icon_toast" />
              <p className="weui-toast__content">数据加载中</p>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default Loading;
