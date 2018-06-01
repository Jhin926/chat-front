import React from 'react';
class Alert extends React.Component {
  render() {
    return (
      <div className="alert-layer">
        {this.props.name}
      </div>
    )
  }
}

export {Alert};
