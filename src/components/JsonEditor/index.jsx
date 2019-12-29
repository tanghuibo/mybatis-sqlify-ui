import React from "react";

import MonacoEditor from "react-monaco-editor";

export default function(props) {
  return (
    <MonacoEditor
      className={props.className}
      height={props.height}
      language="json"
      theme="vs-dark"
      value={props.value}
      onChange={props.onChange}
      options={{
        wordWrap: "wordWrapColumn",
        readOnly: props.readOnly,
        automaticLayout: props.automaticLayout,
        autoIndent: true,
        fontSize: 24
      }}
    />
  );
}
