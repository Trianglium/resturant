import React from 'react';

function ContactSection(props) {
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

export default ContactSection;