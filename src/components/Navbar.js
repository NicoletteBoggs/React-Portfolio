import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div>
      <ul className="navlist">
        <li className="navitem">
          <Link to="/">About</Link>
        </li>
        <li className="navitem">
          <Link to="/Portfolio">Portfolio</Link>
        </li>
        <li className="navitem">
          <Link to="/Contact">Contact</Link>
        </li>
        <li className="navitem">
          <Link to="/Resume">Resume</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
