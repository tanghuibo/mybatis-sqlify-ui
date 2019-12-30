import React from "react";

import MonacoEditor from "react-monaco-editor";

import mybatisXmlKeyWords from "./mybatisXmlKeyWords";

import mySqlKeyWords from "./mySqlKeyWords";

export default function(props) {
  return (
    <MonacoEditor
      className={props.className}
      height={props.height}
      language="sql"
      theme="vs-dark"
      value={props.value}
      onChange={props.onChange}
      options={{
        wordWrap: "bounded",
        readOnly: props.readOnly,
        automaticLayout: props.automaticLayout,
        autoIndent: true,
        fontSize: 24
      }}
      editorDidMount={(editor, monaco) => {
        monaco.languages.registerCompletionItemProvider("sql", {
          provideCompletionItems() {
            return {
              suggestions: JSON.parse(JSON.stringify(mySqlKeyWords))
            };
          },
          triggerCharacters: [" "]
        });
        monaco.languages.registerCompletionItemProvider("sql", {
          provideCompletionItems() {
            return {
              suggestions: JSON.parse(JSON.stringify(mybatisXmlKeyWords))
            };
          },
          triggerCharacters: ["<"]
        });
      }}
    />
  );
}
