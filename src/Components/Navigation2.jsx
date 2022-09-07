import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/index.scss";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Navigation2 = () => {
  let handleClick1 = () => {
    window.location = "http://www.google.com";
  };
  let handleClick2 = () => {
    window.location = "http://www.firefox.com";
  };

  return (
    <div>
      <div className="navigation">
        <ul>
          <NavLink to="/presentation" className={(nav) => (nav.isActive ? "nav-active" : "")}>
            <li>Présentation</li>
          </NavLink>
          <NavLink to="/contact" className={(nav) => (nav.isActive ? "nav-active" : "")}>
            <li>Contact</li>
          </NavLink>
        </ul>
        <ul>
          <li>
            <FaFacebook className="icons" name="icons" onClick={handleClick1} />
          </li>
          <li>
            <FaInstagram className="icons" name="icons" onClick={handleClick2} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navigation2;
