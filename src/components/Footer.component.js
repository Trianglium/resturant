import React from 'react';

function InfoFooter(props) {
    return(
        <div className="container">
        <div className="row-flex" id="contact">
        <div className="flex-column-form">
            <h3>
            Contact
            </h3>
        <form className="media-centered">
        <p>
                <a href="tel:16305520200"><i className="fa fa-phone"></i> 630 552 0200</a>
                </p>
                <p>
                <a href="mailto:tasteebite@yahoo.com"><i className="fa fa-envelope-o"></i> tasteebite@yahoo.com</a>
                </p>
            <div className="form-group">
                <input type="text" className="form-control" id="exampleInputName1" aria-describedby="nameHelp" placeholder="Enter your name"/>
            </div>
            <div className="form-group">
                <input type="text" className="form-control" id="exampleInputphoneNumber1" placeholder="Enter your phone number"/>
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


export default InfoFooter;