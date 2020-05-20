import React, { Component } from 'react';
import styles from './index.less';
import { Layout, Menu, Avatar, Badge, Popover } from 'antd';
import flask from '@/assets/flask.png';
import django from '@/assets/django.png';
import tornado from '@/assets/tornado.png';
import spider from '@/assets/spider.png';
import SiderBar from '../components/sider/index';
import { UserOutlined } from '@ant-design/icons';


const { Header, Content } = Layout;
const profilePopover = (
  <div>
    <p>test</p>
  </div>
);
const nav_list = [
  {
    key: 'Flask',
    img_src: flask,
  }, {
    key: 'Django',
    img_src: django,
  }, {
    key: 'Tornado',
    img_src: tornado,
  }, {
    key: 'Spider',
    img_src: spider,
  },
];

class Index extends Component {

  // getProfile = () => {
  //   const { profile } = this.props;
  //   const profilePopover = profile.map((element) => {
  //
  //   });
  //
  // };

  render() {
    const { children } = this.props;
    return (
      <Layout>
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
          <div className="logo"/>
          <Menu theme="light" mode="horizontal" defaultSelectedKeys={['1']}>
            {nav_list.map((element) => {
              return (
                <Menu.Item key={element.key}>
                  <img src={element.img_src} alt=""/>&nbsp;{element.key}
                </Menu.Item>
              );
            })}
            <span className="avatar-item">
            <Badge count={1} style={{ backgroundColor: '#ff2d74' }}>
              <Popover placement="bottom" content={profilePopover}>
                <Avatar shape="square" icon={<UserOutlined/>}/>
              </Popover>

            </Badge>
            </span>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px', marginTop: 64 }}>
          <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
            <SiderBar/>
            {/*{children}*/}
            <Content style={{ padding: '0 24px', minHeight: 280 }}>Content</Content>
          </Layout>
        </Content>
      </Layout>
    );
  }
}

export default Index;
