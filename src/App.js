import React, { useState } from "react";
import MybatisEditor from "./components/MybatisEditor/index";
import JsonEditor from "./components/JsonEditor/index";
import { sqlify } from "./service";
import "./App.css";
import { Row, Col, Button, Result } from "antd";

function App() {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [sqlifyResult, setSqlifyResult] = useState({});
  const [mybatisSql, setMybatisSql] = useState(
    "select * from name = #{name} and value = #{value}"
  );
  const [mybatisParam, setMybatisParam] = useState(
    JSON.stringify(
      {
        name: "name",
        value: "value"
      },
      2,
      2
    )
  );

  async function runProcess() {
    try {
      setLoading(true);
      let param = mybatisParam;
      try {
        param = JSON.parse(param);
      } catch (error) {}

      let result = await sqlify(mybatisSql, param);
      setSqlifyResult(result.data);
      setErrorMessage("");
    } catch (error) {
      console.error(error);
      setSqlifyResult({});
      if (error.message) {
        setErrorMessage(error.message);
      }
    } finally {
      setLoading(false);
    }
  }
  return (
    <div className="App">
      <Row gutter={16} className="fillHorizontal">
        <Col className="gutter-row" span={12}>
          <div className="formTitle">SQL</div>
          <MybatisEditor
            height={"calc(68vh - 280px)"}
            value={mybatisSql}
            onChange={setMybatisSql}
          />
        </Col>
        <Col className="gutter-row" span={12}>
          <div className="formTitle">PARAM</div>
          <JsonEditor
            height={"calc(68vh - 280px)"}
            value={mybatisParam}
            onChange={setMybatisParam}
          />
        </Col>
      </Row>
      <div
        style={{
          textAlign: "center"
        }}
      >
        <Button
          loading={loading}
          className="runButton"
          type="primary"
          onClick={runProcess}
        >
          RUN
        </Button>
      </div>
      {errorMessage ? (
        <div>
          <Result
            status="error"
            title={<span style={{ color: "white" }}>{errorMessage}</span>}
          />
        </div>
      ) : sqlifyResult.param ||
        sqlifyResult.sqlRenderBefore ||
        sqlifyResult.sqlRenderAfter ? (
        <div>
          <Result
            status="success"
            extra={
              <div>
                {sqlifyResult.sqlRenderAfter ? (
                  <div className="showCodeView">
                    <MybatisEditor
                      height={"15vh"}
                      readOnly={true}
                      value={sqlifyResult.sqlRenderAfter}
                    />
                  </div>
                ) : null}
                <Row gutter={16}>
                  <Col span={12}>
                    {sqlifyResult.sqlRenderBefore ? (
                      <div className="showCodeView">
                        <MybatisEditor
                          height={"15vh"}
                          readOnly={true}
                          value={sqlifyResult.sqlRenderBefore}
                        />
                      </div>
                    ) : null}
                  </Col>
                  <Col span={12}>
                    {sqlifyResult.param ? (
                      <div className="showCodeView">
                        <JsonEditor
                          height={"15vh"}
                          readOnly={true}
                          value={JSON.stringify(sqlifyResult.param)}
                        />
                      </div>
                    ) : null}
                  </Col>
                </Row>
              </div>
            }
          />
        </div>
      ) : null}
    </div>
  );
}

export default App;
