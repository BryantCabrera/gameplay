import React, { Component } from 'react';
import { withRouter, NavLink } from 'react-router-dom';
// import logo from '../../static/imgs/logo.svg';
import './Header.css'

class Header extends Component {
    render() {
        return (
            <header className="header">
                <NavLink exact to="/" className="header__logo--link">
                    <img className="header__logo" src="https://i.imgur.com/Y40XSUQ.png" alt="Game Play Logo" title="Game Play Logo"></img></NavLink>
                <div className="header__bryant">
                    created by: Bryant Cabrera
                </div>
            </header>
        )
    }
}

export default withRouter(Header);