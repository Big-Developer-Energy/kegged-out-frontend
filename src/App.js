import React, { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BeerEdit from "./pages/BeerEdit";
import BeerIndex from "./pages/BeerIndex";
import BeerNew from "./pages/BeerNew";
import BeerShow from "./pages/BeerShow";
import NotFound from "./pages/NotFound";

import MyBeerIndex from "./pages/MyBeerIndex";



import mockBeer from "./MockBeer";
import mockUsers from "./mockUsers";
import Navigation from "./components/Navigation";


function App() {

  const [currentUser, setCurrentUser] = useState(mockUsers[0])

  const [beers, setBeers] = useState(mockBeer);

  const createBeer = (beer) => {
   
  };
  const updateBeer = (beer, id) => {
    
  };



  const destroyBeer = (beer, id) => {

  }


  return (
    <>
      <Header />
      <Navigation currentUser={currentUser}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/BeerIndex" element={<BeerIndex beers={beers} />} />
        <Route path="/BeerShow/:id" element={<BeerShow beers={beers} destroyBeer={destroyBeer} />} />
        <Route path="/BeerNew" element={<BeerNew createBeer={createBeer} />} />
        <Route
          path="/BeerEdit/:id"
          element={<BeerEdit beers={beers} updateBeer={updateBeer} />}
        />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="*" element={<NotFound />} />
        {currentUser && (
          <Route path="/MyBeerIndex" element={<MyBeerIndex currentUser={currentUser} beers={beers}/>} />
        )}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
