import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Menu, Icon } from 'antd';
import MenuConfig from '@/config/menuConfig';


const styles = {
  logo: {
    height: '32px',
    background: 'rgb(255, 255, 221)',
    margin: '16px'
  }
};
@withRouter
class SiderNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentKey: ''
    };
  }

  componentWillMount() {
    const menuTreeNode = this.renderMenu(MenuConfig);
    this.setState({
      menuTreeNode
    });
  }

  componentWillReceiveProps(nextProps) {
    const { location } = this.props;
    const { currentKey } = this.state;
    //当点击面包屑导航时，侧边栏要同步响应
    const pathname = nextProps.location.pathname;
    if (location.pathname !== pathname) {
      this.setState({
        currentKey: pathname,
      });
    }
  }

  // 菜单点击
  handleClick = ({ item, key }) => {
    const { currentKey } = this.state;
    if (key === currentKey) {
      return false;
    }

    this.setState({
      currentKey: key
    });
  };


  // 菜单渲染
  renderMenu =(data) => {
    return data.map((item) => {
      if (item.children) {
        return (
          <Menu.SubMenu title={<span>{item.icon && <Icon type={item.icon}/>}<span>{item.title}</span></span>} key={item.key}>
            { this.renderMenu(item.children)}
          </Menu.SubMenu>
        );
      }
      return (
        <Menu.Item title={item.title} key={item.key}>
          <Link to={item.key}>
            {item.icon ? <Icon type={item.icon}/> : ""}
            <span>{item.title}</span>
          </Link>
        </Menu.Item>
      );
    });
  }

  render() {
    const { menuTreeNode, currentKey, openKeys } = this.state;
    return (
      <div>
        <div style={styles.logo} />
        <Menu
          selectedKeys={[currentKey]}
          onClick={this.handleClick}
          mode="inline"
        >
          {menuTreeNode}
        </Menu>
      </div>
    );
  }
}

export default SiderNav;
