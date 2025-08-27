import React from "react";
import "./About.css";

export default function About() {
  return (
    <div className="about-page container py-5">
      <div className="about-box">
        <h1 className="about-title">About NoteVerse</h1>
        <p className="about-subtitle">Your personal note-taking assistant 🌟</p>

        <div className="about-content">
          <p>
            <strong>NoteVerse</strong> is a minimal, fast, and secure
            note-taking app built with the modern web stack. Whether you're
            jotting down quick ideas, managing tasks, or organizing thoughts —
            we've got you covered.
          </p>
          <ul>
            <li>📝 Create and edit notes easily</li>
            <li>🔒 Secure with JWT-based login</li>
            <li>📦 Persistent across sessions</li>
            <li>📱 Responsive design for all devices</li>
          </ul>

          <p>
            This project was built using <strong>React.js</strong> (frontend)
            and <strong>Express.js + MongoDB</strong> (backend).
          </p>

          <p className="about-footer">
            Built with ❤️ by <strong>Pranav-solanki</strong>. Feel free to
            explore, use, and expand!
          </p>
        </div>
      </div>
    </div>
  );
}
