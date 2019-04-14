import React from 'react';
import CustomBreadcrumb from '@/components/CustomBreadcrumb';

class Home extends React.Component {
  render() {
    return (
      <div className="container-wrapper">
        <CustomBreadcrumb/>
        <div className="container">
          <div>首页</div>
        </div>
      </div>
    );
  }
}
export default Home;
