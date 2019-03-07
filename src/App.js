import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './App.css';
import NavBar from './NavBar/NavBar';
import Register from './Auth/Register';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Register />
      </div>
    );
  }
}

export default withRouter(App);
