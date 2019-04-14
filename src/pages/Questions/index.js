import React from 'react';
import CustomBreadcrumb from '@/components/CustomBreadcrumb';

class Questions extends React.Component {
  render() {
    return (
      <div className="container-wrapper">
        <CustomBreadcrumb crumbs={['问答管理']}/>
        <div className="container">
          <div>问答管理</div>
        </div>
      </div>
    );
  }
}
export default Questions;
