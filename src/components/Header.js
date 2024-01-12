import React from "react";
import keggedOut from "../assets/keggedOut.jpg"
import { Nav, NavItem } from "reactstrap"
import { NavLink } from "react-router-dom"
import Navigation from "./Navigation";
import "../components/components.css";

const Header = ({currentUser, logout}) => {
  return (
    <>
    <div className="navigation-bar">
    <div className="header">
      <div className="title">
      <h1>Kegged Out</h1>
      <img
        className="keg"
        src={keggedOut}
        alt="keg"
        style={{ height: "50px", width: "50px" }}
        />
        </div>
    </div>
        <Nav className="nav-link">
            <NavItem>
                <NavLink to="/">Home</NavLink>
            </NavItem>
            <NavItem>
                <NavLink to="/BeerIndex">Beers</NavLink>
            </NavItem>
            <NavItem>
                <NavLink to="/BeerNew">Create a Review</NavLink>
            </NavItem>
            <NavItem>
                <NavLink to="/AboutUs">About Us</NavLink>
            </NavItem>
        </Nav>
        <Navigation currentUser={currentUser} logout={logout} />
    </div>
    </>
  );
};

export default Header;
