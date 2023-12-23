# SchoolCard 简易 CMS

这是一个使用 Node.js、Express、MySQL 和 JWT（用于身份验证）构建的 CMS 应用程序。

## 功能

- 用户注册和登录
- JWT 身份验证
- 对卡片的 CRUD 操作
- 使用 MySQL 进行数据存储
- 3种卡片类型，包括失物招领、交友、普通

## 模型

- 用户：包含用户名、密码等字段。
- 卡片：包含内容、创建日期、所有者和类型等字段。

## API 端点

- 注册：`POST /api/register`
- 登录：`POST /api/login`
- 新建卡片：`POST /api/cards`
- 删除卡片：`DELETE /api/cards/:id`
- 卡片查询：`GET /api/public/card`
- API 示例： 

## 设置

1. 克隆仓库
2. 使用 `npm install` 安装依赖
3. 设置你的 MySQL 数据库，并在 `.env` 文件中更新连接字符串
4. 使用 `npm start` 运行服务器