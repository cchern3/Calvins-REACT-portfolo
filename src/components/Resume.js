import React from "react";

function Resume() {
  return (
    <div className="columns">
      <div className="column">
        <p className="content is-large">Resume</p>
        <hr />

        <a
          className="button is-dark"
          href="/Calvins-REACT-portfolo/calvinchern.pdf"
          target="_blank" rel="noreferrer"
        >
          <span className="icon">
            <i className="fas fa-download"></i>
          </span>
          <span>Download My Resume</span>
        </a>
      </div>
      <div className="column">
        <p className="content is-medium">Proficiences</p>
        <hr />
        <ul>
            <li>HTML, CSS, Javascript</li>
            <li>React, JSON, Git</li>
            <li>Express, NoSQL, MySQL</li>
            <li>Node.js, jQuery, npm</li>
        </ul>
      </div>
    </div>
  );
}

export default Resume;
