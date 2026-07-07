import React, { useState } from "react";
import "./index.css";

// Fill in your real URLs here later
const LINKS = {
  home: "/",
  blog: "#",
  books: "#",
  social: "#",
};

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <a href={LINKS.home} className="navbar-home">
          Home
        </a>

        {/* Desktop menu */}
        <ul className="navbar-menu navbar-menu-desktop">
          <li>
            <a href={LINKS.blog} className="navbar-link">
              Blog
            </a>
          </li>
          <li>
            <a href={LINKS.books} className="navbar-link">
              Books
            </a>
          </li>
          <li>
            <a href={LINKS.social} className="navbar-link">
              Social
            </a>
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
          <a
            href={LINKS.home}
            className="navbar-mobile-home"
            onClick={() => setMobileOpen(false)}
          >
            Home
          </a>
          <a
            href={LINKS.blog}
            className="navbar-mobile-link"
            onClick={() => setMobileOpen(false)}
          >
            Blog
          </a>
          <a
            href={LINKS.books}
            className="navbar-mobile-link"
            onClick={() => setMobileOpen(false)}
          >
            Books
          </a>
          <a
            href={LINKS.social}
            className="navbar-mobile-link"
            onClick={() => setMobileOpen(false)}
          >
            Social
          </a>
        </div>
      )}
    </nav>
  );
}