import React from "react";

const About = (props) => {
  let myStyle = {
    color: props.mode === "dark" ? "white" : "black",
    backgroundcolor: "dark" ? "black" : "white",
  };
  return (
    <div style={myStyle}>
      <h1 className="hui">What is Text-Utils</h1>
      <p className="hui2">
        Text-Utils is a text manipulation platform, designed to give you full
        control over your text. Whether you're looking to convert your text to
        uppercase, lowercase, or simply copy it with a click, we make it easy.
        Our user-friendly interface also includes a text-to-speech feature that
        allows you to hear your text spoken aloud, enhancing your experience
        further.
      </p>
      <h3 className="hui">Change Theme</h3>
      <p className="hui2">
        In addition, we've incorporated a Change Mode button, enabling you to
        switch between light and dark modes for a personalized and comfortable
        browsing experience. Whether you prefer a bright and energetic look or a
        sleek, darker aesthetic, the choice is yours. We aim to provide you with
        the flexibility and tools to manipulate text in a way that suits your
        needs best!
      </p>
      <h3 className="hui">Browser Compatible</h3>
      <p className="hui2">
        This software works in every browser available like Chrome, Brave,
        FireFox, Safari, opera. It helps you to manipulate your text from any
        sources like Facebook, PDF, Essays, blog, etc.
      </p>
    </div>
  );
};

export default About;
