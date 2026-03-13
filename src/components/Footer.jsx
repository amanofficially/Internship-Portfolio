import React from 'react'

const styles = {
  footer: {
    background: 'linear-gradient(135deg, #1b2a4a 0%, #243558 100%)',
    color: 'rgba(255,255,255,0.60)',
    textAlign: 'center',
    padding: '28px 20px',
    fontSize: '13px',
    lineHeight: '2',
    borderTop: '1px solid rgba(201,150,59,0.25)',
  },
  highlight: {
    color: '#e8b85a',
    fontWeight: '600',
  },
}

function Footer() {
  return (
    <footer style={styles.footer}>
      <p>Made by <span style={styles.highlight}>Aman</span> — SVVV Internship 2026</p>
      <p>Built with <span style={styles.highlight}>React + Vite</span></p>
    </footer>
  )
}

export default Footer
