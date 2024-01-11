import React from "react";
import { render, screen } from "@testing-library/react";
import MyBeerIndex from "../pages/MyBeerIndex";
import { BrowserRouter, useParams } from "react-router-dom";
import mockBeer from "../MockBeer";

describe("<MyBeerIndex />", () => {
  const currentUser = {
    email: "test@test.com",
    password: "testing123",
    id: 1,
  };

  const renderMyBeerIndex = () => {
    render(
      <BrowserRouter>
        <MyBeerIndex currentUser={currentUser} beers={mockBeer} />
      </BrowserRouter>
    );
  };

  it("renders without crashing", () => {
    renderMyBeerIndex();
  });
  it("renders beer cards", () => {
    renderMyBeerIndex();
    mockBeer.forEach((beer) => {
      const beerName = screen.getByText(beer.name);
      expect(beerName).toBeInTheDocument();
    });
  });
});
