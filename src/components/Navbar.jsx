import React from 'react'

const styles = {
  navbar: {
    backgroundColor: '#1b2a4a',
    padding: '16px 36px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'sticky',
    top: 0,
    zIndex: 100,
    borderBottom: '1px solid rgba(201,150,59,0.25)',
    boxShadow: '0 2px 16px rgba(27,42,74,0.30)',
  },
  logo: {
    color: '#e8b85a',
    fontSize: '18px',
    fontWeight: '700',
    fontFamily: "'Playfair Display', serif",
    letterSpacing: '0.01em',
  },
  links: {
    display: 'flex',
    gap: '28px',
    listStyle: 'none',
  },
  link: {
    color: 'rgba(255,255,255,0.75)',
    fontSize: '14px',
    cursor: 'pointer',
    textDecoration: 'none',
    fontWeight: '500',
    letterSpacing: '0.03em',
  },
}

function Navbar() {
  return (
    <nav style={styles.navbar}>
      <span style={styles.logo}>Aman · Portfolio</span>
      <ul style={styles.links}>
        <li><a href="#about" style={styles.link}>About</a></li>
        <li><a href="#skills" style={styles.link}>Skills</a></li>
        <li><a href="#projects" style={styles.link}>Projects</a></li>
        <li><a href="#report" style={styles.link}>Reports</a></li>
      </ul>
    </nav>
  )
}

export default Navbar
