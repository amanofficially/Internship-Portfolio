import React from "react";

const styles = {
  hero: {
    background:
      "linear-gradient(135deg, #1b2a4a 0%, #243558 60%, #2e4470 100%)",
    color: "white",
    textAlign: "center",
    padding: "100px 20px 90px",
    position: "relative",
    overflow: "hidden",
  },
  decorLine: {
    display: "block",
    width: "60px",
    height: "3px",
    backgroundColor: "#c9963b",
    margin: "0 auto 28px",
    borderRadius: "2px",
  },
  name: {
    fontSize: "52px",
    fontWeight: "800",
    fontFamily: "'Playfair Display', serif",
    marginBottom: "12px",
    color: "#ffffff",
    lineHeight: "1.15",
  },
  highlight: {
    color: "#e8b85a",
  },
  role: {
    fontSize: "16px",
    color: "rgba(255,255,255,0.70)",
    marginBottom: "26px",
    fontFamily: "'Source Serif 4', serif",
    fontStyle: "italic",
    letterSpacing: "0.04em",
  },
  badge: {
    display: "inline-block",
    backgroundColor: "rgba(201,150,59,0.20)",
    color: "#e8b85a",
    border: "1px solid rgba(201,150,59,0.50)",
    padding: "8px 24px",
    borderRadius: "4px",
    fontSize: "13px",
    fontWeight: "600",
    letterSpacing: "0.05em",
    textTransform: "uppercase",
  },
  info: {
    marginTop: "30px",
    fontSize: "13.5px",
    color: "rgba(255,255,255,0.55)",
    lineHeight: "2.1",
  },
  divider: {
    color: "#c9963b",
    margin: "0 10px",
  },
};

function Hero() {
  return (
    <section style={styles.hero}>
      <span style={styles.decorLine}></span>
      <h1 style={styles.name}>
        Hi, I'm <span style={styles.highlight}>Aman</span>
      </h1>
      <p style={styles.role}>B.Tech CSE Student — SVVV, Indore</p>
      <span style={styles.badge}>🎓 Currently on Internship</span>
      <p style={styles.info}>
        Roll No: 22100BTCSE11401
        <span style={styles.divider}>|</span>
        Jan 2026 – Mar 2026
        <br />
        Industry Mentor: Ankit Chouhan
        <span style={styles.divider}>|</span>
        Internal Mentor: Dr. Sandeep Kumar Jain
      </p>
    </section>
  );
}

export default Hero;
