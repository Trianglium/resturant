import React from 'react'
import '../landing/Landing.component.css';

import Landing from '../landing/Landing.component';
import Menu from '../menu/Menu.component';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export const FlexNav = () => {
    return(
            <nav>
                <ul className="nav-flex-row">
                    <li className="nav-item">
                        <Link to="/" hash="#about">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/menu">Menu</Link>
                    </li>
                    <li className="nav-item">
                    <a href="#party-menu">Party Menu</a>
                    </li>
                    <li className="nav-item">
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </nav>
    )
}