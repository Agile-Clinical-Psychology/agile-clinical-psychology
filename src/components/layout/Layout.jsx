import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <div className="min-h-[100svh] flex flex-col select-none">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}
