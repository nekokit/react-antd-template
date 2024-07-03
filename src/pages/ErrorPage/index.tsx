import { Button, Result, ResultProps } from "antd";
import { useNavigate, useRouteError } from "react-router-dom";

/** 错误信息简易接口 */
interface HttpError {
  /** 错误码 */
  status: number;
  /** 错误信息 */
  statusText?: string;
  /** 错误信息 */
  message?: string;
}

export default function ErrorPage() {
  /** 导航控制器 */
  const navigate = useNavigate();
  /** 错误信息 */
  const error = useRouteError();
  console.error(error);

  /** 错误信息 */
  let status = (error as HttpError).status;
  /** 提示组件 props */
  let resultInfo: ResultProps = {
    status: "error",
    title: "未知错误",
    subTitle: (
      <>
        <div>出现未知错误，请稍候重试。</div>
        <div>
          {(error as HttpError).statusText || (error as HttpError).message}
        </div>
      </>
    ),
    extra: (
      <>
        <Button type="primary" onClick={() => location.reload()}>
          刷新网页
        </Button>
        <Button href="/">回到主页</Button>
      </>
    ),
  };
  if (status >= 500 && status < 600) {
    /* 更新提示组件 props： 50x 错误 */
    resultInfo = {
      status: "500",
      title: "服务器错误",
      subTitle: "服务器出错，请稍后再试或等待服务器恢复。",
      extra: (
        <>
          <Button
            type="primary"
            onClick={() => {
              navigate(-1);
            }}
          >
            返回上一页
          </Button>
          <Button href="/">回到主页</Button>
        </>
      ),
    };
  } else if (status === 404) {
    /* 更新提示组件 props： 404 错误 */
    resultInfo = {
      status: "404",
      title: "页面未找到",
      subTitle: "页面未找到，请检查 URL。",
      extra: (
        <>
          <Button
            type="primary"
            onClick={() => {
              navigate(-1);
            }}
          >
            返回上一页
          </Button>
          <Button href="/">回到主页</Button>
        </>
      ),
    };
  } else if (status === 403) {
    /* 更新提示组件 props： 403 错误 */
    resultInfo = {
      status: "403",
      title: "未获授权",
      subTitle: "没有足够的权限访问此页面。",
      extra: (
        <>
          <Button
            type="primary"
            onClick={() => {
              navigate(-1);
            }}
          >
            返回上一页
          </Button>
          <Button href="/">回到主页</Button>
        </>
      ),
    };
  }

  return (
    <Result
      status={resultInfo.status}
      title={resultInfo.title}
      subTitle={resultInfo.subTitle}
      extra={resultInfo.extra}
    />
  );
}
