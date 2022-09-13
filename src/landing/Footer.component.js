import React from 'react';
// eslint-disable-next-line
import ReactDOM from 'react-dom';
// eslint-disable-next-line
import {CopyToClipboard} from 'react-copy-to-clipboard';





export function ContactSection(props) {
    return(
        <div className="flex-column-form">
            <h3 className='text-center'>
            Contact
            </h3>
            <div className="flex-column-form">
            <div class='card-borderless mb-4'>
                <span className="lh-2 address-lines ws-no-wrap">
                    <strong className=''><a href="tel:16305520200"><i className="fa fa-phone"></i></a>&nbsp;&nbsp;630 552 0200 <br />
                    <a href="mailto:tasteebite@yahoo.com"><i className="fa fa-envelope-o"></i></a>&nbsp;&nbsp;tasteebite@yahoo.com</strong>
                </span>
            </div>

            <div class="card-borderless">
            <div className="form-grou mb-3">
                <input type="text" className="form-control" id="feedbackName" aria-describedby="name field" placeholder="Full Name"/>
            </div>
            <div className="form-group mb-3">
                <input type="text" className="form-control" id="feedbackEmail" aria-describedby="phone number field" placeholder="Email Address"/>
            </div>
            <div className="form-group mb-3">
                <textarea className="form-control" id="feedbackMessage" rows="4" placeholder="Message"></textarea>
            </div>
            
            <div className="form-group mb-3 text-center">
                <button type="submit" className="btn btn-outline-success mx-3"><strong>Send</strong></button>
            </div>
            </div>
            </div>
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
            <table id="hours-of-operation" class="table table-borderless ws-no-wrap">
                <tbody>
                    <tr>
                        <td>Monday</td>
                        <td>10:30 AM</td>
                        <td>&#8211;</td>
                        <td>9:00 PM</td>
                    </tr>
                    <tr>
                        <td>Tuesday</td>
                        <td>10:30 AM</td>
                        <td>&#8211;</td>
                        <td>9:00 PM</td>
                    </tr>
                    <tr>
                        <td>Wednesday</td>
                        <td>10:30 AM</td>
                        <td>&#8211;</td>
                        <td>9:00 PM</td>
                    </tr>
                    <tr>
                        <td>Thursday</td>
                        <td>10:30 AM</td>
                        <td>&#8211;</td>
                        <td>9:00 PM</td>
                    </tr>
                    <tr>
                        <td>Friday</td>
                        <td>10:00 AM</td>
                        <td>&#8211;</td>
                        <td>10:00 PM</td>
                    </tr>
                    <tr>
                        <td>Saturday</td>
                        <td>10:00 AM</td>
                        <td>&#8211;</td>
                        <td>10:00 PM</td>
                    </tr>
                    <tr>
                        <td>Sunday</td>
                        <td>11:00 AM</td>
                        <td>&#8211;</td>
                        <td> 8:30 PM</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div className="contact-adress">
            <h3 className='text-center'>
            Location
            </h3>
            <div className='card-borderless my-1 px-4'>
                <div className='card-body-borderless p-4'>
                    <address className="lh-1 address-lines">
                        <strong className=''>Tastee Bite</strong> <br />
                        7000 Burroughs Ave. <br />
                        Plano, Illinois. <br />
                        60545-7100
                    </address>
                </div>
                <iframe id="map" title="MapGetDirections" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d47697.561023106675!2d-88.566049!3d41.653634!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf310a31d074d580b!2sTastee%20Bite!5e0!3m2!1sen!2sus!4v1662395006091!5m2!1sen!2sus" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            
            
            
            
        </div>
        </div>
        </div>
    )
}


export default InfoFooter;