// Fill in your real profile URLs below
const SOCIAL_LINKS = [
  {
    name: "GitHub",
    href: "https://github.com/mallorysmith64",
    icon: (
      <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.4 7.86 10.93.58.1.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.09 0 4.42-2.7 5.4-5.26 5.68.41.36.78 1.06.78 2.14 0 1.54-.01 2.79-.01 3.17 0 .31.21.67.8.56C20.21 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5Z" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@codermars",
    icon: (
      <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.5 7.2s-.23-1.64-.94-2.36c-.9-.95-1.9-.95-2.36-1.01C16.9 3.5 12 3.5 12 3.5h-.01s-4.9 0-8.2.33c-.46.06-1.46.06-2.36 1.01C.72 5.56.5 7.2.5 7.2S.26 9.13.26 11.05v1.8c0 1.92.24 3.85.24 3.85s.22 1.64.93 2.36c.9.95 2.08.92 2.6 1.02 1.89.18 8 .34 8 .34s4.9-.01 8.2-.34c.46-.06 1.46-.06 2.36-1.02.71-.72.94-2.36.94-2.36s.24-1.93.24-3.85v-1.8c0-1.92-.24-3.85-.24-3.85ZM9.75 14.98V7.9l6.5 3.55-6.5 3.53Z" />
      </svg>
    ),
  },
  {
    name: "Twitter",
    href: "https://x.com/codermars42",
    icon: (
      <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.9 2H22l-7.4 8.44L23.5 22h-6.8l-5.33-6.98L5.3 22H2.2l7.92-9.04L1 2h6.94l4.82 6.38L18.9 2Zm-1.2 18h1.88L7.4 3.9H5.38L17.7 20Z" />
      </svg>
    ),
  },
];

function Socials() {
  return (
    <div className="page">
      <h1 className="page-title">Socials</h1>
      <p className="page-subtitle">Other places I'm on the internet</p>

      <div className="social-list">
        {SOCIAL_LINKS.map((social) => (
          <a
            key={social.name}
            href={social.href}
            className="social-pill"
            target="_blank"
            rel="noopener noreferrer"
          >
            {social.icon}
            {social.name}
          </a>
        ))}
      </div>
    </div>
  );
}

export default Socials;