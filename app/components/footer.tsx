function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="footer">
      <ul className="footer-links">
        <li>
          <a
            className="footer-link"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/BryanHoubenPXL/I-Talent-Bryan-Houben"
          >
            <ArrowIcon />
            <p className="link-text">website github</p>
          </a>
        </li>
      </ul>
      <p className="mt-8 text-neutral-600 dark:text-neutral-300">
        © {new Date().getFullYear()} Bryan Houben - Hogeschool PXL
      </p>
    </footer>
  )
}
