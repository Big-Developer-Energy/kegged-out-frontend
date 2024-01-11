import { render, screen } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import BeerShow from "../pages/BeerShow.js";

import mockBeer from "../MockBeer.js";
import userEvent from "@testing-library/user-event";

const renderShow = () => {
  render(
    <MemoryRouter initialEntries={["/beershow/1"]}>
      <Routes>
        <Route path="/beershow/:id" element={<BeerShow  beers={mockBeer} />} />
      </Routes>
    </MemoryRouter>
  );
};
describe("<BeerShow />", () => {
  it("renders without crashing", () => {
    renderShow();
    screen.logTestingPlaygroundURL();
  });
  it("renders a card with beer information", () => {
    renderShow();
    expect(
      screen.getByText(mockBeer[0].description, {exact: false})
    ).toBeInTheDocument()
  })
  it("has clickable edit button", () => {
    renderShow();
    userEvent.click(screen.getByRole('button', {
      name: /edit review/i
    }))
  })
  it("has clickable delete button", () => {
    renderShow();
    userEvent.click(screen.getByRole('button', {
      name: /delete review/i
    }))
  })
});
