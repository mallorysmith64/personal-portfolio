import React, { useState, useRef, useEffect } from "react";
import "./index.css";

// Fill in your real URLs here
const LINKS = {
  home: "/",
  blogs: [
    { label: "Form Builder Blog", href: "http://formgenerator.pro/" },
    { label: "Book Review Blog", href: "https://marssmithbookreviews.wordpress.com/" },
  ],
  // books: [
  //   { label: "Ebook (Kindle/KDP)", href: "https://www.amazon.com/dp/your-asin" },
  //   { label: "Physical Book", href: null, comingSoon: true },
  // ],
  social: [
    { label: "YouTube", href: "https://www.youtube.com/@codermars" },
    { label: "GitHub", href: "https://github.com/mallorysmith64" },
    { label: "Twitter / X", href: "https://x.com/codermars42" },
  ],
  misc: [
    { label: "Science Slack", href: "https://science42.slack.com" },
  ],
};

const GROUPS = [
  { key: "blogs", label: "Blogs", align: "left" },
  // { key: "books", label: "Books", align: "left" },
  { key: "social", label: "Social", align: "left" },
  { key: "misc", label: "Misc", align: "right" },
];

export default function Navbar() {
  const [openGroup, setOpenGroup] = useState(null); // desktop dropdown currently open
  const [mobileOpen, setMobileOpen] = useState(false); // mobile menu open/closed
  const [mobileExpanded, setMobileExpanded] = useState(null); // which accordion section is open on mobile
  const navRef = useRef(null);

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpenGroup(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close dropdown on Escape
  useEffect(() => {
    function handleEscape(e) {
      if (e.key === "Escape") {
        setOpenGroup(null);
        setMobileOpen(false);
      }
    }
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  function toggleGroup(key) {
    setOpenGroup((prev) => (prev === key ? null : key));
  }

  function toggleMobileGroup(key) {
    setMobileExpanded((prev) => (prev === key ? null : key));
  }

  return (
    <nav className="navbar" ref={navRef}>
      <div className="navbar-inner">
        <a href={LINKS.home} className="navbar-home">
          Home
        </a>

        {/* Desktop menu */}
        <ul className="navbar-menu navbar-menu-desktop">
          {GROUPS.map((group) => (
            <li key={group.key} className="navbar-item">
              <button
                className="navbar-dropdown-trigger"
                aria-expanded={openGroup === group.key}
                aria-haspopup="true"
                onClick={() => toggleGroup(group.key)}
              >
                {group.label}
                <span
                  className={
                    "navbar-caret" +
                    (openGroup === group.key ? " navbar-caret-open" : "")
                  }
                  aria-hidden="true"
                >
                  ▾
                </span>
              </button>

              {openGroup === group.key && (
                <ul
                  className={
                    "navbar-dropdown" +
                    (group.align === "right" ? " navbar-dropdown-right" : "")
                  }
                >
                  {LINKS[group.key].map((item) => (
                    <li key={item.label}>
                      {item.comingSoon ? (
                        <span className="navbar-dropdown-link navbar-disabled">
                          {item.label}
                          <span className="navbar-badge">Coming soon</span>
                        </span>
                      ) : (
                        <a
                          href={item.href}
                          className="navbar-dropdown-link"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {item.label}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
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

      {/* Mobile menu (accordion) */}
      {mobileOpen && (
        <div className="navbar-mobile-menu">
          <a
            href={LINKS.home}
            className="navbar-mobile-home"
            onClick={() => setMobileOpen(false)}
          >
            Home
          </a>
          {GROUPS.map((group) => (
            <div key={group.key} className="navbar-mobile-group">
              <button
                className="navbar-mobile-trigger"
                aria-expanded={mobileExpanded === group.key}
                onClick={() => toggleMobileGroup(group.key)}
              >
                {group.label}
                <span
                  className={
                    "navbar-caret" +
                    (mobileExpanded === group.key ? " navbar-caret-open" : "")
                  }
                  aria-hidden="true"
                >
                  ▾
                </span>
              </button>
              {mobileExpanded === group.key && (
                <ul className="navbar-mobile-dropdown">
                  {LINKS[group.key].map((item) => (
                    <li key={item.label}>
                      {item.comingSoon ? (
                        <span className="navbar-dropdown-link navbar-disabled">
                          {item.label}
                          <span className="navbar-badge">Coming soon</span>
                        </span>
                      ) : (
                        <a
                          href={item.href}
                          className="navbar-dropdown-link"
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => setMobileOpen(false)}
                        >
                          {item.label}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
}