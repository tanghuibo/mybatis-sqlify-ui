export default [
  "ADD",
  "DISTINCT",
  "ALL",
  "AND",
  "AS",
  "ASC",
  "BEFORE",
  "DEFAULT",
  "DELETE",
  "DESC",
  "DUAL",
  "ELSE",
  "ELSEIF",
  "EXISTS",
  "EXIT",
  "EXPLAIN",
  "FALSE",
  "FOR",
  "FROM",
  "GOTO",
  "GROUP",
  "HAVING",
  "IF",
  "IN",
  "INNER",
  "INOUT",
  "INSERT",
  "INTO",
  "IS",
  "JOIN",
  "KEY",
  "KEYS",
  "LABEL",
  "LEFT",
  "LIKE",
  "LIMIT",
  "LOCALTIME",
  "LOCALTIMESTAMP",
  "LOOP",
  "NOT",
  "NULL",
  "ON",
  "OR",
  "ORDER",
  "OUT",
  "SELECT",
  "SET",
  "SHOW",
  "TERMINATED",
  "THEN",
  "TO",
  "TRAILING",
  "TRIGGER",
  "TRUE",
  "UNDO",
  "UNION",
  "UNIQUE",
  "UNLOCK",
  "UNSIGNED",
  "UPDATE",
  "USAGE",
  "USE",
  "USING",
  "UTC_DATE",
  "UTC_TIME",
  "UTC_TIMESTAMP",
  "VALUES",
  "WHEN",
  "WHERE",
  "WHILE",
  "WITH"
].map(item => ({
  label: item,
  kind: 18,
  insertText: item,
  detail: item
}));
