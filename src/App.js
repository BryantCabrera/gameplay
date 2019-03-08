import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Register from './components/Auth/Register';
import Users from './components/Users/Users';
import Games from './components/Games/Games';
import Chat from './components/Chat/Chat';
import Footer from './components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Register />
        <Switch>
          <Route exact path="/login" component={() =>  <Users history={this.props.history} /> } />
          <Route exact path="/games" component={() =>  <Games history={this.props.history} /> } />
        </Switch>
        <Chat />
        <Footer />
      </div>
    )
  }
}

export default withRouter(App);
