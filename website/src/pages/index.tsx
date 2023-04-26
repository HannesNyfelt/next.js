import React from "react";

export default function Home() {
  return (
    <>
      <nav id="navbar">
        <ul className="nav-list">
          <li>
            <a href="#welcome-section">About</a>
          </li>
          <li>
            <a href="#projects">Work</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>

      <section id="welcome-section">
        <h1 className="glitch">Hannes Nyfelt</h1>
        <p>A web developer</p>
        <h1 className="clock" id="digital-clock"></h1>
        <h1 className="clock" id="digital-time"></h1>

      </section>
      <section id="projects">

        <h2>here are some things i have done</h2>
        <div id="project-grid">
          <a href="https://codepen.io/P0r0k1ng/pen/MWvgmeo" target="_blank" className="project-tile">
            <img src="images/2021-11-26 (2).png" alt="tribute"></img></a>
          <a href="https://codepen.io/P0r0k1ng/pen/dyzRmzQ" target="_blank" className="project-tile">
            <img src="images/2021-11-26 (4).png" alt="survey"></img></a>
          <a href="https://codepen.io/P0r0k1ng/pen/qBXxBWB" target="_blank" className="project-tile">
            <img src="images/2021-11-26 (6).png" alt="Tiny knife"></img></a>
        </div>

        <a href="https://codepen.io/P0r0k1ng" target="_blank" id="profile-link">more</a>

      </section>
      <section id="contact">
        <h2>contact me here</h2>
        <div className="contact-links">
          <a href="https://codepen.io/P0r0k1ng">CodePen</a>
          <a href="https://github.com/HannesNyfelt" target="_blank">Github</a>
          <a href="tel:045-1711-726" target="_blank">call me</a>

        </div>
      </section>

    </>
  )
}

