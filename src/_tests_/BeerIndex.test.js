import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import BeerIndex from "../pages/BeerIndex";

describe("<BeerIndex />", () => {
    const renderIndex = () => {
      render(
        <BrowserRouter >
          <BeerIndex />
        </BrowserRouter>
      );
    };

  it("Renders without crashing", () => {
    renderIndex();
    screen.logTestingPlaygroundURL()
  });
  it("renders beer cards", () => {
    renderIndex();
    
    beers.forEach((beer) => {
      const beerName = screen.getByText(beer.name);
      expect(beerName).toBeInTheDocument();
    });
  });
});
