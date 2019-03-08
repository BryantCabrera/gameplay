import React, { Component } from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import logo from '../../logo.svg';


class NavBar extends Component {
    render () {
        return (
            <nav className="navbar">
                {/* <img src={logo} alt="Game Play Logo" title="Game Play Logo"></img> */}
                <ul className="navbar__links">
                    <li><NavLink exact to="/">Home</NavLink></li>
                </ul>
                
            </nav>
        )
    }
}

export default withRouter(NavBar);