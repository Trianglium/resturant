import React from 'react'
import '../landing/Landing.component.css';
import {NavLink} from "react-router-dom";

export const FlexNav = () => {
    return(
            <nav>
                <ul className="nav-flex-row">
                    <li className="nav-item">
                        <a href="#about-section">About</a>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/menu">Menu</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink to="/party-menu">Party Menu</NavLink>
                    </li>
                    <li className="nav-item">
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </nav>
    )
}