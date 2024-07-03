import { Col, Row } from "antd";
import Title from "antd/es/typography/Title";

import MainPage from "@/pages/Frame/MainPage";
import viteLogo from "@/assets/vite.svg";
import reactLogo from "@/assets/react.svg";
import routerLogo from "@/assets/reactRouter.svg";
import antDesignLogo from "@/assets/antDesign.svg";

export default function Home() {
  return (
    <MainPage>
      <div>
        <Title style={{ textAlign: "center" }}>
          React + AntDesign 简易模板
        </Title>
        {/* Logo 列表 */}
        <Row
          justify="space-around"
          align="middle"
          style={{ marginTop: "3rem" }}
        >
          <Col className="gutter-row" span={4}>
            <div>
              <img width="100%" src={viteLogo} alt="viteLogo" />
            </div>
          </Col>
          <Col className="gutter-row" span={4}>
            <div>
              <img width="100%" src={reactLogo} alt="reactLogo" />
            </div>
          </Col>
          <Col className="gutter-row" span={4}>
            <div>
              <img width="100%" src={routerLogo} alt="routerLogo" />
            </div>
          </Col>
          <Col className="gutter-row" span={4}>
            <div>
              <img width="100%" src={antDesignLogo} alt="antDesignLogo" />
            </div>
          </Col>
        </Row>
        {/* 名称列表 */}
        <Row justify="space-around" align="middle">
          <Col className="gutter-row" span={4}>
            <Title level={3} style={{ textAlign: "center" }}>
              Vite
            </Title>
          </Col>
          <Col className="gutter-row" span={4}>
            <Title level={3} style={{ textAlign: "center" }}>
              React
            </Title>
          </Col>
          <Col className="gutter-row" span={4}>
            <Title level={3} style={{ textAlign: "center" }}>
              React Router
            </Title>
          </Col>
          <Col className="gutter-row" span={4}>
            <Title level={3} style={{ textAlign: "center" }}>
              AntDesign
            </Title>
          </Col>
        </Row>
      </div>
    </MainPage>
  );
}
