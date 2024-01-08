import { render, screen } from "@testing-library/react";
import Footer from "../components/Footer";
import { BrowserRouter } from "react-router-dom";

describe("<Footer />", () => {
  it("renders without crashing", () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );
    const footerText = screen.getByText(/&copy Alex, Chandler, Dalton, Danny/);
    expect(footerText).toBeInTheDocument();
  });
});
