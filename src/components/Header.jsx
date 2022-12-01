import React from "react";

function Header() {
  return (
    <nav className="header-container">
      <div className="header">
        <div className="brand">
          <a href="index.html">
            <img src="assets/logo.png" alt="logo" srcset="" />
          </a>
        </div>
        <div className="menu">
          <ul className="links">
            <li>
              <a href="pages/project.html">Project</a>
            </li>
            <li>
              <a href="pages/resources.html">Resources</a>
            </li>
            <li>
              <a href="pages/about-me.html">About me</a>
            </li>
          </ul>
        </div>
        <a href="#letstalk" class="custom-btn lets-talk">
          LET'S TALK
        </a>
      </div>
    </nav>
  );
}

export default Header;
