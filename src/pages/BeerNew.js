import React, { useState } from "react";
import { Form, FormGroup, Input, Label } from "reactstrap";
import { useNavigate } from "react-router-dom";

const BeerNew = ({ createBeer }) => {
  const navigate = useNavigate();
  const [newBeer, setNewBeer] = useState({
    name: "",
    rating: "",
    description: "",
    location: "",
    image: "",
  });

  const handleChange = (e) => {
    setNewBeer({ ...newBeer, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    createBeer(newBeer);
    navigate("/BeerIndex");
  };

  return (
    <>
      <FormGroup>
        <Label for="name">Name</Label>
        <Input
          id="name"
          type="text"
          name="name"
          onChange={handleChange}
          value={newBeer.name}
        />
      </FormGroup>
      <FormGroup>
        <Label for="rating">Rating</Label>
        <Input
          id="rating"
          type="text"
          name="rating"
          onChange={handleChange}
          value={newBeer.rating}
        />
      </FormGroup>
      <FormGroup>
        <Label for="description">Description</Label>
        <Input
          id="descritpion"
          type="text"
          name="description"
          onChange={handleChange}
          value={newBeer.description}
        />
      </FormGroup>
      <FormGroup>
        <Label for="location">Location</Label>
        <Input
          id="location"
          type="text"
          name="location"
          onChange={handleChange}
          value={newBeer.location}
        />
      </FormGroup>
      <FormGroup>
        <Label for="image">Image</Label>
        <Input
          id="image"
          type="text"
          name="image"
          onChange={handleChange}
          value={newBeer.image}
        />
      </FormGroup>
      <button onClick={handleSubmit} name="submit">
        Submit Beer
      </button>
    </>
  );
};

export default BeerNew;
