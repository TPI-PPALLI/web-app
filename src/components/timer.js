import React, { Component } from 'react'

export default class Timer extends Component {
    // should connect to the chrome extension timer somehow
    render() {
        return (
            <div>
                <h1 style={{color:'#3241e4', fontSize:40}}>Time for a break!</h1>
                <div style={{color:'#F05E50', fontSize:160}}>
                    <time className="Timer-num">0:30:59</time>
                </div>
                <br />
            </div>
        );
    }
}
