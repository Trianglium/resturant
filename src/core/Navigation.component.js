import React, { useState, Fragment } from 'react'
import '../landing/Landing.component.css';
import {Link } from "react-router-dom";

export const FlexNav = () => {
    const [colorChange, setColorchange] = useState(false);

    const changeNavbarColor = () =>{
        if(window.scrollY >= 80){
          setColorchange(true);
          console.log(colorChange);
          console.log('True',window.scrollY);
        }
        else{
          setColorchange(false);
          console.log(colorChange);
          console.log('False', window.scrollY);
        }
    };
    window.addEventListener('scroll', changeNavbarColor);
    return(
        <Fragment>
            <nav className={colorChange ? 'navbar colorChange' : 'navbar'}>
                <ul className="nav-flex-row">
                    <li className="nav-item">
                        <Link to="/">About</Link>
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
        </Fragment>
    )
}