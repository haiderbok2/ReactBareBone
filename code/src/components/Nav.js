import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';

class Nav extends Component {

    render () {
        return (
            <nav>
                <div class="nav-wrapper">
                <a href="#" class="brand-logo">Testing</a>
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                    <li><NavLink to="/">Signin</NavLink></li>
                    <li><NavLink to="/home">Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                </ul>
                </div>

            </nav>
        );
    }

}


export default Nav;