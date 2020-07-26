import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from "./components/Home";
import Instructions from "./components/Instructions";
import './App.css';

function App() {
    return (
        <div className="App">
            <Router basename={window.location.pathname || ''}>
                <Route exact path='/' component={Home} />
                <Route exact path='/instructions' component={Instructions} />
            </Router>
        </div>
    );
}

export default App;
