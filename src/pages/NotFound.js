import React from "react";
import "../pages/Pages.css";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState([]);
  const inputRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

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
        { command: input, response: commandResponse(input) },
      ];
      setOutput(newOutput);
      setInput(""); // Clear the input field
    }
  };

  const commandResponse = (command) => {
    let listOfCommands = [
      "pwd\n",
      "about\n",
      "secret\n",
      "help\n",
      "clear\n",
      "home",
    ];

    if (command === "secret") {
      return "Please enter password";
    } else if (command === "pwd") {
      return "Welcome to our Brewery, here you can learn more about the creators of this website";
    } else if (command === "about") {
      return "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Porttitor massa id neque aliquam vestibulum morbi blandit cursus risus. Diam in arcu cursus euismod quis viverra nibh. Quam pellentesque nec nam aliquam sem. Rhoncus dolor purus non enim praesent elementum facilisis leo.";
    } else if (command === "help") {
      return listOfCommands;
    } else if (command === "clear") {
      return "clearFunction";
    } else if (command === "$BDE$") {
      window.open(
        "https://youtu.be/dQw4w9WgXcQ?si=fBDDtHiTRFIwu6L2&t=43",
        "_blank"
      );
    } else if (command === "home") {
      setTimeout(() => {
        navigate("/");
      }, 2000);
      // clearFunction
      return "Opening Kegged Out...";
    } else {
      return `'${command}' was not recognized, type 'help' for a list of available commands`;
    }
  };

  return (
    <>
      <div className="terminal-container" onClick={handleNotFoundClick}>
        <div className="terminal">
          {output.map((item, index) => (
            <div key={index}>
              <span className="command">
                visitor@keggedout.com~~{item.command}
              </span>
              <br />
              <span className="response">{item.response}</span>
              <br />
              <br />
            </div>
          ))}
        </div>
        <div className="input">
          visitor@keggedout.com~~
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={handleNotFoundChange}
            onKeyDown={handleNotFoundKey}
          />
        </div>
      </div>
    </>
  );
};

export default NotFound;
