import { Layout, Menu, Breadcrumb, Dropdown, Avatar, Badge } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { withRouter } from "react-router-dom";
import { clearToken } from "../../utils/auth";
import avater from "../../asset/avater.jpg";
import "./index.css";

import { adminRoutes } from "../../routes/index";

const { Header, Content, Sider } = Layout;

function Frame(props) {
  const popMenu = (
    <Menu
      onClick={(p) => {
        if (p.key === "logOut") {
          clearToken();
          props.history.push("/login");
        } else {
          // message.info(p.key); // tip
          if ((p.key = "noti")) {
            props.history.push("/admin/notices");
          }
        }
      }}
    >
      <Menu.Item key="noti">通知中心</Menu.Item>
      <Menu.Item key="setting">设置</Menu.Item>
      <Menu.Item key="logOut">退出</Menu.Item>
    </Menu>
  );
  return (
    <Layout>
      <Header className="header">
        {/* <div className="logo">
          <img
            src="http://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic.16pic.com%2F00%2F50%2F28%2F16pic_5028761_b.jpg&refer=http%3A%2F%2Fpic.16pic.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1632303565&t=1e9ae2100d2286ae3d3faa54fb7d9b16"
            alt="logo"
          ></img>
        </div> */}
        <Dropdown overlay={popMenu}>
          <div style={{ width: 200, position: "absolute", right: 20 }}>
            <Avatar src={avater} />
            <Badge dot={!props.isAllRead}>
              <span
                style={{
                  color: "#fff",
                  display: "inline-block",
                  padding: "0 10px",
                }}
              >
                WHY
              </span>
            </Badge>
            <DownOutlined />
          </div>
        </Dropdown>
      </Header>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{ height: "100%", borderRight: 0 }}
          >
            {adminRoutes.map((route) => (
              <Menu.Item
                onClick={(p) => props.history.push(p.key)}
                key={route.path}
              >
                {route.title}
              </Menu.Item>
            ))}
          </Menu>
        </Sider>
        <Layout style={{ padding: "0 24px 24px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              overflowY: "auto",
            }}
          >
            {props.children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}

export default withRouter(Frame);
