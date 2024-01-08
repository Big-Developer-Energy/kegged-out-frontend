import React, { useState } from 'react'
import { Form, FormGroup, Input, Label } from "reactstrap";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from 'bootstrap';


const BeerEdit = ({beers, updateBeer }) => {
  const { id } = useParams()
  let currentBeer = beers?.find((beer) => beer.id === +id)

  const [editBeer, setEditBeer] = useState({
    name: currentBeer.name,
    rating: currentBeer.rating,
    description: currentBeer.description,
    locaiton: currentBeer.location,
    image: currentBeer.image
  })
  const handleChange = (e) => {
    setEditBeer({ ...editBeer, [e.target.name]: e.target.value})
  }
  const navigate = useNavigate()
  const handleSubmit = () => {
    updateBeer(editBeer, currentBeer.id)
    navigate("/BeerIndex")
  }
  return (
   <>
   <Form>
    <FormGroup>
      <Label for="name">Name</Label>
      <Input type="text" name="name" handleChange={handleChange} value={editBeer.name}/>
    </FormGroup>
    <FormGroup>
      <Label for="rating">Rating</Label>
      <Input type="text" name="rating" handleChange={handleChange} value={editBeer.rating}/>
    </FormGroup>
    <FormGroup>
      <Label for="description">Description</Label>
      <Input type="text" name="description" handleChange={handleChange} value={editBeer.description}/>
    </FormGroup>
    <FormGroup>
      <Label for="location">Location</Label>
      <Input type="text" name="location" handleChange={handleChange} value={editBeer.locaiton}/>
    </FormGroup>
    <FormGroup>
      <Label for="image">Image</Label>
      <Input type="text" name="image" handleChange={handleChange} value={editBeer.image}/>
    </FormGroup>
   </Form>
   <Button onClick={handleSubmit} name="submit">Submit Update</Button>
   </>
  )
}

export default BeerEdit