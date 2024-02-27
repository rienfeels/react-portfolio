import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header>
        <h1>Ryan Fields</h1>
        <p>FullStack Web Developer</p>
        <nav>
          <ul>
            <li>
              <Link to="/about">About Me</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
      {/* <footer>
        <p>&copy; 2024 Ryan Fields. All rights reserved.</p>
      </footer> */}
    </>
  );
};

export default Header;
