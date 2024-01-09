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

import mockBeer from "./MockBeer";

function App() {
  const [beers, setBeers] = useState(mockBeer);
  console.log(beers);

  const createBeer = (beer) => {
    console.log(beer);
  };
  const updateBeer = (beer, id) => {
    console.log("beer:", beer);
    console.log("id:", id);
  };

  const destroyBeer = (beer, id) => {
    console.log("beer:", beer)
    console.log("id:", id)
  }

  return (
    <>
      <Header />
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
      </Routes>
      <Footer />
    </>
  );
}

export default App;
