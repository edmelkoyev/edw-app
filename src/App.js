import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <p>
            Feature f001 text line modified
          </p>
          <p>
            Feature f002 text line modified
          </p>
          <p>
            New feature ft301 for next Relese last minute changes
          </p>
	  <p>alx-br01 contribution</p>
        </header>
      </div>
    );
  }
}

export default App;
