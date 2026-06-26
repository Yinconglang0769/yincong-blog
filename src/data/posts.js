/**
 * 文章数据层
 *
 * 使用 Vite 的 import.meta.glob 批量导入 Markdown 文件（?raw 模式），
 * 用前端安全的 parseFrontMatter 解析 front matter（无 eval、无 Node 依赖）。
 *
 * 添加新文章：在 src/data/posts/ 下新建 .md 文件，
 * 文章格式：
 * ---
 * title: 标题
 * date: 2025-01-01
 * tags: [标签1, 标签2]
 * summary: 摘要
 * readingTime: 5 分钟
 * ---
 * 正文内容...
 */

// 前端安全的 front matter 解析器（替代 gray-matter，避免 eval 警告）
function parseFrontMatter(raw) {
  const fmRegex = /^---\n([\s\S]*?)\n---\n?([\s\S]*)$/
  const match = raw.match(fmRegex)

  if (!match) {
    return { data: {}, content: raw }
  }

  const fmString = match[1]
  const content = match[2]

  const data = {}
  const lines = fmString.split('\n')

  for (const line of lines) {
    const idx = line.indexOf(':')
    if (idx === -1) continue
    const key = line.slice(0, idx).trim()
    let value = line.slice(idx + 1).trim()

    // 解析数组，如 tags: [生活, 随想] 或 tags: 生活, 随想
    if (value.startsWith('[') && value.endsWith(']')) {
      const arrStr = value
        .slice(1, -1)
        .split(',')
        .map(s => s.trim().replace(/^['"]|['"]$/g, ''))
        .filter(Boolean)
      data[key] = arrStr
      continue
    }

    data[key] = value
  }

  return { data, content }
}

/* ---------- 导入所有 Markdown 文章 ---------- */
const mdModules = import.meta.glob('./posts/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
})

/* ---------- 解析并导出文章列表 ---------- */
const posts = []

for (const path in mdModules) {
  const rawContent = mdModules[path]
  const { data, content } = parseFrontMatter(rawContent)

  const slug = path
    .replace('./posts/', '')
    .replace('.md', '')

  posts.push({
    slug,
    title: data.title || slug,
    date: data.date || '1970-01-01',
    tags: Array.isArray(data.tags) ? data.tags : [],
    summary: data.summary || '',
    readingTime: data.readingTime || '',
    content,
  })
}

// 按日期降序排序
posts.sort((a, b) => new Date(b.date) - new Date(a.date))

export default posts

/* ---------- 工具函数 ---------- */

/** 获取所有唯一标签及其文章数 */
export function getAllTags() {
  const map = {}
  posts.forEach(post => {
    post.tags?.forEach(tag => {
      map[tag] = (map[tag] || 0) + 1
    })
  })
  return map
}

/** 按标签筛选文章 */
export function getPostsByTag(tag) {
  return posts.filter(post => post.tags?.includes(tag))
}
