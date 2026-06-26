import './About.module.css'

export default function About() {
  return (
    <div className="about-section">
      <h1>关于我</h1>
      <p>
        你好，我是<strong>尹聪朗</strong> 👋
      </p>
      <p>
        欢迎来到我的个人博客！这里是我记录生活点滴、技术学习和思考的地方。
        我相信写作是最好的思考方式，希望通过这个博客与更多志同道合的朋友交流。
      </p>
      <h2 style={{ fontSize: '1.25rem', marginTop: 32, marginBottom: 16 }}>关于这个博客</h2>
      <p>
        这个博客使用 <strong>React</strong> + <strong>Vite</strong> 构建，
        支持 Markdown 渲染，所有文章以 Markdown 文件形式存储。
        博客开源，你可以在 <a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a> 上找到源码。
      </p>
      <h2 style={{ fontSize: '1.25rem', marginTop: 32, marginBottom: 16 }}>联系方式</h2>
      <ul style={{ paddingLeft: 20, color: 'var(--color-muted)' }}>
        <li>Email: yincong@example.com</li>
        <li>GitHub: github.com/yincong</li>
      </ul>
    </div>
  )
}
