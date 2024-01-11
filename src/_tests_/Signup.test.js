import { render, screen, container } from "@testing-library/react";
import Signup from "../pages/Signup";
import { BrowserRouter } from "react-router-dom";

describe("<Signup />", () => {
  const renderSignUp = () => {
    render(
      <BrowserRouter>
        <Signup />
      </BrowserRouter>
    );
  };
  it("renders without crashing", () => {
    renderSignUp();
    screen.logTestingPlaygroundURL();
  });
  it("renders a signup form", () => {
    renderSignUp()
    const emailInput = screen.getByRole('textbox')
    expect(emailInput).toBeInTheDocument()
    const passwordInput = screen.getByText(/password/i)
    expect(passwordInput).toBeInTheDocument()
    const confirmPasswordInput = screen.getByText(/confirm password/i)
    expect(confirmPasswordInput).toBeInTheDocument()
  })
  it("creates account on submit", () => {
    renderSignUp()
    const submitButton = screen.getByRole('button', {
        name: /submit/i
      })
      expect(submitButton).toBeInTheDocument()
  })
});
