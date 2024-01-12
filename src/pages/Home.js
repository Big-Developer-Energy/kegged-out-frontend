import React from "react";
import { Nav, NavItem } from "reactstrap";
import { NavLink } from "react-router-dom";
import "../pages/Pages.css";
import twobeers from "../assets/twobeers.jpg";
import beer from "../assets/beer.jpg";
import bdelogo from "../assets/bdelogo.jpg";

const Home = () => {
  return (
    <>
      <div className="Home-page">
        <h1>Kegged out, where finding Breweries is our tap stoutsation</h1>
      </div>
      <Nav className="home-link">
        <NavItem>
          <NavLink to="/BeerIndex">Browse our Beers!</NavLink>
        </NavItem>
      </Nav>
      <div className="home-images">
        <img
          src={beer}
          alt="beers"
          style={{ height: "250px", width: "300px" }}
        />
        <img
          src={twobeers}
          alt="two-beers"
          style={{ height: "320px", width: "470px" }}
        />
        
      </div>
      <div className="home-text">
      <img
          src={bdelogo}
          alt="bdelogo"
          style={{ height: "200px", width: "200px" }}
        />
      <p>
        We believe in quality products. Good quality atmosphere. Hey there,
        fellow beer enthusiasts! We're the Kegged Out, a dynamic quartet on a
        mission to explore the vast and tantalizing world of breweries and craft
        beer. United by our unwavering passion for the art of brewing, we've
        come together to share our experiences, insights, and the sheer joy of
        sipping on some exceptional brews.
      </p>
      </div>
    </>
  );
};

export default Home;
