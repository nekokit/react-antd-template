import React from "react";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import Title from "antd/es/typography/Title";
import { HomeOutlined } from "@ant-design/icons";

import type { ItemType, MenuItemType } from "antd/es/menu/interface";
import type {
  BreadcrumbItemType,
  BreadcrumbSeparatorType,
} from "antd/es/breadcrumb/Breadcrumb";

const { Content, Sider } = Layout;

/** MainPage 组件 Props */
interface IProps {
  /** 页面标题 */
  pageTitle?: string;
  /** 面包屑数据 */
  breadcrumbItems?: Partial<BreadcrumbItemType & BreadcrumbSeparatorType>[];
  /** 侧边栏数据 */
  siderItems?: ItemType<MenuItemType>[];
  /** 插槽内容 */
  children?: React.ReactElement;
}

export default function MainPage({
  breadcrumbItems = [
    {
      href: "/",
      title: (
        <>
          <HomeOutlined />
          <span>主页</span>
        </>
      ),
    },
  ],
  pageTitle,
  siderItems,
  children,
}: IProps) {
  /** 主题 Token */
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  /** ELEMENT: 页面标题 */
  let titleContent = <></>;
  if (pageTitle) {
    /* 替换页面标题内容 */
    titleContent = (
      <Title level={2} style={{ marginTop: 0 }}>
        {pageTitle}
      </Title>
    );
  }

  /** ELEMENT: 侧边栏 */
  let siderContent = <></>;
  if (siderItems) {
    /* 替换侧边栏内容 */
    siderContent = (
      <Sider style={{ background: colorBgContainer }} width={200}>
        <Menu mode="inline" style={{ height: "100%" }} items={siderItems} />
      </Sider>
    );
  }

  return (
    <Content style={{ padding: "0 3rem" }}>
      {/* 面包屑 */}
      <Breadcrumb style={{ margin: "1rem 0" }} items={breadcrumbItems} />
      <Layout
        style={{
          padding: "2rem 0",
          background: colorBgContainer,
          borderRadius: borderRadiusLG,
        }}
      >
        {/* 侧边栏 */}
        {siderContent}
        <Content style={{ padding: "0 2rem", minHeight: 280 }}>
          {/* 面页面标题 */}
          {titleContent}
          {/* 主体内容 */}
          {children}
        </Content>
      </Layout>
    </Content>
  );
}
