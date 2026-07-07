import { useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";

// Fill in your real URLs here later
const LINKS = {
  home: "/",
  blog: "/blogs",
  books: "/books",
  social: "/socials",
};

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <Link to={LINKS.home} className="navbar-home">
          Home
        </Link>

        {/* Desktop menu */}
        <ul className="navbar-menu navbar-menu-desktop">
          <li>
            <Link to={LINKS.blog} className="navbar-link">
              Blogs
            </Link>
          </li>
          <li>
            <Link to={LINKS.books} className="navbar-link">
              Books
            </Link>
          </li>
          <li>
            <Link to={LINKS.social} className="navbar-link">
              Socials
            </Link>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          className="navbar-hamburger"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((prev) => !prev)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="navbar-mobile-menu">
          <Link
            to={LINKS.home}
            className="navbar-mobile-home"
            onClick={() => setMobileOpen(false)}
          >
            Home
          </Link>
          <Link
            to={LINKS.blog}
            className="navbar-mobile-link"
            onClick={() => setMobileOpen(false)}
          >
            Blogs
          </Link>
          <Link
            to={LINKS.books}
            className="navbar-mobile-link"
            onClick={() => setMobileOpen(false)}
          >
            Books
          </Link>
          <Link
            to={LINKS.social}
            className="navbar-mobile-link"
            onClick={() => setMobileOpen(false)}
          >
            Socials
          </Link>
        </div>
      )}
    </nav>
  );
}