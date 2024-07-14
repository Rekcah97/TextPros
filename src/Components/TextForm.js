import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpCase = () => {
    console.log("upper case");
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLowCase = () => {
    console.log("lower case");
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleOnChange = (event) => {
    console.log("on change");
    setText(event.target.value);
  };

  const [text, setText] = useState("Enter your text here");

  return (
    <div>
      {/* heading */}
      <h1>{props.heading}</h1>

      <div className="mb-3">
        <textarea className="form-control" id="myBox" rows="10" value={text} onChange={handleOnChange} />
      </div>

      {/* uppercase button */}
      <button className="btn btn-primary " onClick={handleUpCase}>
        Convert to UpperCase
      </button>

      {/* lower case button */}
      <button className="btn btn-primary mx-3" onClick={handleLowCase}>
        Convert to LowerCase
      </button>
    </div>
  );
}
