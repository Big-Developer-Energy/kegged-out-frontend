import { render } from "@testing-library/react"
import AboutUs from "../pages/AboutUs"

describe("<AboutUs />", () => {
    it("renders without crashing,", () => {
        const div = document.createElement("div")
        render(<AboutUs />, div)
    })
})