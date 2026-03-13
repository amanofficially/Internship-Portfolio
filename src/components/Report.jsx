import React from 'react'

const reports = [
  {
    number: 'I',
    title: 'Onboarding & Web Fundamentals',
    dateFrom: '20-01-2026',
    dateTo: '03-02-2026',
    submitted: '04-02-2026',
    accentColor: '#c9963b',
    headerBg: '#fdf9f0',
    outcomeBg: '#fdf9f0',
    points: [
      {
        week: 'Week 1 — Orientation & Environment Setup',
        text: 'Got familiar with the organisation, team, and work environment. Mentor introduced company culture and gave an overview of the project and the MERN stack. Completed development environment setup.',
      },
      {
        week: 'Week 1 — Web Fundamentals & MERN Overview',
        text: 'Learned how websites function and how frontend and backend interact. Mentor explained the MERN stack architecture in a simplified manner before starting practical tasks.',
      },
      {
        week: 'Week 2 — HTML, CSS & JavaScript',
        text: 'Built structured, responsive web pages using HTML and CSS. Studied JavaScript deeply — variables, functions, DOM manipulation, and button click events — and applied them in interactive pages.',
      },
      {
        week: 'Week 2 — Task & React Introduction',
        text: 'Mentor assigned a static webpage task using HTML, CSS, and JavaScript. Completed it successfully and received constructive feedback. Also got an introduction to React.js component-based architecture.',
      },
    ],
    outcome: 'Established a solid foundation in web development fundamentals, understood full-stack architecture, and completed the first assigned task with positive mentor feedback.',
  },
  {
    number: 'II',
    title: 'React Fundamentals & Core Concepts',
    dateFrom: '04-02-2026',
    dateTo: '18-02-2026',
    submitted: '19-02-2026',
    accentColor: '#2e4470',
    headerBg: '#f0f2f8',
    outcomeBg: '#f0f2f8',
    points: [
      {
        week: 'Week 3 — React Components, Props & State',
        text: 'Learned React as a JavaScript library for building user interfaces composed of reusable components. Created Header and Footer components. Studied props (passing data between components) and state (managing dynamic data within a component).',
      },
      {
        week: 'Week 3 — Counter Application',
        text: 'Built a counter application to practice props and state — the displayed number increases or decreases on button click, demonstrating state-driven UI updates.',
      },
      {
        week: 'Week 4 — React Router & Navigation',
        text: 'Explored React Router to understand navigation in a single-page application. Built a multi-page structure with Home, About, and Contact pages.',
      },
      {
        week: 'Week 4 — useEffect Hook',
        text: 'Introduced to the useEffect hook and used it in a basic example to understand how side effects are handled during component rendering.',
      },
    ],
    outcome: 'Built confidence with components, props, state, routing, and basic hooks — preparing for structured project development in the next phase.',
  },
  {
    number: 'III',
    title: 'Project Implementation & Architecture',
    dateFrom: '19-02-2026',
    dateTo: '03-03-2026',
    submitted: '04-03-2026',
    accentColor: '#1b2a4a',
    headerBg: '#eef0f7',
    outcomeBg: '#eef0f7',
    points: [
      {
        week: 'Week 5 — Component Architecture & Folder Structure',
        text: 'Shifted from learning to structured project implementation. Developed and integrated reusable Header and Footer components into the main layout. Maintained a clean folder structure to support scalability and maintainability.',
      },
      {
        week: 'Week 5 — Props, State & Interactive UI',
        text: 'Implemented props and state management more effectively within the project. Enhanced the counter feature and other interactive sections to ensure real-time data reflection in the UI.',
      },
      {
        week: 'Week 6 — Routing Integration',
        text: 'Implemented React Router to create smooth navigation between Home, About, and Contact pages within the SPA structure.',
      },
      {
        week: 'Week 6 — useEffect & Final Integration',
        text: 'Applied useEffect in relevant components to handle side effects like component loading and updates. Completed full frontend integration with improved code organisation and user experience.',
      },
    ],
    outcome: 'Successfully transitioned from concept learning to full practical project implementation — strengthening frontend structure, code quality, and overall application functionality.',
  },
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
    marginBottom: '30px',
    borderLeft: '4px solid #c9963b',
    paddingLeft: '14px',
    color: '#1b2a4a',
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    border: '1px solid #dde3f0',
    boxShadow: '0 2px 12px rgba(27,42,74,0.08)',
    marginBottom: '24px',
    overflow: 'hidden',
  },
  cardHeader: {
    padding: '20px 24px',
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
  },
  reportBadge: {
    width: '46px',
    height: '46px',
    borderRadius: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    fontSize: '18px',
    fontFamily: "'Playfair Display', serif",
    color: '#ffffff',
    flexShrink: 0,
  },
  cardTitleGroup: {
    flex: 1,
  },
  cardTitle: {
    fontSize: '16px',
    fontWeight: '700',
    color: '#1b2a4a',
    marginBottom: '3px',
  },
  cardDates: {
    fontSize: '12px',
    color: '#9aabca',
  },
  submittedBadge: {
    fontSize: '11.5px',
    fontWeight: '600',
    padding: '4px 12px',
    borderRadius: '4px',
    color: '#ffffff',
    whiteSpace: 'nowrap',
    letterSpacing: '0.04em',
  },
  mentorRow: {
    padding: '11px 24px',
    backgroundColor: '#f8f9fc',
    borderTop: '1px solid #dde3f0',
    borderBottom: '1px solid #dde3f0',
    fontSize: '12.5px',
    color: '#6b7a99',
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
  },
  mentorItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
  },
  mentorLabel: {
    fontWeight: '600',
    color: '#3a4a68',
  },
  pointsList: {
    padding: '18px 24px',
  },
  pointItem: {
    paddingLeft: '16px',
    marginBottom: '16px',
  },
  pointWeek: {
    fontSize: '13px',
    fontWeight: '700',
    color: '#1b2a4a',
    marginBottom: '4px',
  },
  pointText: {
    fontSize: '13.5px',
    color: '#6b7a99',
    lineHeight: '1.7',
    fontFamily: "'Source Serif 4', serif",
    fontWeight: '300',
  },
  outcome: {
    margin: '0 24px 20px',
    padding: '12px 16px',
    borderRadius: '8px',
    fontSize: '13px',
    color: '#3a4a68',
    lineHeight: '1.7',
    border: '1px solid #dde3f0',
    fontFamily: "'Source Serif 4', serif",
    fontWeight: '300',
  },
}

function Report() {
  return (
    <section id="report" style={styles.section}>
      <div style={styles.inner}>
        <h2 style={styles.heading}>Fortnightly Reports</h2>

        {reports.map(function (report) {
          return (
            <div key={report.number} style={styles.card}>

              <div style={{ ...styles.cardHeader, backgroundColor: report.headerBg }}>
                <div style={{ ...styles.reportBadge, backgroundColor: report.accentColor }}>
                  {report.number}
                </div>
                <div style={styles.cardTitleGroup}>
                  <div style={styles.cardTitle}>{report.title}</div>
                  <div style={styles.cardDates}>
                    {report.dateFrom} &nbsp;→&nbsp; {report.dateTo}
                  </div>
                </div>
                <div style={{ ...styles.submittedBadge, backgroundColor: report.accentColor }}>
                  Report {report.number}
                </div>
              </div>

              <div style={styles.mentorRow}>
                <div style={styles.mentorItem}>
                  <span style={styles.mentorLabel}>Industry Mentor:</span>
                  <span>Ankit Chouhan</span>
                </div>
                <div style={styles.mentorItem}>
                  <span style={styles.mentorLabel}>Internal Mentor:</span>
                  <span>Dr. Sandeep Kumar Jain</span>
                </div>
                <div style={styles.mentorItem}>
                  <span style={styles.mentorLabel}>Submitted:</span>
                  <span>{report.submitted}</span>
                </div>
              </div>

              <div style={styles.pointsList}>
                {report.points.map(function (point, idx) {
                  return (
                    <div
                      key={idx}
                      style={{ ...styles.pointItem, borderLeft: `3px solid ${report.accentColor}` }}
                    >
                      <div style={styles.pointWeek}>{point.week}</div>
                      <div style={styles.pointText}>{point.text}</div>
                    </div>
                  )
                })}
              </div>

              <div style={{ ...styles.outcome, backgroundColor: report.outcomeBg }}>
                <strong style={{ color: report.accentColor, fontFamily: "'DM Sans', sans-serif" }}>Outcome: </strong>
                {report.outcome}
              </div>

            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Report
