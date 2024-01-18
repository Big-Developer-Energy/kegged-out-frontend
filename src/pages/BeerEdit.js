import React, { useState } from 'react'
import { Form, FormGroup, Input, Label } from "reactstrap";
import { useNavigate, useParams } from "react-router-dom";



const BeerEdit = ({ beers, updateBeer, currentUser }) => {

  const { id } = useParams()
  
  let currentBeer = beers?.find((beer) => beer.id === +id)

  const [editBeer, setEditBeer] = useState({
    id: currentBeer?.id,
    name: currentBeer?.name,
    rating: currentBeer?.rating,
    description: currentBeer?.description,
    location: currentBeer?.location,
    image: currentBeer?.image,
    user_id: currentUser?.id
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
        <h1 className='beer-edit-title'>Edit a Brewview</h1>
        <div className='beer-edit-form'>
          <Form>
            <FormGroup className='beer-edit-form-group'>
              <Label for="name">Beer Name</Label>
              <Input type="text" name="name" onChange={handleChange} value={editBeer.name} />
            </FormGroup>
            <FormGroup className='beer-edit-form-group'>
              <Label for="rating">Rating</Label>
              <Input type="text" name="rating" onChange={handleChange} value={editBeer.rating} />
            </FormGroup>
            <FormGroup className='beer-edit-form-group'>
              <Label for="description">Description of Beer</Label>
              <Input type="text" name="description" onChange={handleChange} value={editBeer.description} />
            </FormGroup>
            <FormGroup className='beer-edit-form-group'>
              <Label for="location">Brewery Name/Location</Label>
              <Input type="text" name="location" onChange={handleChange} value={editBeer.location} />
            </FormGroup>
            <FormGroup className='beer-edit-form-group'>
              <Label for="image">Upload Image</Label>
              <Input type="text" name="image" onChange={handleChange} value={editBeer.image} />
            </FormGroup>
          <button onClick={handleSubmit} name="submit">Submit Update</button>
          </Form>
          </div>
        </>
      )
      }
    </>
  )
}

export default BeerEdit