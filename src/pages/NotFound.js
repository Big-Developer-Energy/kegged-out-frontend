import React from "react";
import "../pages/Pages.css";

const NotFound = ({
  input,
  output,
  handleNotFoundKey,
  handleNotFoundChange,
  handleNotFoundClick,
  inputRef,
}) => {

  return (
    <>
      <div className="terminal-container" onClick={handleNotFoundClick}>
        <div className="terminal">
          {output.map((item, index) => (
            <div key={index}>
              <span className="command">USER~~~{item.command}</span>
              <br />
              <span className="response">{item.response}</span>
              <br />
              <br />
            </div>
          ))}
        </div>
        <div className="input">
          USER~~~
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
