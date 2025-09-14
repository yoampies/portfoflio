import React from 'react';
import { useLocation, Link } from 'react-router-dom'; // Imports hooks and components from react-router-dom for routing.
// useLocation: Hook to access the current location object, which includes the pathname.
// Link: Component for declarative routing, allowing navigation without full page reloads.

function Navbar() {
  // useLocation hook to get the current URL's pathname.
  const { pathname } = useLocation();

  // Helper function to determine the CSS classes for navigation links.
  // It applies different styles based on whether the current pathname matches the link's pageLink.
  const getNavLinkClasses = (pageLink) => {
    return `${
      pathname === pageLink
        ? 'text-md font-bold text-[var(--primary-color)]' // Styles for the active link (bold, primary color).
        : 'text-md font-medium text-[var(--text-secondary)] transition-colors hover:text-[var(--primary-color)]' // Styles for inactive links (medium font, secondary color, with hover effect).
    }`;
  };

  // Conditional rendering of the header based on the current pathname.
  // If on the homepage ('/'), a transparent header is rendered. Otherwise, a bordered header is rendered.
  const returnNavbar = pathname === '/'
    ? ( // Header for the homepage (transparent background)
      <header className="flex items-center justify-between whitespace-nowrap px-10 py-4 absolute top-0 w-full z-20 bg-transparent">
        {/* Logo and Name Section */}
        <div className="flex items-center gap-4 text-[var(--text-primary)]">
          {/* Icon element (using an SVG) */}
          <div className="h-8 w-8 text-[var(--primary-color)]">
            <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM12 12l-4-4h8l-4 4z"></path>
            </svg>
          </div>
          {/* Name Link */}
          <a href="/">
            <h1 className="text-xl font-bold tracking-tight">Andrés Ampíes</h1>
          </a>
        </div>

        {/* Navigation Links (hidden on small screens) */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link className={getNavLinkClasses("/")} to="/">Home</Link>
          <Link className={getNavLinkClasses("/about")} to="/about">About</Link>
          <Link className={getNavLinkClasses("/projects")} to="/projects">Projects</Link>
          <Link className={getNavLinkClasses("/contact")} to="/contact">Contact</Link>
        </nav>

        {/* Resume Button (hidden on small screens) */}
        <a
          href="/resume.pdf" // Link to PDF file in the public folder
          target="_blank" // Opens the link in a new tab/window
          rel="noopener noreferrer" // For security reasons when using target="_blank"
          className="hidden h-10 min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full bg-[var(--primary-color)] px-5 text-sm font-bold tracking-wide text-[var(--text-primary)] transition-colors hover:bg-[var(--accent-color)] md:flex"
        >
          <span className="truncate">Resume</span>
        </a>

        {/* Mobile Menu Button (visible on small screens) */}
        <button className="text-[var(--text-primary)] md:hidden">
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 6h16M4 12h16m-7 6h7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
          </svg>
        </button>
      </header>
    )
    : ( // Header for all other pages (with a border and background)
      <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-[var(--secondary-color)] px-10 py-4">
        {/* Logo and Name Section */}
        <div className="flex items-center gap-4 text-[var(--text-primary)]">
          {/* Icon element (using an SVG) */}
          <div className="h-8 w-8 text-[var(--primary-color)]">
            <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM12 12l-4-4h8l-4 4z"></path>
            </svg>
          </div>
          {/* Name Link */}
          <Link to="/">
            <h1 className="text-xl font-bold tracking-tight">Andrés Ampíes</h1>
          </Link>
        </div>

        {/* Navigation Links (hidden on small screens) */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link className={getNavLinkClasses("/")} to="/">Home</Link>
          <Link className={getNavLinkClasses("/about")} to="/about">About</Link>
          <Link className={getNavLinkClasses("/projects")} to="/projects">Projects</Link>
          <Link className={getNavLinkClasses("/contact")} to="/contact">Contact</Link>
        </nav>

        {/* Resume Button (hidden on small screens) */}
        <a
          href="/resume.pdf" // Link to PDF file in the public folder
          target="_blank" // Opens the link in a new tab/window
          rel="noopener noreferrer" // For security reasons when using target="_blank"
          className="hidden h-10 min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full bg-[var(--primary-color)] px-5 text-sm font-bold tracking-wide text-[var(--text-primary)] transition-colors hover:bg-[var(--accent-color)] md:flex"
        >
          <span className="truncate">Resume</span>
        </a>

        {/* Mobile Menu Button (visible on small screens) */}
        <button className="text-[var(--text-primary)] md:hidden">
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 6h16M4 12h16m-7 6h7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
          </svg>
        </button>
      </header>
    );

  // Return the conditionally rendered navbar.
  return returnNavbar;
}

export default Navbar;