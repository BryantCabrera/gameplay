import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import './App.css';
import logo from './logo.svg';
import NavBar from './components/NavBar/NavBar';
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';
import Users from './components/Users/Users';
import UserProfile from './components/Users/UserProfile';
import Games from './components/Games/Games';
import Chat from './components/Chat/Chat';
import Footer from './components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <img className="home__logo" src={logo} alt="Game Play Logo" title="Game Play Logo"></img>
        <NavBar />
        <Register />
        <Switch>
          <Route exact path="/register" component={() =>  <Register history={this.props.history} /> } />
          <Route exact path="/login" component={() =>  <Login history={this.props.history} /> } />
          <Route exact path="/games" component={() =>  <Games history={this.props.history} /> } />
          <Route exact path="/users" component={() =>  <Users history={this.props.history} /> } />
          <Route exact path="/users/id" component={() =>  <UserProfile history={this.props.history} /> } />
        </Switch>
        <Chat />
        <Footer />
      </div>
    )
  }
}

export default withRouter(App);
