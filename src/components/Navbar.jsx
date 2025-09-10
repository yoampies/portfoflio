import React from 'react'
import { useLocation, Link } from 'react-router-dom'

function Navbar() {
  const {pathname} = useLocation()
  const getNavLinkClasses = (pageLink) => {
    return `${(pathname === pageLink) 
      ? 'text-md font-bold text-[var(--primary-color)]' 
      : 'text-md font-medium text-[var(--text-secondary)] transition-colors hover:text-[var(--primary-color)]'
    }`
  }

  const returnNavbar = pathname === '/'
    ? (
      <header className="flex items-center justify-between whitespace-nowrap px-10 py-4 absolute top-0 w-full z-20 bg-transparent">
          <div className="flex items-center gap-4 text-[var(--text-primary)]">
          <div className="h-8 w-8 text-[var(--primary-color)]">
              <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM12 12l-4-4h8l-4 4z"></path>
              </svg>
          </div>
          <a href="/">
              <h1 className="text-xl font-bold tracking-tight">Andrés Ampíes</h1>
          </a>
          </div>
          <nav className="hidden items-center gap-8 md:flex">
            <Link className={getNavLinkClasses("/")} to="/">Home</Link>
            <Link className={getNavLinkClasses("/about")} to="/about">About</Link>
            <Link className={getNavLinkClasses("/projects")} to="/projects">Projects</Link>
            <Link className={getNavLinkClasses("/contact")} to="/contact">Contact</Link>
          </nav>
          <button className="hidden h-10 min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full bg-[var(--primary-color)] px-5 text-sm font-bold tracking-wide text-[var(--text-primary)] transition-colors hover:bg-[var(--accent-color)] md:flex">
          <span className="truncate">Resume</span>
          </button>
          <button className="text-[var(--text-primary)] md:hidden">
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 6h16M4 12h16m-7 6h7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
          </svg>
          </button>
      </header>
    ) 
    : (
      <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-[var(--secondary-color)] px-10 py-4">
          <div className="flex items-center gap-4 text-[var(--text-primary)]">
          <div className="h-8 w-8 text-[var(--primary-color)]">
              <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM12 12l-4-4h8l-4 4z"></path>
              </svg>
          </div>
          <Link to="/">
              <h1 className="text-xl font-bold tracking-tight">Andrés Ampíes</h1>
          </Link>
          </div>
          <nav className="hidden items-center gap-8 md:flex">
            <Link className={getNavLinkClasses("/")} to="/">Home</Link>
            <Link className={getNavLinkClasses("/about")} to="/about">About</Link>
            <Link className={getNavLinkClasses("/projects")} to="/projects">Projects</Link>
            <Link className={getNavLinkClasses("/contact")} to="/contact">Contact</Link>
          </nav>
          <button className="hidden h-10 min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full bg-[var(--primary-color)] px-5 text-sm font-bold tracking-wide text-[var(--text-primary)] transition-colors hover:bg-[var(--accent-color)] md:flex">
          <span className="truncate">Resume</span>
          </button>
          <button className="text-[var(--text-primary)] md:hidden">
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 6h16M4 12h16m-7 6h7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
          </svg>
          </button>
      </header>
    )

    return(
      returnNavbar
    )
}

export default Navbar