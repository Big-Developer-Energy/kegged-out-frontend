import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import BeerIndex from "../pages/BeerIndex";
import MockBeer from "../MockBeer.js";

describe("<BeerIndex />", () => {
    const renderIndex = () => {
      render(
        <BrowserRouter >
          <BeerIndex beers={MockBeer} />
        </BrowserRouter>
      );
    };

  it("Renders without crashing", () => {
    renderIndex();
    screen.logTestingPlaygroundURL()
  });
  it("renders beer cards", () => {
    renderIndex();
    
    MockBeer.forEach((beer) => {
      const beerName = screen.getByText(beer.name);
      expect(beerName).toBeInTheDocument();
    });
  });
});
