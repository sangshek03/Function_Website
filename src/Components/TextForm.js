import React, { useState } from "react";
import "./TextForm.css";

function TextForm() {
  const clickHandlerUpper = () => {
    let upcase = text.toUpperCase();

    settext(upcase);
  };

  const clickHandlerLower = () => {
    let upcase = text.toLowerCase();

    settext(upcase);
  };

  const clearHandler = () => {
    // console.log("sdds");
    settext("Write your Text Here");
  };

  const handleonchange = (event) => {
    settext(event.target.value);
  };

  const [text, settext] = useState("Write Your Text Here");

  return (
    <div>
      <h1>Enter Text Here</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="myBox"
          value={text}
          onChange={handleonchange}
          rows="8"
        ></textarea>
      </div>
      <div className="buttons">
        <button className="btn btn-primary mx-3" onClick={clickHandlerUpper}>
        Click-here-to-convert-text-Upper case 
        </button>
        <button className="btn btn-primary mx-3" onClick={clickHandlerLower}>
          Click-here-to-convert-text-LowerCase
        </button>
        <button className="btn btn-primary mx-3" onClick={clearHandler}>
          Clear
        </button>
      </div>
      <div className="container my-3">
        <h2>Summary Of Your Text</h2>
        <p>Number of Words is -- {text.split(" ").length}</p>
        <p>Total Number of Characters is -- {text.length}</p>
        <p>Average Person Read in -- {0.008 * text.split(" ").length}minutes</p>
        <h3>Preview</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default TextForm;
