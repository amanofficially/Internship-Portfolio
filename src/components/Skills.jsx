import React, { useState } from 'react'

const skills = [
  { name: 'HTML', detail: 'Structured web pages, forms, semantic tags, accessibility basics' },
  { name: 'CSS', detail: 'Layouts, Flexbox, Grid, responsive design, animations' },
  { name: 'JavaScript', detail: 'Variables, functions, DOM manipulation, events, ES6+' },
  { name: 'React.js', detail: 'Components, props, useState, useEffect, React Router' },
  { name: 'MERN Stack', detail: 'Overview of MongoDB, Express.js, React, and Node.js' },
  { name: 'Git & GitHub', detail: 'Version control basics, commits, branches, pushing code' },
]

const styles = {
  section: {
    backgroundColor: '#eef0f7',
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
  tip: {
    textAlign: 'center',
    fontSize: '13px',
    color: '#9aabca',
    marginBottom: '18px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '14px',
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: '10px',
    padding: '18px 20px',
    cursor: 'pointer',
    border: '1px solid #dde3f0',
    boxShadow: '0 2px 6px rgba(27,42,74,0.06)',
    transition: 'border 0.2s',
  },
  cardActive: {
    border: '1px solid #c9963b',
    backgroundColor: '#fdf9f0',
  },
  skillName: {
    fontWeight: '600',
    fontSize: '15px',
    color: '#1b2a4a',
  },
  skillDetail: {
    fontSize: '13px',
    color: '#6b7a99',
    marginTop: '10px',
    lineHeight: '1.6',
    borderTop: '1px solid #e8ddc8',
    paddingTop: '10px',
    fontFamily: "'Source Serif 4', serif",
    fontWeight: '300',
  },
}

function Skills() {
  const [active, setActive] = useState(null)

  function handleClick(index) {
    setActive(active === index ? null : index)
  }

  return (
    <section id="skills" style={styles.section}>
      <div style={styles.inner}>
        <h2 style={styles.heading}>Skills I Learned</h2>
        <p style={styles.tip}>👆 Click on any skill to see details</p>
        <div style={styles.grid}>
          {skills.map(function (skill, index) {
            const isActive = active === index
            return (
              <div
                key={index}
                style={isActive ? { ...styles.card, ...styles.cardActive } : styles.card}
                onClick={function () { handleClick(index) }}
              >
                <p style={styles.skillName}>{skill.name}</p>
                {isActive && <p style={styles.skillDetail}>{skill.detail}</p>}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Skills
