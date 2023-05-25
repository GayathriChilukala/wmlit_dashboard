import { useEffect, useState } from 'react';
import { Layout, Menu, theme } from 'antd';
import { useRouter } from 'next/router';
import { createFromIconfontCN } from '@ant-design/icons';
  import React from 'react';
import StoreOrders from '@/components/StoreOrders';
import { Billing } from '@/components/Billing';
import LiveStores from '@/components/LiveStores';
  const { Header, Content, Footer, Sider } = Layout;

  const IconFont = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
  });
 
export const Dashboard = () => {
  
  const [current, setCurrent] = useState('0');
  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };
    const {
        token: { colorBgContainer },
      } = theme.useToken();
      const router = useRouter();
      return (
      
        <Layout hasSider>
          <Sider
            style={{
              overflow: 'auto',
              height: '100vh',
              position: 'fixed',
              left: 0,
              top: 0,
              bottom: 0,
             
            }}
          >
            <div  ><img src="https://www.agnicart.com/static/images/logo/agni-cart.png"/></div>
            <Menu onClick={onClick} selectedKeys={[current]} theme="dark" mode="inline" defaultSelectedKeys={['4']}  > 
            <Menu.Item key="1" >Billing <IconFont type="icon-bill-o" /> </Menu.Item>
    <Menu.Item key="2" >LiveStores</Menu.Item>
    <Menu.Item key="3"  >Store Orders</Menu.Item>
            </Menu>
            

           
          </Sider>
          <Layout className="site-layout" style={{ marginLeft: 200 }}>
          <Header style={{ padding: 0, background: colorBgContainer }} ><h1 style={{textAlign:'center',fontSize:'20px'}}><b>Dashboard</b></h1></Header>
          <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>

                            <div style={{ padding: 24, textAlign: 'center', background: colorBgContainer }}>
                            {(() => {
        if (current==0) {
          return (
            <div>Dashboard</div>
          )
        } else if (current==1) {
          return (
            <Billing/>
          ) 
        } else if (current==2) {
          return (
            <LiveStores/>
          ) 
        } else {
          return (
            <StoreOrders/>
          )
        }
      })()}
                              </div>
                              
                            
                        </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
          </Layout>
        </Layout>
      
      );
}
