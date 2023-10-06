import React from "react";
import "./Navbar.css";
import { NavLink} from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="nav-items">
      <div className="nav-text">
        <h1 className="text-blue">EvenTick</h1>
      </div>
      <ul>
        <li>
          <NavLink exact to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/register">
            Sign Up
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/login">
            Login
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/events">
            Find events
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
