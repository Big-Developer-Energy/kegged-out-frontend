import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const BeerShow = ({ currentBeer }) => {
  <NavLink to={`/BeerEdit/${currentBeer.id}`} className="nav-link">Edit A Review</NavLink>
  return (
   <>

   </>
  )
}

export default BeerShow