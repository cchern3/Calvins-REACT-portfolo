//Needs links to my Github, Linkedin, and a Third Platform?

import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <p>
          <hr />
          <a
            href="https://www.linkedin.com/in/calvin-chern-a03615143/"
            target="_blank" rel="noreferrer"
          >
            LinkedIn
          </a>{" "}
          |{" "}
          <a href="https://github.com/cchern3" target="_blank" rel="noreferrer">
            GitHub
          </a>
          {" "}
          |{" "}
          <a href="https://www.instagram.com/drcalvinchern/" target="_blank" rel="noreferrer">
            Instagram
            </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
