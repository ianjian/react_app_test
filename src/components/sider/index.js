import React, { Component } from 'react';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import { Layout, List, Divider, } from 'antd';

const { Sider } = Layout;
const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
];

class SiderBar extends Component{

  renderCategory = () => {
    return (
      <div>
        <Divider orientation="left">Small Size</Divider>
        <List
          dataSource={data}
          renderItem={item => (
            <List.Item style={{ marginLeft: '20px', }}>
              {item}
            </List.Item>
          )}
        />
      </div>
    );
  };

  render() {
    return (
      <Sider width={300}  style={{ backgroundColor: '#fff', }}>
        {this.renderCategory()}
      </Sider>
    );
  }
}

export default SiderBar
