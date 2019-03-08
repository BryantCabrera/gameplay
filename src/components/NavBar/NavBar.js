import React, { Component } from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import logo from '../../logo.svg';

class NavBar extends Component {
    render () {
        return (
            <div className="navbar">
                {/* <img src={logo} alt="Game Play Logo" title="Game Play Logo"></img> */}
                <nav className="navbar__links">
                    <NavLink exact to="/">Home</NavLink>
                </nav>
            </div>
        )
    }
}

export default withRouter(NavBar);