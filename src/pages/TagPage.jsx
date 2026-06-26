import { useParams, Link } from 'react-router-dom'
import allPosts from '../data/posts.js'

export default function TagPage() {
  const { tag } = useParams()
  const decodedTag = decodeURIComponent(tag)
  const posts = allPosts.filter(p => p.tags?.includes(decodedTag))

  // 获取所有标签及其数量
  const tagCounts = {}
  allPosts.forEach(post => {
    post.tags?.forEach(t => {
      tagCounts[t] = (tagCounts[t] || 0) + 1
    })
  })

  return (
    <>
      <div className="tag-page-header">
        <h1 className="tag-page-title">标签：{decodedTag}</h1>
        <p style={{ color: 'var(--color-muted)', marginBottom: 24 }}>
          共 {posts.length} 篇文章
        </p>
      </div>

      <div className="all-tags">
        {Object.entries(tagCounts).sort((a, b) => b[1] - a[1]).map(([t, count]) => (
          <Link
            key={t}
            to={`/tag/${t}`}
            className={`tag-badge ${t === decodedTag ? 'active' : ''}`}
          >
            {t} ({count})
          </Link>
        ))}
      </div>

      {posts.length === 0 ? (
        <p style={{ color: 'var(--color-muted)' }}>该标签下暂无文章。</p>
      ) : (
        posts.map(post => (
          <article key={post.slug} className="article-card">
            <h2 className="article-card-title">
              <Link to={`/post/${post.slug}`}>{post.title}</Link>
            </h2>
            <div className="article-card-meta">
              <time>{post.date}</time>
            </div>
            <p className="article-card-summary">{post.summary}</p>
          </article>
        ))
      )}

      <div style={{ marginTop: 40 }}>
        <Link to="/tags" style={{ fontSize: '0.95rem' }}>← 查看所有标签</Link>
      </div>
    </>
  )
}
