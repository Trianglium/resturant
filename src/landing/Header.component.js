import React from 'react';
import './Landing.component.css';
import Logo from '../logo';


export function FlexNav(props) {
    return(
        <nav className='sticky'>
            <ul className="nav-flex-row">
            <li className="nav-item">
                <a href="#about">About</a>
            </li>
            <li className="nav-item">
                <a href="https://www.yelp.com/menu/tastee-bite-plano">Menu</a>
            </li>
            <li className="nav-item">
                <a href="https://www.yelp.com/menu/tastee-bite-plano/party-menu"> Party Menu</a>
            </li>
            <li className="nav-item">
                <a href="#contact">Contact</a>
            </li>
            </ul>
        </nav>
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
