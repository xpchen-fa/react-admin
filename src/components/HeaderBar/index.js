import React from 'react';
import { Icon, Dropdown, Menu, Modal, Avatar } from 'antd';
import { Link, withRouter } from 'react-router-dom';
import './index.less';

@withRouter
class HeaderBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      avatar: require('@/assets/img/fa.png')
    };
  }


  toggle = () => {
    const { onToggle } = this.props;
    onToggle();
  }

  logout = () => {
    const { history, appStore } = this.props;
    appStore.toggleLogin(false);
    history.push(location.pathname);
  }

  render() {
    const { visible, avatar } = this.state;
    const { appStore, collapsed, location } = this.props;
    // 点击用户头像
    const menu = (
      <Menu className="menu">
        <Menu.ItemGroup title="用户中心" className="menu-group">
          <Menu.Item>你好</Menu.Item>
          <Menu.Item><span onClick={this.logout}>退出登录</span></Menu.Item>
        </Menu.ItemGroup>
      </Menu>
    );
    // 已登录
    const login = (
      <Dropdown overlay={menu}>
        <img onClick={() => this.setState({ visible: true })} src={avatar} alt=""/>
      </Dropdown>
    );

    return (
      <div className="headerBar">
        <Icon
          type={collapsed ? 'menu-unfold' : 'menu-fold'}
          className="trigger"
          onClick={this.toggle}
        />
        <ul className="header-ul">
          <li>{login}</li>
        </ul>
        <Modal
          footer={null}
          closable={false}
          visible={visible}
          wrapClassName="vertical-center-modal"
          onCancel={() => this.setState({ visible: false })}
        >
          <img src={avatar} alt="" width="100%"/>
        </Modal>
      </div>
    );
  }
}

export default HeaderBar;
