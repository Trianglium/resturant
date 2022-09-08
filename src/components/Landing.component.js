import React from 'react';
import './Landing.component.css';
import {itemSlides} from '../shared/foodSlides';

function FlexNav(props) {
    return(
        <nav>
            <ul className="nav-flex-row">
            <li className="nav-item">
                <a href="#about">About</a>
            </li>
            <li className="nav-item">
                <a href="#menu">Menu</a>
            </li>
            <li className="nav-item">
                <a href="#partymenu"> Party Menu</a>
            </li>
            <li className="nav-item">
                <a href="#contact">Contact</a>
            </li>
            </ul>
        </nav>
    )
}

function ImageHeader(props) {
    return(
        <section className="section-intro">
        <header>
          <h1>Tastee Bite</h1>
        </header>
        <div className="link-to-book-wrapper">
          <a className="link-to-book" href="#reservations">Menu</a>
        </div>
      </section>
    )
}



function FoodCarousel(props) {
    return(
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
            <div className="carousel-item active">
                <img src="../../public/assets/images/tacos-dinner-slide.jpg" className="d-block w-100" alt="taco dinner"/>
            </div>
            <div className="carousel-item">
                <img src="../../public/assets/images/tacos-plate-slide.jpg" className="d-block w-100" alt="taco plate of three"/>
            </div>
            <div className="carousel-item">
                <img src="../../public/assets/images/tacos-corn-slide.jpg" className="d-block w-100" alt="corn tacos"/>
            </div>
            <div className="carousel-item">
                <img src="../../public/assets/images/chips-salsa-slide.jpg" className="d-block w-100" alt="chips and salsa"/>
            </div>
            <div className="carousel-item">
                <img src="../../public/assets/images/burgers-slide.jpg" className="d-block w-100" alt="burger"/>
            </div>
            <div className="carousel-item">
                <img src="../../public/assets/images/salad-slide.jpg" className="d-block w-100" alt="salad"/>
            </div>
            <div className="carousel-item">
                <img src="../../public/assets/images/chicken-slide.jpg" className="d-block w-100" alt="chicken"/>
            </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
            </a>
      </div>
    )
}

function AboutSection(props) {
    return(
        <section className="about-section" id="about">
        <article>
          <h3>
              The best tacos in town
          </h3>
          <p>
            We take pride in being the go-to taco place while also offering other high quality food options for low prices.
          </p>
        </article>
      </section>
    )
}


function InfoFooter(props) {
    return(
        <div className="container">
        <div className="row-flex" id="contact">
        <div className="flex-column-form">
            <h3>
            Contact
            </h3>
        <form className="media-centered">
            <div className="form-group">
                <p>
                <a href="tel:16305520200"><i className="fa fa-phone"></i></a> 
                630 552 0200
                </p>
                <p>
                <a href="mailto:tasteebite@yahoo.com"><i className="fa fa-envelope-o"></i></a> 
                tasteebite@yahoo.com
                </p>
                <input type="name" className="form-control" id="exampleInputName1" aria-describedby="nameHelp" placeholder="Enter your name"/>
            </div>
            <div className="form-group">
                <input type="number" className="form-control" id="exampleInputphoneNumber1" placeholder="Enter your phone number"/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        </div>
        <div className="opening-time">
            <h3>
            Hours
            </h3>
            <p>
            <span>Monday:  10:00 AM — 9:00 PM</span>
            <span>Tuesday:  10:00 AM — 9:00 PM</span>
            <span>Wednesday:  10:00 AM — 9:00 PM</span>
            <span>Thursday:  10:00 AM — 9:00 PM</span>
            <span>Friday:  10:00 AM — 10:00 PM</span>
            <span>Saturday:  10:00 AM — 10:00 PM</span>
            <span>Sunday:  11:00 AM — 9:00 PM</span>
            </p>
        </div>
        <div className="contact-adress">
            <h3>
            Location
            </h3>
            <p>
            <span>7000 Burroughs Ave.</span>
            <span>Plano, Illinois. 60545</span>
            <iframe id="map" title="MapGetDirections" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d47697.561023106675!2d-88.566049!3d41.653634!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf310a31d074d580b!2sTastee%20Bite!5e0!3m2!1sen!2sus!4v1662395006091!5m2!1sen!2sus" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </p>
        </div>
        </div>
        </div>
    )
}

function Landing(props) {
    return(
        <div className="fluid-container">
            <FlexNav />
            <ImageHeader />
            <AboutSection />
            <FoodCarousel />
            <InfoFooter />
      </div>
    )

};

export default Landing;