import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import logo from "../../../Assets/Images/logo.png";

const Header = () => {
  const navBarItems = (
    <React.Fragment>
      <li>
        <Link to="/home">Home</Link>
      </li>
      <li>
        <HashLink smooth to="/#projects">
          Projects
        </HashLink>
      </li>
      <li>
        <Link to="/blogs">Blogs</Link>
      </li>
      <li>
        <HashLink smooth to="/#about">
          About
        </HashLink>
      </li>
      <li>
        <HashLink smooth to="/#contact">
          Contact Me
        </HashLink>
      </li>
    </React.Fragment>
  );

  return (
    <section className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navBarItems}
          </ul>
        </div>
        <Link to="/home">
          <div className="w-16">
            <img src={logo} alt="" />
          </div>
        </Link>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{navBarItems}</ul>
      </div>
    </section>
  );
};

export default Header;
