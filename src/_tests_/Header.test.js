import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Header from "../components/Header";

describe("<Header />", () => {
  const router = () => {
    render(
      <>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </>
    );
  };
  it("renders without crashing", () => {
    router()
  });
  it("renders a logo with a src and alt", () => {
    router()
    const logo = screen.getByRole("img");
    expect(logo).toHaveAttribute("src", "keggedOut.jpg");
    expect(logo).toHaveAttribute("alt", "keg");
  });
  it("has navigation links", () => {
    router()    
    const homeLink = screen.getAllByRole("link");
    expect(homeLink.length).toEqual(6);
  });
});
