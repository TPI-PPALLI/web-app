import React, {Component} from 'react';
import { Redirect } from "react-router-dom";
import logo from './graphics/logo.png';
import symbol from './graphics/logo_1.png';
import './App.css';
import Timer from './components/timer.js'
import SocialMediaButtons from "./components/socialMediaButtons";



function App() {
    return (
        <div className="App">
            <div className="App-header">
                <img src={logo} className="App-logo"/>
                <img src={symbol} className="App-symbol"/>
                <p className="App-slogan">Empower You to Feel Awesome</p>
                <SocialMediaButtons url="www.google.com" text="Check out what I just did!"/>
            </div>
            <body className="App-body">
            <Timer classname="App-timer"></Timer>

            <div className="Button-group">
                <button className="Workout-button" >
                    <a className="App-link" href="https://chloeting.com/">
                        Try a Workout!
                    </a>
                </button>
                <button className="Yoga-button" >
                    <a className="App-link" href="https://www.headspace.com/">
                        Try some Meditation!
                    </a>
                </button>
            </div>
            </body>
        </div>
    );

}

export default App;
