import React from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
      <div className="navbar-brand">Todolist</div>
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link to="/" className="nav-link ">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/info" className="nav-link ">
            Info
          </Link>
        </li>
      </ul>
    </nav>
  );
}
