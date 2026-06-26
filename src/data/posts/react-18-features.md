---
title: React 18 新特性实战总结
date: 2025-02-20
tags: [技术, React, 前端]
summary: 梳理 React 18 中最重要的几个新特性，包括并发渲染、Suspense、useTransition 等，并给出实际使用建议。
readingTime: 8 分钟
---

# React 18 新特性实战总结

React 18 引入了一些非常重要的新特性，本文结合实战经验做一个总结。

## 并发渲染（Concurrent Rendering）

React 18 默认启用了并发渲染，这意味着 React 可以将渲染工作拆分成多个小任务，在浏览器空闲时执行，从而避免阻塞主线程。

```jsx
import { createRoot } from 'react-dom/client'
import App from './App'

// React 18 新 API
const root = createRoot(document.getElementById('root'))
root.render(<App />)
```

## useTransition

`useTransition` 让你可以标记某些状态更新为"非紧急"的，React 会在紧急更新完成后再处理它们。

```jsx
import { useTransition, useState } from 'react'

function SearchResults() {
  const [isPending, startTransition] = useTransition()
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])

  function handleChange(e) {
    setQuery(e.target.value)  // 紧急更新：输入框立即响应
    startTransition(() => {
      setResults(search(e.target.value))  // 非紧急：搜索结果可以稍后更新
    })
  }

  return (
    <div>
      <input value={query} onChange={handleChange} />
      {isPending ? <Spinner /> : <Results items={results} />}
    </div>
  )
}
```

## Suspense 增强

React 18 中 Suspense 支持服务端渲染时的流式 HTML 和选择性 hydration。

| 特性 | React 17 | React 18 |
|------|----------|----------|
| 并发渲染 | ❌ | ✅ |
| useTransition | ❌ | ✅ |
| useDeferredValue | ❌ | ✅ |
| Suspense SSR | 有限支持 | 完整支持 |

## 总结

React 18 的核心思想是**并发**，它让 React 应用更加响应迅速。建议在新项目中直接使用 React 18，并逐步采用这些新特性。

**参考链接：**

- [React 18 官方发布说明](https://react.dev/blog/2022/03/29/react-v18)
- [Concurrent React 深度指南](https://react.dev/learn/concurrent-react)
