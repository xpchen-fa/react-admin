import React from 'react';
import { Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';
import "./index.less";

class CustomBreadcrumb extends React.Component {
  render() {
    const { crumbs } = this.props;
    return (
      <Breadcrumb className="breadcrumb">
        <Breadcrumb.Item>
          <Link to="/home">首页</Link>
        </Breadcrumb.Item>
        {crumbs && crumbs.map(item => {
          if ((typeof item) === 'object') {
            return <Breadcrumb.Item key={item.title}><Link to={item.url}>{item.title}</Link></Breadcrumb.Item>;
          } else {
            return <Breadcrumb.Item key={item}>{item}</Breadcrumb.Item>;
          }
        })}
      </Breadcrumb>
    );
  }
}

export default CustomBreadcrumb;
