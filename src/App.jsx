import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import PostDetail from './pages/PostDetail'
import TagPage from './pages/TagPage'
import TagsPage from './pages/TagsPage'
import About from './pages/About'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/page/:page" element={<Home />} />
        <Route path="/post/:slug" element={<PostDetail />} />
        <Route path="/tag/:tag" element={<TagPage />} />
        <Route path="/tags" element={<TagsPage />} />
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
  )
}
