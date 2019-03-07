import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <img src={logo} alt="Game Play Logo" title="Game Play Logo"></img>
          
      </div>
    );
  }
}

export default withRouter(App);
