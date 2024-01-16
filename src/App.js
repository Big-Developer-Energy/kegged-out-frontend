import React, { useState, useEffect, useRef } from "react";
import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
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
  const [input, setInput] = useState("");
  const [output, setOutput] = useState([]);
  const inputRef = useRef();

  useEffect(() => {
    const loggedInUser = localStorage.getItem("token");
    if (loggedInUser) {
      setCurrentUser(loggedInUser);
    }
    readBeer();
  }, []);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const navigate = useNavigate();

  const createBeer = (beer) => {
    console.log(beer);
    fetch("http://localhost:3000/reviews", {
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

  const destroyBeer = (id) => {
    fetch(`http://localhost:3000/reviews/${id}`, {
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
    fetch("http://localhost:3000/login", {
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
    fetch("http://localhost:3000/signup", {
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
    fetch("http://localhost:3000/logout", {
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

  // Not Found Page

  const handleNotFoundChange = (e) => {
    setInput(e.target.value);
  };

  const handleNotFoundClick = (e) => {
    inputRef.current.focus();
  };

  const handleNotFoundKey = (e) => {
    let key = e.key;
    if (key === "Enter") {
      const newOutput = [
        ...output,
        { command: input, response: processCommand(input) },
      ];
      setOutput(newOutput);
      setInput(""); // Clear the input field
    }
  };

  const processCommand = (command) => {
    let listOfCommands = [
      "pwd\n",
      "about\n",
      "secret\n",
      "help\n",
      "clear\n",
      "home",
    ];
    if (input === "pwd") {
      return "Welcome to our Brewery, here you can learn more about the creators of this website";
    } else if (input === "about") {
      return "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Porttitor massa id neque aliquam vestibulum morbi blandit cursus risus. Diam in arcu cursus euismod quis viverra nibh. Quam pellentesque nec nam aliquam sem. Rhoncus dolor purus non enim praesent elementum facilisis leo.";
    } else if (input === "secret") {
      return "Secret thing";
    } else if (input === "help") {
      return listOfCommands;
    } else if (input === "clear") {
      return "some function that clears the terminal";
    } else if (input === "home") {
      setTimeout(() => {
        navigate("/")
      }, 3000 )
      setInput("")
      return "Opening Kegged Out..."
    } else {
      return `'${command}' was not recognized, type 'help' for a list of available commands`;
    }
  };

  return (
    <>
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
            element={<BeerEdit beers={beers} updateBeer={updateBeer} />}
          />
        )}
        {currentUser && (
          <Route
            path="/MyBeerIndex"
            element={<MyBeerIndex currentUser={currentUser} beers={beers} />}
          />
        )}
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route
          path="*"
          element={
            <NotFound
              input={input}
              output={output}
              inputRef={inputRef}
              handleNotFoundChange={handleNotFoundChange}
              handleNotFoundKey={handleNotFoundKey}
              handleNotFoundClick={handleNotFoundClick}
            />
          }
        />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
