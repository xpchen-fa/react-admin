import React from 'react';
import { Layout } from 'antd';
import SiderNav from '@/components/SiderNav';
import HeaderBar from '@/components/HeaderBar';
import style from './index.less';

const { Sider, Header, Content } = Layout;


class BasicLayout extends React.Component {
  state = {
    collapsed: false
  }

  toggle = () => {
    const { collapsed } = this.state;
    this.setState({
      collapsed: !collapsed
    });
  }

  render() {
    const { collapsed } = this.state;
    const { children } = this.props;
    return (
      <Layout style={{
        height: '100%',
      }}
      >
        <Sider
          collapsible
          trigger={null}
          collapsed={collapsed}
          theme="light"
        >
          <SiderNav/>
        </Sider>
        <Layout>
          <Header className="header">
            <HeaderBar collapsed={collapsed} onToggle={this.toggle}/>
          </Header>
          <Content className="content">
            {children}
          </Content>
        </Layout>
      </Layout>
    );
  }
}
export default BasicLayout;
