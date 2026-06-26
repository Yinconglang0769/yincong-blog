import { Link, useParams, useNavigate } from 'react-router-dom'
import posts from '../data/posts.js'

const POSTS_PER_PAGE = 5

export default function Home() {
  const { page } = useParams()
  const navigate = useNavigate()
  const currentPage = parseInt(page || '1', 10)
  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE)

  if (totalPages === 0) {
    return <p style={{ color: 'var(--color-muted)' }}>暂无文章，请在 src/data/posts/ 下添加 .md 文件。</p>
  }

  // 页码不合法时重定向
  if (currentPage < 1 || currentPage > totalPages) {
    navigate('/', { replace: true })
    return null
  }

  const startIndex = (currentPage - 1) * POSTS_PER_PAGE
  const pagePosts = posts.slice(startIndex, startIndex + POSTS_PER_PAGE)

  return (
    <>
      <div className="home-header">
        <h1>尹聪朗的博客</h1>
        <p>生活 · 思考 · 技术 —— 记录成长的点滴</p>
      </div>

      {pagePosts.map(post => (
        <ArticleCard key={post.slug} post={post} />
      ))}

      {totalPages > 1 && (
        <nav className="pagination" aria-label="分页">
          <button
            disabled={currentPage <= 1}
            onClick={() => navigate(currentPage === 2 ? '/' : `/page/${currentPage - 1}`)}
          >
            ← 上一页
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map(num => (
            <button
              key={num}
              className={num === currentPage ? 'active' : ''}
              onClick={() => navigate(num === 1 ? '/' : `/page/${num}`)}
            >
              {num}
            </button>
          ))}
          <button
            disabled={currentPage >= totalPages}
            onClick={() => navigate(`/page/${currentPage + 1}`)}
          >
            下一页 →
          </button>
        </nav>
      )}
    </>
  )
}

function ArticleCard({ post }) {
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
        <div style={{ marginBottom: 8 }}>
          {post.tags.map(tag => (
            <Link key={tag} to={`/tag/${tag}`} className="tag-badge">{tag}</Link>
          ))}
        </div>
      )}
      <p className="article-card-summary">{post.summary}</p>
    </article>
  )
}
