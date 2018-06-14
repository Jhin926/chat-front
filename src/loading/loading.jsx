import React from 'react';
import {render} from "react-dom";

import './loading.less';

function Loading() {
  console.log(123);
  let test = React.createElement('div', {
    className: 'test'
  },
    '啦啦啦啦，德玛西亚');
  render(
    test,
    document.getElementById('root')
  );
}


export default Loading;
