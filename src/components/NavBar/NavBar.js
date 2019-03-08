import React, { Component } from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import logo from '../../logo.svg';
import './NavBar.css';


class NavBar extends Component {
    render () {
        return (
            <div className="nav">
                <button id="nav__button" className="nav__button">+</button>
                <nav className="nav__navbar">
                    {/* <img src={logo} alt="Game Play Logo" title="Game Play Logo"></img> */}
                    <ul className="nav__navbar__links">
                        <li><NavLink exact to="/">Home</NavLink></li>

                        {this.props.loggedUser ? <li><NavLink exact to="/users/:id">My Profile</NavLink></li> : <li><NavLink exact to="/register">Register</NavLink></li>}

                        {this.props.loggedUser ? <li><NavLink exact to="/">Logout</NavLink></li> : <li><NavLink exact to="/login">Login</NavLink></li>}
                        
                        <li><NavLink exact to="/games">Games</NavLink></li>

                        <li><NavLink exact to="/users">Users</NavLink></li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default withRouter(NavBar);