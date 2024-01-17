import React from "react";
import "../pages/Pages.css";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const congrats =
    "congratulations you found the password!!!\n password: $IPA$";
  console.log(congrats);
  const [input, setInput] = useState("");
  const [output, setOutput] = useState([]);
  const [message, setMessage] = useState("welcome to Kegged ou.......");
  const [instruction, setInstruction] = useState("");
  const [line, setLine] = useState("visitor@keggedout.com~~");
  const inputRef = useRef();
  const terminalRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [output]); // Dependency array with your state variable that triggers the scroll

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleClick = (e) => {
    inputRef.current.focus();
  };

  const handleKey = (e) => {
    let key = e.key;
    if (key === "Enter") {
      if (input === "clear") {
        setOutput([]);
        setInput("");
      } else {
        let newOutput = [
          ...output,
          { command: input, response: commandResponse(input) },
        ];
        setOutput(newOutput);
        setInput(""); // Clear the input field
      }
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
      setLine("admin@keggedout.com~~");
      return "Please enter password";
    } else if (command === "pwd") {
      setLine("visitor@keggedout.com~~");
      return "Welcome to our Brewery, here you can learn more about the creators of this website";
    } else if (command === "about") {
      setLine("visitor@keggedout.com~~");
      return "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Porttitor massa id neque aliquam vestibulum morbi blandit cursus risus. Diam in arcu cursus euismod quis viverra nibh. Quam pellentesque nec nam aliquam sem. Rhoncus dolor purus non enim praesent elementum facilisis leo.";
    } else if (command === "help") {
      setLine("visitor@keggedout.com~~");
      return listOfCommands;
    } else if (command === "$IPA$") {
      setLine("admin@keggedout.com~~");
      window.open(
        "https://youtu.be/dQw4w9WgXcQ?si=fBDDtHiTRFIwu6L2&t=43",
        "_blank"
      );
    } else if (command === "home") {
      setLine("visitor@keggedout.com~~");
      setTimeout(() => {
        navigate("/");
      }, 2000);

      return "Opening Kegged Out...";
    } else {
      setLine("visitor@keggedout.com~~");
      return `'${command}' was not recognized, type 'help' for a list of available commands`;
    }
  };
  setTimeout(() => {
    setMessage("🍺🍺🍺 Brewing Error: Keg Not Found! 🍺🍺🍺\n");
  }, 1500);
  setTimeout(() => {
    setInstruction("For a list of available commands, type 'help'");
  }, 2200);
 

  return (
    <>
      <main
        ref={terminalRef}
        className="terminal-container"
        onClick={handleClick}
      >
        <p className="error-message">{message}</p>
        <p className="error-message">{instruction}</p>
        <div className="terminal">
          {output.map((item, index) => (
            <div key={index}>
              <span className="command">
                {line}
                {item.command}
              </span>
              <br />
              <span className="response">{item.response}</span>
              <br />
              <br />
            </div>
          ))}
        </div>
        <div className="input">
          {line}
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={handleChange}
            onKeyDown={handleKey}
          />
        </div>
      </main>
    </>
  );
};

export default NotFound;
