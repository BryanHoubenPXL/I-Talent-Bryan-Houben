'use client'
import Link from 'next/link'
import { useState } from 'react'

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

//☰
export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="burger" onClick={toggleMenu}>
        ☰
      </div>
      <div className={`nav-links ${isOpen ? 'show' : ''}`}>
        {Object.entries(navItems).map(([path, { name }]) => (
          <Link key={path} href={path} className="nav-link">
            {name}
          </Link>
        ))}
      </div>
    </nav>
  )
}
