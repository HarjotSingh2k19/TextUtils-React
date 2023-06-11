import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TextForm(props) {

  const handleUpClick = () => {
    console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase!", "success");
  };

  const handleLowClick = () => {
    console.log("Lowercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase!", "success");
  };

  const handleClearClick = () => {
    console.log("Text is cleared");
    let newText = '';
    setText(newText);
    props.showAlert("Your text has been cleared!", "success");
  };
  
  const handleCaptialize = () => {
    console.log("Text is capitalized");
    const lowerCase = text.toLowerCase();
    const newText = lowerCase[0].toUpperCase() + lowerCase.slice(1);
    setText(newText);
    props.showAlert("Your text has been capitalized!", "success");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);  // regex
    setText(newText.join(" "));
    props.showAlert("Extra spaces has been removed!", "success");
  };


  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const calculateWords = ()=> {
    let numberOfWords = 0;
    let words = text.split(" ");
    let length = words.length;

    numberOfWords = words[length - 1] === "" || words[length - 1] === " " ? length-1 : length;
    console.log(words);
    return numberOfWords;
  }

  const [text, setText] = useState("");
  // text = "new text" // wrong way to change state
  // setText("new text"); // correct way to change state

  return (
    <>
    <div className= "container" style = {{color: props.mode === 'dark'? 'white' : '#002b3d'}}>
      <h1 >{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          id="myBox"
          rows="8"
          style = {{backgroundColor: props.mode === 'dark'? 'grey' : 'white', color: props.mode === 'dark'? 'white' : '#002b3d'}}
        ></textarea>
      </div>

      <button className="btn btn-primary mx-2" onClick={handleUpClick}>
        Convert to Uppercase
      </button>
      <button className="btn btn-primary mx-2" onClick={handleLowClick}>
        Convert to Lowercase
      </button>
      <button className="btn btn-primary mx-2" onClick={handleClearClick}>
        Clear Text
      </button>
      <button className="btn btn-primary mx-2" onClick={handleCaptialize}>
        Capitalize Text
      </button>
      <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>
        Remove Extra Spaces
      </button>
    </div>

    <div className="container my-3"  style = {{color: props.mode === 'dark'? 'white' : '#002b3d'}}>
      <h2>Your text summary</h2>
      <p>{calculateWords()} words, {text.length} characters</p>
      <p>{0.008 * calculateWords()} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length > 0 ? text : "Enter something in the textbox to preview it here"}</p>
    </div>
    </>
  );
}
