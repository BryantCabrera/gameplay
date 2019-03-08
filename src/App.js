import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Register from './components/Auth/Register';
import Users from './components/Users/Users';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Users />
        <Register />
        <Switch>
          {/* <Route exact path="/Login"></Route> */}
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
