import { Link } from 'react-router-dom'
import './ArticleCard.module.css'

export default function ArticleCard({ post }) {
  return (
    <article className="article-card">
      <h2 className="article-card-title">
        <Link to={`/post/${post.slug}`}>{post.title}</Link>
      </h2>
      <div className="article-card-meta">
        <time>{post.date}</time>
        <span>·</span>
        <span>{post.readingTime || '5 分钟阅读'}</span>
      </div>
      {post.tags && post.tags.length > 0 && (
        <div className="article-card-tags" style={{ marginBottom: 12 }}>
          {post.tags.map(tag => (
            <Link key={tag} to={`/tag/${tag}`} className="tag-badge">{tag}</Link>
          ))}
        </div>
      )}
      <p className="article-card-summary">{post.summary}</p>
    </article>
  )
}
