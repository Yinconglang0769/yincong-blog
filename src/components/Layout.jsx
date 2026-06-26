import { Outlet, NavLink } from 'react-router-dom'
import './Layout.module.css'

export default function Layout() {
  return (
    <div className="layout">
      <header className="header">
        <div className="header-inner">
          <NavLink to="/" className="blog-title">
            尹聪朗的博客
          </NavLink>
          <nav>
            <ul className="nav-links">
              <li><NavLink to="/" end>首页</NavLink></li>
              <li><NavLink to="/tags">标签</NavLink></li>
              <li><NavLink to="/about">关于</NavLink></li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="main-content">
        <Outlet />
      </main>
      <footer className="footer">
        <p>© {new Date().getFullYear()} 尹聪朗 · 用 ❤️ 和 React 构建</p>
      </footer>
    </div>
  )
}
