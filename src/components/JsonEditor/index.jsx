import React from "react";

import MonacoEditor from "react-monaco-editor";

export default function(props) {
  return (
    <MonacoEditor
      height={props.height}
      language="json"
      theme="vs-dark"
      value={props.value}
      onChange={props.onChange}
      options={{ autoIndent: true, fontSize: 24, oundedSelection: false }}
    />
  );
}
