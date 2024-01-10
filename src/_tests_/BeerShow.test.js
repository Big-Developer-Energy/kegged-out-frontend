import { render, screen } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import BeerShow from "../pages/BeerShow.js";
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
const renderShow = () => {
  render(
    <MemoryRouter initialEntries={["/beershow/1"]}>
      <Routes>
        <Route path="/beershow/:id" element={<BeerShow beers={beers} />} />
      </Routes>
    </MemoryRouter>
  );
};
describe("<BeerShow />", () => {
  it("renders without crashing", () => {
    renderShow();
    screen.logTestingPlaygroundURL();
  });
});
