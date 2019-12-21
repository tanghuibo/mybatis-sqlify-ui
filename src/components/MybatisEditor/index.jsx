import React from "react";

import MonacoEditor from "react-monaco-editor";

import mybatisXmlKeyWords from "./mybatisXmlKeyWords";

import mySqlKeyWords from "./mySqlKeyWords";

export default function(props) {
  return (
    <MonacoEditor
      height={props.height}
      language="sql"
      theme="vs-dark"
      value={props.value}
      onChange={props.onChange}
      options={{ autoIndent: true, fontSize: 24, oundedSelection: false }}
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
