import { Link } from 'react-router-dom'
import allPosts from '../data/posts.js'

export default function TagsPage() {
  // 统计所有标签
  const tagCounts = {}
  allPosts.forEach(post => {
    post.tags?.forEach(tag => {
      tagCounts[tag] = (tagCounts[tag] || 0) + 1
    })
  })

  const sortedTags = Object.entries(tagCounts).sort((a, b) => b[1] - a[1])

  return (
    <>
      <div className="tag-page-header">
        <h1 className="tag-page-title">标签分类</h1>
        <p style={{ color: 'var(--color-muted)', marginBottom: 24 }}>
          共 {sortedTags.length} 个标签，{allPosts.length} 篇文章
        </p>
      </div>

      <div className="all-tags" style={{ fontSize: '1rem' }}>
        {sortedTags.map(([tag, count]) => (
          <Link
            key={tag}
            to={`/tag/${tag}`}
            className="tag-badge"
            style={{ fontSize: '0.9rem', padding: '6px 14px' }}
          >
            {tag} <span style={{ opacity: 0.6 }}>{count}</span>
          </Link>
        ))}
      </div>
    </>
  )
}
