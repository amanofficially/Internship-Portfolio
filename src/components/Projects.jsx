import React from "react";

const projects = [
  {
    name: "Digital Clock",
    description:
      "A live digital clock with sliding number strips and a clean background.",
  },
  {
    name: "Amazon Clone",
    description:
      "A clone of the Amazon India homepage with navbar, product cards, and a working cart counter.",
  },
  {
    name: "Modern Musician",
    description:
      "A portfolio website for a musician with an audio player, services section, and contact form.",
  },
  {
    name: "Omnifood",
    description:
      "A food delivery landing page with pricing plans, testimonials and fully responsive.",
  },
  {
    name: "Internship Portfolio",
    description:
      "A personal internship portfolio website built with React.js showcasing fortnightly reports, projects, and skills gained during the MERN stack internship at SVVV, Indore.",
  },
];

const styles = {
  section: {
    backgroundColor: "#faf8f3",
    padding: "60px 30px",
  },
  inner: {
    maxWidth: "800px",
    margin: "0 auto",
  },
  heading: {
    fontSize: "28px",
    fontWeight: "700",
    fontFamily: "'Playfair Display', serif",
    marginBottom: "28px",
    borderLeft: "4px solid #c9963b",
    paddingLeft: "14px",
    color: "#1b2a4a",
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: "10px",
    padding: "20px 24px",
    marginBottom: "14px",
    border: "1px solid #dde3f0",
    borderLeft: "4px solid #c9963b",
    boxShadow: "0 2px 8px rgba(27,42,74,0.06)",
  },
  projectName: {
    fontSize: "16px",
    fontWeight: "600",
    marginBottom: "6px",
    color: "#1b2a4a",
  },
  description: {
    fontSize: "13.5px",
    color: "#6b7a99",
    lineHeight: "1.7",
    fontFamily: "'Source Serif 4', serif",
    fontWeight: "300",
  },
};

function Projects() {
  return (
    <section id="projects" style={styles.section}>
      <div style={styles.inner}>
        <h2 style={styles.heading}>Projects Built During Internship</h2>
        {projects.map(function (project, index) {
          return (
            <div key={index} style={styles.card}>
              <p style={styles.projectName}>{project.name}</p>
              <p style={styles.description}>{project.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;
