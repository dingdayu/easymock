module.exports = {
  output: "api",
  host: "http://127.0.0.1:7300",
  template: "axios",
  projects: [
    {
      id: "5c0be14ba134940020d87d41",
      name: "user", // 生成到 api/user 目录下。
      black: [
        "/query" // 排除 query 接口
      ]
    }
  ]
};
