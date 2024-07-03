import { Empty } from "antd";
import {
  HomeOutlined,
  FileTextOutlined,
  MailOutlined,
  AppstoreOutlined,
} from "@ant-design/icons";

import MainPage from "@/pages/Frame/MainPage";

/** 面包屑数据 */
const breadcrumbItems = [
  {
    href: "/",
    title: (
      <>
        <HomeOutlined />
        <span>主页</span>
      </>
    ),
  },
  {
    href: "/",
    title: (
      <>
        <FileTextOutlined />
        <span>文章</span>
      </>
    ),
  },
];

/** 页面标题 */
const pageTitle = "文章管理";

/** 侧边栏数据 */
const siderItems = [
  {
    key: "g0",
    label: "群组 0",
    icon: <MailOutlined />,
    children: [
      { key: "0", label: "实例 0" },
      {
        key: "s0",
        label: "子菜单",
        children: [
          { key: "1", label: "实例 0" },
          { key: "2", label: "实例 1" },
        ],
      },
    ],
  },
  {
    key: "g1",
    label: "群组 1",
    icon: <AppstoreOutlined />,
    children: [{ key: "7", label: "实例 7" }],
  },
  { key: "8", label: "实例 8" },
];

export default function Posts() {
  return (
    <MainPage
      pageTitle={pageTitle}
      siderItems={siderItems}
      breadcrumbItems={breadcrumbItems}
    >
      <div>
        <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
      </div>
    </MainPage>
  );
}
