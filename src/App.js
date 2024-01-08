import React, { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
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
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/BeerIndex" element={<BeerIndex />} />
        <Route path="/BeerShow" element={<BeerShow />} />
        <Route path="/BeerNew" element={<BeerNew createBeer={createBeer} />} />
        <Route path="/BeerEdit" element={<BeerEdit />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
