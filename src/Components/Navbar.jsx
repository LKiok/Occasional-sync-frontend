import React from "react";
import "../Css/Navbar.css";
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
          <NavLink exact to="/about">
            About
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/events">
            Find Events
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/create-events">
            Create Events
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/login">
            Log In
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
