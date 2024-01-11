import { render, screen } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import BeerEdit from "../pages/BeerEdit"

const beers = [
  {
    name: "Heineken",
    rating: 4,
    description: "Smooth and crisp",
    location: "National City",
    image: "image",
    user_id: 1,
  },
];

const currentBeer = beers[0]

const renderEdit = () => {
  render(
    <MemoryRouter initialEntries={[`/beeredit/${currentBeer.id}`]}>
      <Routes>
        <Route path="/beeredit/:id" element={<BeerEdit beers={beers} currentBeer={currentBeer} />} />
      </Routes>
    </MemoryRouter>
  );
};

describe("<BeerEdit />", () => {
    it("renders without crashing", () => {
        renderEdit();
    });
    
    screen.logTestingPlaygroundURL();

    // it("renders an edit Beer form", () => {
    //     renderEdit();
      
    //     const nameInput = screen.getByText(/name/i);
    //     expect(nameInput).toBeInTheDocument();
      
    //     const ratingInput = screen.getByText(/rating/i);
    //     expect(ratingInput).toBeInTheDocument();
      
    //     const descriptionInput = screen.getByText(/description/i);
    //     expect(descriptionInput).toBeInTheDocument();
      
    //     const locationInput = screen.getByText(/location/i);
    //     expect(locationInput).toBeInTheDocument();
      
    //     const imageInput = screen.getByText(/image/i);
    //     expect(imageInput).toBeInTheDocument();
    // });
      
    // it("has a form with entries for name, rating, description, location, image", () => {
    //     renderEdit();
          
    //     const formName = screen.getByText(/name/i);
    //     expect(formName.getAttribute("For")).toEqual("name");
    // });
          
});