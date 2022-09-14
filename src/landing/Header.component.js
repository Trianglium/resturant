import React from 'react';
import './Landing.component.css';
import Logo from '../logo';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

export function FlexNav(props) {
    return(
        <Router>
            <div>
            <nav className='sticky'>
                <ul className="nav-flex-row">
                <li className="nav-item">
                    <a href="#about">About</a>
                </li>
                <li className="nav-item">
                    <Link to="/menu">Menu</Link>
                </li>
                <li className="nav-item">
                <a href="#">Party Menu</a>
                </li>
                <li className="nav-item">
                    <a href="#contact">Contact</a>
                </li>
                </ul>
            </nav>

            <Switch>
            <Route path="/menu">
            <Menu />
            </Route>
            </Switch>
            </div>
        </Router>
    )
}

export function ImageHeader(props) {
    return(
        <section className="section-intro">
        <header className='section-intro-txt'>
          <Logo />
        </header>
        <div className="link-to-book-wrapper">
          <a className="btn btn-outline-light" role="button" href="tel:+16305520200"><strong>Order now</strong></a>
        </div>
      </section>
    )
}
