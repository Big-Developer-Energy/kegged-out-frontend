import React, { useState, useEffect } from "react";
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
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import "./App.css";

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("token");
    if (loggedInUser) {
      setCurrentUser(loggedInUser);
    }
    readBeer();
  }, []);

  const url = "https://keggedout.onrender.com"

  const createBeer = (beer) => {
    fetch(`${url}/reviews`, {
      body: JSON.stringify(beer),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    })
      .then((response) => response.json())
      .then(() => readBeer())
      .catch((errors) => console.log("beer create errors:", errors));
  };

  const readBeer = () => {
    fetch(`${url}/reviews`)
      .then((response) => response.json())
      .then((payload) => {
        setBeers(payload);
      })
      .catch((errors) => console.log("Beers read errors: ", errors));
  };

  const updateBeer = (beer) => {
    fetch(`${url}/reviews/${beer.id}`, {
      body: JSON.stringify(beer),
      headers: {
        "Content-Type": "application/json",
      },
      method: "PATCH",
    })
      .then((response) => response.json())
      .then(() => readBeer())
      .catch((errors) => console.log("Update Beer errors: ", errors));
  };

  const destroyBeer = (id) => {
    fetch(`${url}/reviews/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(() => readBeer())
      .catch((errors) => console.log("Delete Beer errors:", errors));
  };

  const login = (userInfo) => {
    fetch(`${url}/login`, {
      body: JSON.stringify(userInfo),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      method: "POST",
    })
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        localStorage.setItem("token", response.headers.get("Authorization"));
        return response.json();
      })
      .then((payload) => {
        setCurrentUser(payload);
      })
      .catch((error) => console.log("login errors: ", error));
  };

  const signup = (userInfo) => {
    fetch(`${url}/signup`, {
      body: JSON.stringify(userInfo),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      method: "POST",
    })
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        localStorage.setItem("token", response.headers.get("Authroization"));
        return response.json();
      })
      .then((payload) => {
        setCurrentUser(payload);
      })
      .catch((error) => console.log("login errors: ", error));
  };

  const logout = () => {
    fetch(`${url}/logout`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
      method: "DELETE",
    })
      .then((payload) => {
        localStorage.removeItem("token");
        setCurrentUser(null);
      })
      .catch((error) => console.log("log out errors: ", error));
  };

  return (
    <>
      <div className="app">
      <Header currentUser={currentUser} logout={logout} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login login={login} />} />
        <Route path="/signup" element={<Signup signup={signup} />} />

        <Route path="/BeerIndex" element={<BeerIndex beers={beers} />} />

        {currentUser && (
          <Route
            path="/BeerShow/:id"
            element={<BeerShow beers={beers} destroyBeer={destroyBeer} />}
          />
        )}
        {currentUser && (
          <Route
            path="/BeerNew"
            element={
              <BeerNew createBeer={createBeer} currentUser={currentUser} />
            }
          />
        )}
        {currentUser && (
          <Route
            path="/BeerEdit/:id"
            element={
              <BeerEdit
                beers={beers}
                updateBeer={updateBeer}
                currentUser={currentUser}
              />
            }
          />
        )}
        {currentUser && (
          <Route
            path="/MyBeerIndex"
            element={<MyBeerIndex currentUser={currentUser} beers={beers} />}
          />
        )}
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      </div>
    </>
  );
};

export default App;
