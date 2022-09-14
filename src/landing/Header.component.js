import React from 'react';
import './Landing.component.css';
import Logo from '../logo';


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
