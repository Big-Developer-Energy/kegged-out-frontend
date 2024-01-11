import { render, screen } from "@testing-library/react"
import Signup from "../pages/Signup"
import { BrowserRouter } from "react-router-dom"

describe("<Signup />", () => {
    const renderSignUp = () => {
        render(
        <BrowserRouter>
        <Signup />
        </BrowserRouter>
        )
    }
    it("renders without crashing", () => {
        renderSignUp();
        screen.logTestingPlaygroundURL()
    })
})

describe("handleSubmit", () => {
    it("changes the value of an event", () => {
        expect(handleSubmit).to(preventDefault())
    })
})