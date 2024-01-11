import { render, screen } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import BeerEdit from "../pages/BeerEdit"

const beers = [
  {
    name: "Heineken",
    rating: 4,
    description: "Smooth and crisp",
    location: "National City",
    image: "image",
    user_id: 1,
  },
];

const currentBeer = beers[0]

const renderEdit = () => {
  render(
    <MemoryRouter initialEntries={[`/beeredit/${currentBeer.id}`]}>
      <Routes>
        <Route path="/beeredit/:id" element={<BeerEdit beers={beers} currentBeer={currentBeer} />} />
      </Routes>
    </MemoryRouter>
  );
};

describe("<BeerEdit />", () => {
    it("renders without crashing", () => {
        renderEdit();
    });
    
    screen.logTestingPlaygroundURL();
});