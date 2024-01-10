import React, { useState, useEffect } from "react";
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
import mockUser from "./mockUser";


const App = () => {
  const [currentUser, setCurrentUser] = useState(null)
  const [beers, setBeers] = useState([]);
  useEffect(() => {
    readBeer();
  }, []);

  const createBeer = (beer) => {
console.log(beer)

    // fetch("http://localhost:3000/reviews", {
    //   body: JSON.stringify(beer),
    //   headers: {
    //     "content-Type": "apllication/json",
    //   },
    //   method: "POST",
    // })
    //   .then((response) => response.json())
    //   .then(() => readBeer())
    //   .catch((errors) => console.log("beer create errors:", errors));
  };

  const readBeer = () => {
    fetch("http://localhost:3000/reviews")
      .then((response) => response.json())
      .then((payload) => {
        setBeers(payload);
      })
      .catch((errors) => console.log("Beers read errors: ", errors));
  };

  const updateBeer = (beer, id) => {
    fetch(`http://localhost:3000/reviews/${id}`, {
      body: JSON.stringify(beer),
      header: {
        "Content-Type": "application/json",
      },
      method: "PATCH",
    })
      .then((response) => response.json())
      .then(() => readBeer())
      .catch((errors) => console.log("Update Beer errors: ", errors));
  };

  const destroyBeer = (beer, id) => {
    fetch(`http://localhost3000/reviews/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(() => readBeer())
      .catch((errors) => console.log("Delete Beer errors:", errors));
  };

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/BeerIndex" element={<BeerIndex beers={beers} />} />
        <Route
          path="/BeerShow/:id"
          element={<BeerShow beers={beers} destroyBeer={destroyBeer} />}
        />
        <Route path="/BeerNew" element={<BeerNew createBeer={createBeer}  currentUser={currentUser} />} />
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
