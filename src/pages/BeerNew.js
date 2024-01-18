import React, { useState } from "react";
import { Form, FormGroup, Input, Label } from "reactstrap";
import { useNavigate } from "react-router-dom";

const BeerNew = ({ createBeer, currentUser }) => {
  const navigate = useNavigate();
  const [newBeer, setNewBeer] = useState({
    name: "",
    rating: "",
    description: "",
    location: "",
    image: "",
    user_id: currentUser.id
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
    <h1 className="beer-new-title">Create a Brewview</h1>
    <div className="beer-new-form">
    <Form>
      <FormGroup className="beer-new-form-group">
        <Label for="name">Beer Name</Label>
        <Input
          id="name"
          type="text"
          name="name"
          onChange={handleChange}
          value={newBeer.name}
        />
      </FormGroup>
      <FormGroup className="beer-new-form-group">
        <Label for="rating">Rating (1-5)</Label>
        <Input
          id="rating"
          type="text"
          name="rating"
          onChange={handleChange}
          value={newBeer.rating}
        />
      </FormGroup>
      <FormGroup className="beer-new-form-group">
        <Label for="description">Description of Beer</Label>
        <Input
          id="descritpion"
          type="text"
          name="description"
          onChange={handleChange}
          value={newBeer.description}
        />
      </FormGroup>
      <FormGroup className="beer-new-form-group">
        <Label for="location">Brewery Name/Location</Label>
        <Input
          id="location"
          type="text"
          name="location"
          onChange={handleChange}
          value={newBeer.location}
        />
      </FormGroup>
      <FormGroup className="beer-new-form-group">
        <Label for="image">Upload Image</Label>
        <Input
          id="image"
          type="text"
          name="image"
          onChange={handleChange}
          value={newBeer.image}
        />
      </FormGroup>
      <button onClick={handleSubmit} name="submit">
        Submit Beer Review
      </button>
      </Form>
      </div>
    </>
  );
};

export default BeerNew;
