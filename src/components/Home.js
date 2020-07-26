import React from "react";
import logo from "../graphics/logo.png";
import symbol from "../graphics/logo_1.png";
import Timer from "./timer.js";
import SocialMediaButtons from "./socialMediaButtons";

const Home = () => {
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
      <body className="App-body">
        <Timer classname="App-timer"></Timer>

        <div className="Button-group">
          <button className="Workout-button">
            <a className="App-link" href="https://chloeting.com/">
              Try a Workout!
            </a>
          </button>
          <button className="Yoga-button">
            <a className="App-link" href="https://www.headspace.com/">
              Try some Meditation!
            </a>
          </button>
        </div>
        <div className="Button-group">
          <button className="Instructions">
            <a className="App-link" href="">
              {" "}
              {/*include link to instructions here*/}
              PPALLI Guide
            </a>
          </button>
        </div>
      </body>
    </div>
  );
};

export default Home;
