import React from "react";
import { Layout, Menu } from "antd";

import type { ItemType, MenuItemType } from "antd/es/menu/interface";

const { Header, Footer } = Layout;

/** Frame 组件 Props */
interface IProps {
  /** 导航数据 */
  navItems?: ItemType<MenuItemType>[];
  /** 插槽内容 */
  children?: React.ReactElement;
}

export default function Frame({ navItems, children }: IProps) {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      {/* 页眉 */}
      <Header style={{ display: "flex", alignItems: "center" }}>
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          items={navItems}
          style={{ flex: 1, minWidth: 0 }}
        />
      </Header>
      {/* 主体内容 */}
      {children}
      {/* 页脚 */}
      <Footer style={{ textAlign: "center" }}>
        <div>猫 ❤ 喵</div>
        <div>Copyright ©{new Date().getFullYear()} Neko</div>
      </Footer>
    </Layout>
  );
}
