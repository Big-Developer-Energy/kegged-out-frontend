import React from "react";
import "../pages/Pages.css"

const NotFound = ({input, handleNotFoundKey, handleNotFoundChange}) => {
  return (
    <>
      <div>NotFound</div>
      <div className="terminal-container">
        <input type="text"
        value={input}
        onChange={handleNotFoundChange}
        onKeyDown={handleNotFoundKey}/>
        <div className="terminal">
        </div>
      </div>
    </>
  );
};

export default NotFound;
