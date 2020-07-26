import React from "react";
import logo from "../graphics/logo.png";
import symbol from "../graphics/logo_1.png";
import SocialMediaButtons from "./socialMediaButtons";

const Instructions = () => {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img src={symbol} className="App-symbol" alt="symbol" />
        <p className="App-slogan">Empower You to Feel Awesome</p>
        <SocialMediaButtons
          url="www.google.com"
          text="Check out what I just did!"
        />
      </div>
    </div>
  );
};

export default Instructions;