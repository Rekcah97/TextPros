import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpCase = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Text Uppercased", "success");
  };

  const handleLowCase = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Text Lowercased", "success");
  };
  const handleClear = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared", "success");
  };
  const handleSenUpCase = () => {
    let firstLetter = text.charAt(0).toUpperCase();
    let remainingLetter = text.slice(1, text.length);
    let newText = firstLetter.concat(remainingLetter);
    setText(newText);
    props.showAlert("Text Sentence Uppercased", "success");
  };
  const handlerev = () => {
    let newText = text.split("").reverse().join("");
    // split is need here to make a array of every single letter reverse() reverses the array and join make the array into string
    setText(newText);
    props.showAlert("Text Reversed", "success");
  };
  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
    props.showAlert("Text to speech activated", "success");
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Space Removed", "success");
  };

  const wordCounter = () => {
    let newText = text.split(/[ ]+/).join(" ");
    let newText2 = newText.split(" ").length;

    return newText2;
  };

  const [text, setText] = useState("");

  return (
    <>
      <div className="container" style={{ color: props.mode === "light" ? "black" : "white" }}>
        {/* heading */}
        <h1>{props.heading}</h1>

        <div className="mb-3">
          <textarea className="form-control" id="myBox" rows="10" style={{ backgroundColor: props.mode === "light" ? "white" : "#31363F", color: props.mode === "light" ? "black" : "white" }} value={text} onChange={handleOnChange} />
        </div>

        {/* uppercase button */}
        <button className="btn btn-primary mx-1" onClick={handleUpCase}>
          Convert to UpperCase
        </button>

        {/* lower case button */}
        <button className="btn btn-primary mx-1" onClick={handleLowCase}>
          Convert to LowerCase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleClear}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleSenUpCase}>
          Setence Uppercase
        </button>
        <button className="btn btn-primary mx-1" onClick={speak}>
          Read text
        </button>
        <button className="btn btn-primary mx-1" onClick={handlerev}>
          Reverse text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpace}>
          Clear Extra Space
        </button>
      </div>
      <div className="container my-3" style={{ color: props.mode === "light" ? "black" : "white" }}>
        <h2>Your text Summary</h2>
        <p>
          {text.length > 0 ? wordCounter() : "0"} words, {text.length} characters
        </p>
        <p>{text.split(" ").length * 0.008} minutes to read this</p>

        <h2>Preview</h2>
        <p>{text.length > 0 ? text.split(/[ ]+/).join(" ") : "Enter the text above to preview it"}</p>
        <p>{console.log}</p>
      </div>
    </>
  );
}
