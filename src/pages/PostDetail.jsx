import { useParams, Link } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'
import posts from '../data/posts.js'
import './PostDetail.module.css'

export default function PostDetail() {
  const { slug } = useParams()
  const post = posts.find(p => p.slug === slug)

  if (!post) {
    return (
      <div style={{ textAlign: 'center', padding: '80px 0' }}>
        <h2>文章未找到</h2>
        <p style={{ marginTop: 16, color: 'var(--color-muted)' }}>
          <Link to="/">返回首页 →</Link>
        </p>
      </div>
    )
  }

  return (
    <>
      <header className="post-header">
        <h1 className="post-title">{post.title}</h1>
        <div className="post-meta">
          <time>{post.date}</time>
          <span>·</span>
          <span>{post.readingTime || '5 分钟阅读'}</span>
          {post.tags && post.tags.length > 0 && (
            <span className="post-tags" style={{ display: 'inline-flex', gap: 6, flexWrap: 'wrap' }}>
              {post.tags.map(tag => (
                <Link key={tag} to={`/tag/${tag}`} className="tag-badge">{tag}</Link>
              ))}
            </span>
          )}
        </div>
      </header>

      <div className="markdown-body">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeHighlight]}
        >
          {post.content}
        </ReactMarkdown>
      </div>

      <div style={{ marginTop: 60, paddingTop: 24, borderTop: '1px solid var(--color-border)' }}>
        <Link to="/" style={{ fontSize: '0.95rem', color: 'var(--color-primary)' }}>
          ← 返回首页
        </Link>
      </div>
    </>
  )
}
