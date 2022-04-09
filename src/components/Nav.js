import React from "react";
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav">
      <ul className="ul1">
        <li className="li1">
          <NavLink className="link" to="/">
            <p>HOME</p>
            <i className="bx bx-home home-icon  first-icon"></i>
          </NavLink>
        </li>
        <li className="li1">
          <Link className="link" to="/about" activeClassName="active-nav">
            <p>ABOUT</p>
            <i className="bx bx-user home-icon"></i>
          </Link>
        </li>
        <li className="li1">
          <Link className="link" to="/portfolio" activeClassName="active-nav">
            <p>PORTFOLIO</p>
            <i className="bx bx-briefcase home-icon"></i>
          </Link>
        </li>
        <li className="li1">
          <Link className="link" to="/contact" activeClassName="active-nav">
            <p>CONTACT</p>
            <i className="bx bx-envelope-open home-icon"></i>
          </Link>
        </li>
        <li className="li1">
          <Link className="link" to="/">
            <p>BLOG</p>
            <i className="bx bx-message-rounded home-icon"></i>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
