import React, { useState } from 'react'
import { Form, FormGroup, Input, Label, Button } from "reactstrap";
import { useNavigate, useParams } from "react-router-dom";



const BeerEdit = ({ beers, updateBeer }) => {

  const { id } = useParams()
  
  let currentBeer = beers?.find((beer) => beer.id === +id)

  const [editBeer, setEditBeer] = useState({
    name: currentBeer?.name,
    rating: currentBeer?.rating,
    description: currentBeer?.description,
    location: currentBeer?.location,
    image: currentBeer?.image
  })

  const handleChange = (e) => {
    setEditBeer({ ...editBeer, [e.target.name]: e.target.value })
  }
  const navigate = useNavigate()
  const handleSubmit = () => {
    updateBeer(editBeer, currentBeer.id)
    navigate("/BeerIndex")
  }

  return (
    <>
      {currentBeer && (
        <>
          <Form>
            <FormGroup>
              <Label for="name">Name</Label>
              <Input type="text" name="name" onChange={handleChange} value={editBeer.name} />
            </FormGroup>
            <FormGroup>
              <Label for="rating">Rating</Label>
              <Input type="text" name="rating" onChange={handleChange} value={editBeer.rating} />
            </FormGroup>
            <FormGroup>
              <Label for="description">Description</Label>
              <Input type="text" name="description" onChange={handleChange} value={editBeer.description} />
            </FormGroup>
            <FormGroup>
              <Label for="location">Location</Label>
              <Input type="text" name="location" onChange={handleChange} value={editBeer.location} />
            </FormGroup>
            <FormGroup>
              <Label for="image">Image</Label>
              <Input type="text" name="image" onChange={handleChange} value={editBeer.image} />
            </FormGroup>
          </Form>
          <Button onClick={handleSubmit} name="submit">Submit Update</Button>
        </>
      )
      }
    </>
  )
}

export default BeerEdit