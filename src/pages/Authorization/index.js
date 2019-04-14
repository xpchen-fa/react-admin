import React from 'react';
import CustomBreadcrumb from '@/components/CustomBreadcrumb';

class Authorization extends React.Component {
  render() {
    return (
      <div className="container-wrapper">
        <CustomBreadcrumb crumbs={['权限管理']}/>
        <div className="container">
          <div>权限管理</div>
        </div>
      </div>
    );
  }
}
export default Authorization;
