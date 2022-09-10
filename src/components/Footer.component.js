import React from 'react';

export function ContactSection(props) {
    return(
        <div className="flex-column-form">
            <h3 className='text-center'>
            Contact
            </h3>
        <form className="media-centered">
        <ul className="list-group list-group-flush">
            <li className="list-group-item">
            <a href="tel:16305520200"><i className="fa fa-phone"></i></a> 630 552 0200
            </li>
            <li className="list-group-item">
            <a href="mailto:tasteebite@yahoo.com"><i className="fa fa-envelope-o"></i></a> tasteebite@yahoo.com
            </li>
        </ul>
            
            <div className="form-group mb-3">
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3">Enter message</textarea>
            </div>
            <div className="form-grou mb-3">
                <input type="text" className="form-control" id="exampleInputName1" aria-describedby="nameHelp" placeholder="Enter your name"/>
            </div>
            <div className="form-group mb-3">
                <input type="text" className="form-control" id="exampleInputphoneNumber1" placeholder="Enter your phone number"/>
            </div>
            <div className="form-group mb-3 text-center">
                <button type="submit" className="btn btn-outline-success mx-3">Submit</button>
                <button type="button" className="btn btn-outline-secondary mx-3">Cancel</button>
            </div>
        </form>
        </div>

    );
}

function InfoFooter(props) {
    return(
        <div className="container">
        <div className="row-flex" id="contact">
            <ContactSection />
        <div className="opening-time">
            <h3 className='text-center'>
            Hours
            </h3>
            <div  className="col"></div>
            <div  className="col"></div>
            <table id="hours-of-operation" class="table table-borderless">
                <tbody>
                    <tr>
                        <td>Monday</td>
                        <td>10:30 AM</td>
                        <td>to</td>
                        <td>9:00 PM</td>
                    </tr>
                    <tr>
                        <td>Tuesday</td>
                        <td>10:30 AM</td>
                        <td>to</td>
                        <td>9:00 PM</td>
                    </tr>
                    <tr>
                        <td>Wednesday</td>
                        <td>10:30 AM</td>
                        <td>to</td>
                        <td>9:00 PM</td>
                    </tr>
                    <tr>
                        <td>Thursday</td>
                        <td>10:30 AM</td>
                        <td>to</td>
                        <td>9:00 PM</td>
                    </tr>
                    <tr>
                        <td>Friday</td>
                        <td>10:00 AM</td>
                        <td>to</td>
                        <td>10:00 PM</td>
                    </tr>
                    <tr>
                        <td>Saturday</td>
                        <td>10:00 AM</td>
                        <td>to</td>
                        <td>10:00 PM</td>
                    </tr>
                    <tr>
                        <td>Sunday</td>
                        <td>11:00 AM</td>
                        <td>to</td>
                        <td> 8:30 PM</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div className="contact-adress">
            <h3 className='text-center'>
            Location
            </h3>
            <div className='card my-3'>
                <div className='card-body'>
                    <address>
                        <strong>Tastee Bite</strong> <br />
                        7000 Burroughs Ave. <br />
                        Plano, Illinois. 60545
                    </address>
                </div>
            </div>
            
            <iframe id="map" title="MapGetDirections" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d47697.561023106675!2d-88.566049!3d41.653634!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf310a31d074d580b!2sTastee%20Bite!5e0!3m2!1sen!2sus!4v1662395006091!5m2!1sen!2sus" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            
        </div>
        </div>
        </div>
    )
}


export default InfoFooter;