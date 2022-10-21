import React from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';



function ContactSection(props) {
    return(
        <div className="flex-column-form">
            <h3 className='text-center about-h'>
            Contact
            </h3>
            <div className="flex-column-form">
            <div class='card-borderless mb-4'>
                <div className='card-body-borderless'>
                <CopyToClipboard text="6305520200">
                    <span className='float-end'><i class="fa fa-clone fa-lg" aria-hidden="true"></i></span>
                </CopyToClipboard>
                <span className="lh-2 address-lines ws-no-wrap">
                    <strong className='contact-method'><a href="tel:16305520200"><span className="fa fa-phone"></span></a>&nbsp;&nbsp;630 552 0200</strong>
                </span>
                </div>
                <div className='card-body-borderless'>
                <CopyToClipboard text="tasteebite@yahoo.com">
                    <span className='float-end'><i class="fa fa-clone fa-lg" aria-hidden="true"></i></span>
                </CopyToClipboard>
                <span className="lh-2 address-lines ws-no-wrap">
                    <strong className='contact-method'>
                    <a href="mailto:tasteebite@yahoo.com"><span className="fa fa-envelope-o"></span></a>&nbsp;&nbsp;tasteebite@yahoo.com</strong>
                </span>
                </div>
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

export default ContactSection;