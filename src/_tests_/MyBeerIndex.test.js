import React from "react"
import { render, screen } from "@testing-library/react"
import MyBeerIndex from "../pages/MyBeerIndex"
import { BrowserRouter, useParams } from "react-router-dom"

describe("<MyBeerIndex />", () => {
  beforeEach(() => {
    const currentUser = {
      email: "test@test.com",
      password: "testing123",
      id: 1,
    }
    const userBeers = [
      {
        name: 'Heineken',
        rating: 4,
        description: 'Smooth and crisp',
        location: 'National City',
        image: 'image',
        user_id: 1,
      },
    ]
    render(
      <BrowserRouter>
        <MyBeerIndex currentUser={currentUser} myBeers={userBeers} />
      </BrowserRouter>
    )
  })

  it("renders without crashing", () => {
    const element = screen.getByText("My Beers")
    expect(element).toBeInTheDocument()
  })
})