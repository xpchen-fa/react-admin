import React from 'react';
import CustomBreadcrumb from '@/components/CustomBreadcrumb';

class Users extends React.Component {
  render() {
    return (
      <div className="container-wrapper">
        <CustomBreadcrumb crumbs={['用户管理']}/>
        <div className="container">
          <div>用户管理TEST</div>
        </div>
      </div>
    );
  }
}
export default Users;
