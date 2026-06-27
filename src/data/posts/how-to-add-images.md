---
title: 博客如何添加图片？三种方式详解
date: 2026-06-27
tags: [教程, 博客]
summary: 在博客文章里插入图片的完整指南，涵盖本地图片、网络图片和外链图床三种方式。
readingTime: 3 分钟
---

# 博客如何添加图片？三种方式详解

图片能让文章更生动。这篇介绍在博客里插入图片的三种方式。

## 方式一：本地图片（推荐）

把图片放到 `public/images/` 目录，然后在 Markdown 里这样写：

```markdown
![图片说明](/images/你的图片名.jpg)
```

**示例：**

![示例图片](/images/example.svg)

> 注意：路径以 `/images/` 开头，不要写 `public/images/`。

**优点：** 图片和文章一起托管在 GitHub，永不失效。

## 方式二：网络图片

直接用图片的完整网址：

```markdown
![GitHub Logo](https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png)
```

![GitHub Logo](https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png)

**优点：** 不占仓库空间。
**缺点：** 如果原网站删图，你的文章图片也会失效。

## 方式三：图床外链

把图片上传到图床（如 SM.MS、阿里云 OSS、七牛云），拿到外链后引用：

```markdown
![图片](https://你的图床地址/图片.jpg)
```

**优点：** 适合图片多的场景，CDN 加速快。
**缺点：** 依赖第三方服务。

---

## 总结

| 方式 | 适合场景 | 稳定性 |
|------|---------|--------|
| 本地图片 | 少量图片、博客配图 | ⭐⭐⭐ 最稳定 |
| 网络图片 | 引用官方资源 | ⭐⭐ 可能失效 |
| 图床外链 | 图片多、追求速度 | ⭐⭐ 依赖第三方 |

**推荐用方式一**，图片跟着代码一起在 GitHub 上，永久有效！
