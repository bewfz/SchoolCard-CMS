const express = require('express');
const bodyParser = require('body-parser');
const jwtMiddleware = require('./middleware/jwt');
const routes = require('./routes');

const app = express();

// 使用body-parser处理json数据
app.use(bodyParser.json());

// 使用JWT鉴权中间件
app.use(jwtMiddleware);

// 设置路由
app.use('/api', routes);

// 错误处理中间件
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({ error: err.message });
});

module.exports = app;