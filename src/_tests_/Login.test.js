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
    screen.logTestingPlaygroundURL()

    const emailInput = screen.getByText(/email/i);
    expect(emailInput).toBeInTheDocument();

    const passwordInput = screen.getByText(/password/i);
    expect(passwordInput).toBeInTheDocument();
  });

  it("has a form with entries for email and password", () => {
    renderLogin();

    const formEmail = screen.getByRole('textbox', {email: /email/i, });
    expect(formEmail.getAttribute("type")).toEqual("email");

    const formPassword = screen.getByPlaceholderText(/password/i);
    expect(formPassword.getAttribute("placeholder")).toEqual("password");
  });
});