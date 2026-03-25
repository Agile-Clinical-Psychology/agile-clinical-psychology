import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToTop() {
  const { pathname } = useLocation()
  const prevPathname = useRef(pathname)

  useEffect(() => {
    if (prevPathname.current !== pathname) {
      prevPathname.current = pathname
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [pathname])

  return null
}
