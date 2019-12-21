import React, { useState } from "react";
import axios from "./plugins/axiosPlugin";
import MybatisEditor from "./components/MybatisEditor/index";
import JsonEditor from "./components/JsonEditor/index";
import "./App.css";
import { Row, Col, Button } from "antd";

function App() {
  const [mybatisSql, setMybatisSql] = useState("");
  const [mybatisParam, setMybatisParam] = useState("");

  function runProcess() {
    console.log(mybatisSql, mybatisParam);
  }
  return (
    <div className="App">
      <Row gutter={16}>
        <Col className="gutter-row" span={12}>
          <div className="formTitle">SQL</div>
          <MybatisEditor
            height={"40vh"}
            value={mybatisSql}
            onChange={setMybatisSql}
          />
        </Col>
        <Col className="gutter-row" span={12}>
          <div className="formTitle">param</div>
          <JsonEditor
            height={"40vh"}
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
        <Button className="runButton" onClick={runProcess}>
          运行
        </Button>
      </div>
    </div>
  );
}

export default App;
