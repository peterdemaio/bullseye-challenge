import { NavLink } from "react-router-dom";
import React from "react";

const MainNav = () => (
  <div className="navbar-nav mr-auto">
    <NavLink
      to="/"
      exact
      className="nav-link"
      activeClassName="router-link-exact-active"
    >
      Home
    </NavLink>
    <NavLink
      to="/gallery"
      exact
      className="nav-link"
      activeClassName="router-link-exact-active"
    >
      Gallery View
    </NavLink>
  </div>
);

export default MainNav;
