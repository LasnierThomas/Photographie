import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/index.scss";
import logo from "../Assets/images/logo11.png";

const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
        <NavLink to="/animaux" className={(nav) => (nav.isActive ? "nav-active" : "")}>
          <li>Animaux</li>
        </NavLink>
        <NavLink to="/paysage" className={(nav) => (nav.isActive ? "nav-active" : "")}>
          <li> Paysage </li>
        </NavLink>
        <NavLink to="/portrait" className={(nav) => (nav.isActive ? "nav-active" : "")}>
          <li> Portrait </li>
        </NavLink>
        <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
          <li>
            <img src={logo} alt="logo du site" />
          </li>
        </NavLink>
        <NavLink to="/naissance" className={(nav) => (nav.isActive ? "nav-active" : "")}>
          <li> Naissance </li>
        </NavLink>
        <NavLink to="/bapteme" className={(nav) => (nav.isActive ? "nav-active" : "")}>
          <li> Baptème </li>
        </NavLink>
        <NavLink to="/mariage" className={(nav) => (nav.isActive ? "nav-active" : "")}>
          <li> Mariage </li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
