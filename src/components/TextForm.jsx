import React, { useState } from "react";
export default function TextForm(props) {
  const [text, setText] = useState("");
  const handleupClick = () => {
    // console.log("Uppercase is clicked" + text);
    // let newText = text.toUpperCase();
    setText(text.toUpperCase());
  };
  const handleonChange = (event) => {
    // console.log("On Change");
    setText(event.target.value);
  };
  const handledownClick = () => {
    // console.log("LC");
    // let newText1 = text.toLowerCase();
    setText(text.toLowerCase());
  };
  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  };
  const handleonClear = () => {
    setText("");
  };
  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
  };
  if (text)
    return (
      <>
        <div
          className="container"
          style={{
            color: props.mode === "dark" ? "white" : "#152f55",
          }}
        >
          <h1>{props.heading}</h1>
          <div className="mb-3">
            <textarea
              className="form-control"
              value={text}
              id="myBox"
              rows="6"
              onChange={handleonChange}
              style={{
                backgroundColor:
                  props.mode === "dark" ? "transparent" : "white",
                color: props.mode === "dark" ? "white" : "black",
              }}
            ></textarea>
          </div>
          <div>
            <button
              disabled={text.length === 0}
              className="btn btn-primary"
              onClick={handleupClick}
            >
              Convert to Uppercase
            </button>
            <button
              disabled={text.length === 0}
              className="btn btn-primary mx-2"
              onClick={handledownClick}
            >
              Convert to Lowercase
            </button>
            <button
              disabled={text.length === 0}
              className="btn btn-primary"
              onClick={handleonClear}
            >
              Clear Text
            </button>
            <button
              disabled={text.length === 0}
              onClick={speak}
              className="btn btn-primary mx-2 my-2"
            >
              Speak
            </button>
            <button
              disabled={text.length === 0}
              onClick={handleCopy}
              className="btn btn-primary"
            >
              Copy Text
            </button>
          </div>
        </div>
        <div
          className="container my-3"
          style={{
            color: props.mode === "dark" ? "white" : "black",
          }}
        >
          <h1>Your text summary</h1>
          <p>
            {
              text.split(" ").filter((element) => {
                return element.length !== 0;
              }).length
            }{" "}
            words and {text.length} characters
          </p>
          <p>
            {0.008 *
              text.split(" ").filter((element) => {
                return element.length !== 0;
              }).length}{" "}
            Minutes Read{" "}
          </p>
          <h1 my-6>Preview</h1>
          <p>{text}</p>
        </div>
      </>
    );
  else
    return (
      <>
        <div
          className="container"
          style={{
            color: props.mode === "dark" ? "white" : "black",
          }}
        >
          <h1>{props.heading}</h1>
          <div className="mb-3">
            <textarea
              className="form-control"
              value={text}
              id="myBox"
              rows="6"
              onChange={handleonChange}
              style={{
                backgroundColor:
                  props.mode === "dark" ? "transparent" : "white",
                color: props.mode === "dark" ? "white" : "black",
              }}
            ></textarea>
          </div>
          <div className="buttons">
            <button
              disabled={text.length === 0}
              className="btn btn-primary mx-2 my-2"
              onClick={handleupClick}
            >
              Convert to Uppercase
            </button>
            <button
              disabled={text.length === 0}
              className="btn btn-primary mx-2 my-2"
              onClick={handledownClick}
            >
              Convert to Lowercase
            </button>
            <button
              disabled={text.length === 0}
              className="btn btn-primary mx-2 my-2"
            >
              Clear Text
            </button>
            <button
              disabled={text.length === 0}
              onClick={speak}
              className="btn btn-primary mx-2 my-2"
            >
              Speak
            </button>
            <button
              disabled={text.length === 0}
              onClick={handleCopy}
              className="btn btn-primary mx-2 my-2"
            >
              Copy Text
            </button>
          </div>
        </div>
        <div
          className="container my-3"
          style={{
            color: props.mode === "dark" ? "white" : "black",
          }}
        >
          <h1>Your text summary</h1>
          <p>
            {
              text.split(" ").filter((element) => {
                return element.length !== 0;
              }).length
            }{" "}
            words and {text.length} characters
          </p>
          <p>
            {0.008 *
              text.split(" ").filter((element) => {
                return element.length !== 0;
              }).length}{" "}
            Minutes Read{" "}
          </p>
          <h1 my-6>Preview</h1>
        </div>
      </>
    );
}
