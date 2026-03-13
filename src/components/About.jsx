import React from 'react'

const styles = {
  wrapper: {
    backgroundColor: '#faf8f3',
    padding: '60px 30px',
  },
  inner: {
    maxWidth: '800px',
    margin: '0 auto',
  },
  heading: {
    fontSize: '28px',
    fontWeight: '700',
    fontFamily: "'Playfair Display', serif",
    marginBottom: '28px',
    borderLeft: '4px solid #c9963b',
    paddingLeft: '14px',
    color: '#1b2a4a',
  },
  introCard: {
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    padding: '28px',
    marginBottom: '24px',
    border: '1px solid #dde3f0',
    boxShadow: '0 2px 10px rgba(27,42,74,0.07)',
  },
  para: {
    fontSize: '15px',
    lineHeight: '1.9',
    color: '#3a4a68',
    marginBottom: '14px',
    fontFamily: "'Source Serif 4', serif",
    fontWeight: '300',
  },
  paraLast: {
    fontSize: '15px',
    lineHeight: '1.9',
    color: '#3a4a68',
    fontFamily: "'Source Serif 4', serif",
    fontWeight: '300',
  },
  statsRow: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '16px',
    marginBottom: '24px',
  },
  statCard: {
    backgroundColor: '#ffffff',
    border: '1px solid #dde3f0',
    borderRadius: '10px',
    padding: '20px 16px',
    textAlign: 'center',
    boxShadow: '0 2px 8px rgba(27,42,74,0.06)',
  },
  statNumber: {
    fontSize: '30px',
    fontWeight: '700',
    fontFamily: "'Playfair Display', serif",
    color: '#c9963b',
    marginBottom: '4px',
  },
  statLabel: {
    fontSize: '12.5px',
    color: '#6b7a99',
    fontWeight: '500',
  },
  mentorGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '16px',
  },
  mentorCard: {
    backgroundColor: '#ffffff',
    border: '1px solid #dde3f0',
    borderRadius: '10px',
    padding: '20px',
    display: 'flex',
    alignItems: 'flex-start',
    gap: '14px',
    boxShadow: '0 2px 8px rgba(27,42,74,0.06)',
  },
  mentorIcon: {
    width: '42px',
    height: '42px',
    borderRadius: '8px',
    backgroundColor: '#fdf3e0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '20px',
    flexShrink: 0,
  },
  mentorType: {
    fontSize: '11px',
    fontWeight: '700',
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    color: '#c9963b',
    marginBottom: '4px',
  },
  mentorName: {
    fontSize: '14.5px',
    fontWeight: '600',
    color: '#1b2a4a',
    marginBottom: '3px',
  },
  mentorDetail: {
    fontSize: '12px',
    color: '#9aabca',
  },
}

function About() {
  return (
    <section id="about" style={styles.wrapper}>
      <div style={styles.inner}>
        <h2 style={styles.heading}>About My Internship</h2>

        <div style={styles.introCard}>
          <p style={styles.para}>
            I am <strong style={{ color: '#1b2a4a' }}>Aman</strong>, a B.Tech CSE student at Shri Vaishnav Vidyapeeth Vishwavidyalaya, Indore (Roll No: 22100BTCSE11401). I am currently undergoing an industry internship focused on full-stack web development using the <strong style={{ color: '#c9963b' }}>MERN Stack</strong>.
          </p>
          <p style={styles.para}>
            The internship began on <strong style={{ color: '#1b2a4a' }}>20 January 2026</strong>. Over six weeks, I progressed from core web fundamentals — HTML, CSS, and JavaScript — to building dynamic React.js applications with component architecture, routing, state management, and hooks.
          </p>
          <p style={styles.paraLast}>
            Under the guidance of my industry mentor <strong style={{ color: '#1b2a4a' }}>Ankit Chouhan</strong> and internal mentor <strong style={{ color: '#1b2a4a' }}>Dr. Sandeep Kumar Jain</strong>, I have worked on real tasks, received constructive feedback, and grown significantly as a developer throughout this period.
          </p>
        </div>

        <div style={styles.statsRow}>
          <div style={styles.statCard}>
            <div style={styles.statNumber}>6</div>
            <div style={styles.statLabel}>Weeks of Training</div>
          </div>
          <div style={styles.statCard}>
            <div style={styles.statNumber}>3</div>
            <div style={styles.statLabel}>Fortnightly Reports</div>
          </div>
          <div style={styles.statCard}>
            <div style={styles.statNumber}>5</div>
            <div style={styles.statLabel}>Projects Built</div>
          </div>
        </div>

        <div style={styles.mentorGrid}>
          <div style={styles.mentorCard}>
            <div style={styles.mentorIcon}>🏢</div>
            <div>
              <div style={styles.mentorType}>Industry Mentor</div>
              <div style={styles.mentorName}>Ankit Chouhan</div>
              <div style={styles.mentorDetail}>ankitchouhan1785@gmail.com</div>
            </div>
          </div>
          <div style={styles.mentorCard}>
            <div style={styles.mentorIcon}>🎓</div>
            <div>
              <div style={styles.mentorType}>Internal Mentor</div>
              <div style={styles.mentorName}>Dr. Sandeep Kumar Jain</div>
              <div style={styles.mentorDetail}>SVVV, Indore</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
