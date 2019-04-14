import React from 'react';
import CustomBreadcrumb from '@/components/CustomBreadcrumb';

class Carousel extends React.Component {
  render() {
    return (
      <div className="container-wrapper">
        <CustomBreadcrumb crumbs={['轮播图设置']}/>
        <div className="container">
          <div>轮播图设置</div>
        </div>
      </div>
    );
  }
}
export default Carousel;
