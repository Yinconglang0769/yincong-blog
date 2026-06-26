# 尹聪朗的博客

个人综合博客，使用 React + Vite 构建。

## 功能

- 🏠 首页文章列表（支持分页）
- 📄 文章详情页（Markdown 渲染 + 代码高亮）
- 🏷️ 标签分类页
- 🙋 关于页面
- 📱 响应式设计

## 本地开发

```bash
npm install
npm run dev
```

## 添加新文章

在 `src/data/posts/` 目录下新建 `.md` 文件，格式如下：

```markdown
---
title: 文章标题
date: 2025-01-01
tags: [标签1, 标签2]
summary: 文章摘要
readingTime: 5 分钟
---

文章内容（支持 Markdown）...
```

## 构建

```bash
npm run build
```
