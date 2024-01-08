import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import BeerShow from "../pages/BeerShow.js";
import MockBeer from "../MockBeer.js";

describe("<BeerShow />", () => {
    const renderShow = () => {
        <BrowserRouter>
        <BeerShow />
        </BrowserRouter>
    }
    it("renders without crashing", () => {
        renderShow()
    })
})