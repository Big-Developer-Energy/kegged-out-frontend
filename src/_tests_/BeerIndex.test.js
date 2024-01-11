import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import BeerIndex from "../pages/BeerIndex";
import mockBeer from "../MockBeer";

describe("<BeerIndex />", () => {
    const renderIndex = () => {
      render(
        <BrowserRouter >
          <BeerIndex beers={mockBeer}/>
        </BrowserRouter>
      );
    };

  it("Renders without crashing", () => {
    renderIndex();
    screen.logTestingPlaygroundURL()
  });
  it("renders beer cards", () => {
    renderIndex();
    
    mockBeer.forEach((beer) => {
      const beerName = screen.getByText(beer.name);
      expect(beerName).toBeInTheDocument();
    });
  });
  it("has a clickable link", () => {
    renderIndex();
  
    })
  })

