import React from 'react';
import logo from './logo.png';
import './App.css';
import Timer from './components/timer.js'
import SocialMediaButtons from "./components/socialMediaButtons";

function App() {
    return (
        <div className="App">
            <div className="App-header">
                <img src={logo} className="App-logo"/>
                <p className="App-slogan">Empower You to Feel Awesome</p>
            </div>
            <body className="App-body">
                <Timer></Timer>
                <a
                  className="App-link"
                  href="https://chloeting.com/"
                >
                  Try a Workout!
                </a>
            </body>
            <div className="App-footer">
                <SocialMediaButtons url="www.google.com" text="Check out what I just did!"/>
            </div>
        </div>
    );
}

export default App;
