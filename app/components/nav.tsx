import Link from 'next/link'

const navItems = {
  '/': {
    name: 'home',
  },
  '/portfolio': {
    name: 'portfolio',
  },
  '/activiteiten': {
    name: 'activiteiten',
  },
  '/about': {
    name: 'over mij',
  },
  '/contact': {
    name: 'contact',
  },
}

export function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-link-container">
        {Object.entries(navItems).map(([path, { name }]) => (
          <Link
            key={path}
            href={path}
            className="nav-link"
          >
            {name}
          </Link>
        ))}
      </div>
    </nav>
  )
}
