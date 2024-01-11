import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import BeerNew from "../pages/BeerNew";

describe("<BeerNew />", () => {
  const renderNew = () => {
    const currentUser = {
      email: "test@test.com",
      password: "testing123",
      id: 1,
    }
    render(
      <BrowserRouter>
        <BeerNew currentUser={currentUser}/>
      </BrowserRouter>
    );
  };
  it("renders without crashing", () => {
    renderNew()
  })
  it("renders a new Beer form", () => {
    renderNew();
    
    const nameInput = screen.getByText(/name/i);
    expect(nameInput).toBeInTheDocument();

    const ratingInput = screen.getByText(/rating/i);
    expect(ratingInput).toBeInTheDocument();

    const descriptionInput = screen.getByText(/description/i);
    expect(descriptionInput).toBeInTheDocument();
    const locationInput = screen.getByText(/location/i);
    expect(locationInput).toBeInTheDocument();
    const imageInput = screen.getByText(/image/i);
    expect(imageInput).toBeInTheDocument();

  });

  it("has a form with entries for name, rating, description, location, image", () => {
    renderNew();
    const formName = screen.getByText(/name/i);
    expect(formName.getAttribute("For")).toEqual("name");
  });
});
