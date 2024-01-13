import React from "react";
import "../pages/Pages.css"

const NotFound = ({input, output, handleNotFoundKey, handleNotFoundChange, handleNotFoundClick, inputRef}) => {
  return (
    <>
      <div>NotFound</div>
      <div className="terminal-container"
      onClick={handleNotFoundClick}>
        <input 
        ref={inputRef}
        type="text"
        value={input}
        onChange={handleNotFoundChange}
        onKeyDown={handleNotFoundKey}
        />
        <div className="terminal">
          {output}
        </div>
      </div>
    </>
  );
};

export default NotFound;
