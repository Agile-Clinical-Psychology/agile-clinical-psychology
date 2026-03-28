import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import ScrollToTop from './components/ScrollToTop'
import Home     from './pages/Home'
import Services from './pages/Services'
import About    from './pages/About'
import Contact  from './pages/Contact'
import Book     from './pages/Book'
import FAQ      from './pages/FAQ'

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/"         element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about"    element={<About />} />
          <Route path="/contact"  element={<Contact />} />
          <Route path="/book"     element={<Book />} />
          <Route path="/faq"      element={<FAQ />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}
