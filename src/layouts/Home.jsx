import { Breadcrumb, Layout, Menu, theme } from "antd";
import Sider from "antd/es/layout/Sider";
import { Content, Header } from "antd/es/layout/layout";
import React, { useState } from "react";
import { mockdataRoutes } from "../routes";
import Title from "antd/es/typography/Title";
import { Link, Route, Routes } from "react-router-dom";

const Home = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [breadcrumbItems, setBreadcrumbItems] = useState([
    { title: "Home" },
    { title: "Dashboard" },
  ]);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  function HandlerMenu(value1, value2) {
    if (value2) {
      setBreadcrumbItems([{ title: value1 }, { title: value2 }]);
    } else {
      setBreadcrumbItems([{ title: "Home" }, { title: value1 }]);
    }
  }

  return (
    <Layout>
      <Header
        style={{
          position: "sticky",
          display: "flex",
          alignItems: "center",
          top: 0,
          zIndex: 1,
          background: colorBgContainer,
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Title level={2}>DPAY</Title>
      </Header>
      <Layout
        style={{
          minHeight: "100vh",
        }}
      >
        <Sider
          theme="light"
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
        >
          <div className="demo-logo-vertical" />
          <Menu mode="inline" defaultSelectedKeys={["A"]}>
            {mockdataRoutes.map((dt) => (
              <React.Fragment key={dt.key}>
                {dt.children && dt.children.length > 0 && (
                  <Menu.SubMenu title={dt.label} icon={dt.icon}>
                    {dt.children.map((childDt) => (
                      <Menu.Item
                        key={childDt.key}
                        onClick={() => HandlerMenu(dt.label, childDt.label)}
                      >
                        <span>{childDt.label}</span>
                        <Link to={childDt.link} />
                      </Menu.Item>
                    ))}
                  </Menu.SubMenu>
                )}
                {!dt.children && (
                  <Menu.Item key={dt.key} onClick={() => HandlerMenu(dt.label)}>
                    {dt.icon}
                    <span>{dt.label}</span>
                    <Link to={dt.link} />
                  </Menu.Item>
                )}
              </React.Fragment>
            ))}
          </Menu>
        </Sider>
        <Layout>
          <Content
            style={{
              margin: "0 16px",
            }}
          >
            <Breadcrumb
              style={{
                margin: "16px 0",
                padding: ".8rem",
                borderRadius: "15px",
                background: colorBgContainer,
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              }}
              items={breadcrumbItems}
            />
            <div
              style={{
                padding: 24,
                minHeight: 360,
                borderRadius: "15px",
                background: colorBgContainer,
              }}
            >
              <Routes>
                {mockdataRoutes.map((dt) => (
                  <React.Fragment key={dt.key}>
                    {dt.children &&
                      dt.children.length > 0 &&
                      dt.children.map((childDt) => (
                        <Route
                          path={childDt.link}
                          element={childDt.element}
                          key={childDt.key}
                        />
                      ))}
                    {!dt.children && (
                      <Route path={dt.link} element={dt.element} key={dt.key} />
                    )}
                  </React.Fragment>
                ))}
              </Routes>
            </div>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default Home;
