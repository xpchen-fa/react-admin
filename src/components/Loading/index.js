import React from 'react';
import { Spin } from 'antd';
import './index.less';

class Loading extends React.Component {
  render() {
    return (
      <div className="loading-wrapper">
        <Spin tip="Loading..."/>
      </div>
    );
  }
}
export default Loading;
