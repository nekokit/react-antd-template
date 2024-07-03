import { Link, Outlet, createBrowserRouter } from "react-router-dom";
import { ConfigProvider } from "antd";

import ErrorPage from "@/pages/ErrorPage";
import Home from "@/pages/Home";
import Frame from "@/pages/Frame";
import Posts from "@/pages/Posts";
import Users from "@/pages/Users";

/** 导航数据 */
const frameData = {
  navItems: [
    { key: "0", label: <Link to={"/"}>首页</Link> },
    { key: "1", label: <Link to={"/users"}>用户</Link> },
    { key: "2", label: <Link to={"/posts"}>文章</Link> },
  ],
};

/** 路由数据 */
export const router = createBrowserRouter([
  {
    /** uri */
    path: "/",
    /** 渲染内容 */
    element: (
      <ConfigProvider>
        <Frame navItems={frameData.navItems}>
          <Outlet />
        </Frame>
      </ConfigProvider>
    ),
    /** 错误页面 */
    errorElement: <ErrorPage />,

    /** 后代内容 */
    children: [
      /** 本路由内容 */
      { index: true, element: <Home /> },
      /** 后代路由 */
      { path: "posts", element: <Posts /> },
      { path: "users", element: <Users /> },
    ],
  },
]);
