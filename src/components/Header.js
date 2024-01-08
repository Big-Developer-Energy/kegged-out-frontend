import React from "react";
import keggedOut from "../assets/keggedOut.jpg"
import { Nav, NavItem } from "reactstrap"
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
    <div className="Header">
      <h1>Kegged Out</h1>
      <img
        className="keg"
        src={keggedOut}
        alt="keg"
        style={{ height: "50px", width: "50px" }}
      />
    </div>
    <div className="Navigation bar">
        <Nav>
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
    </div>
    </>
  );
};

export default Header;
