const classKind = 5;
export default [
  {
    label: "<IF",
    kind: classKind,
    insertText: 'if test=""',
    detail: "判断"
  },
  {
    label: "<FOR",
    kind: classKind,
    insertText:
      'for item="" index="" collection="" open="(" separator="," close=")"',
    detail: "循环"
  },
  {
    label: "<WHEN",
    kind: classKind,
    insertText: 'when test=""',
    detail: "当"
  },
  {
    label: "<CHOOSE",
    kind: classKind,
    insertText: "choose",
    detail: "选择"
  },
  {
    label: "<TRIM",
    kind: classKind,
    insertText: 'trim prefix="" prefixOverrides="" suffixOverrides=""',
    detail: "trim"
  },
  {
    label: "<WHERE",
    kind: classKind,
    insertText: "where",
    detail: "where"
  },
  {
    label: "<SET",
    kind: classKind,
    insertText: "SET",
    detail: "set"
  }
];
