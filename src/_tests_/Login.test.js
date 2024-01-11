import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import Login from "../pages/Login";

describe("<Login />", () => {
  const renderLogin = () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );
  };
  it("renders a login form", () => {
    renderLogin();
    
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
    renderLogin();
    const formName = screen.getByText(/name/i);
    expect(formName.getAttribute("For")).toEqual("name");
  });
});