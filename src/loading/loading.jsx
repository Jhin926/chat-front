import React from 'react';
import {render} from "react-dom";

import './loading.less';

function Loading() {
  let test = React.createElement('div', {
    className: 'test'
  },
    '加载中。。。');
  render(
    test,
    document.getElementById('root')
  );
}


export default Loading;
