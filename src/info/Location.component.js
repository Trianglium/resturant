import React from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';


function LocationSection(props) {
    return(
        <div className="contact-adress">
            <h3 className='text-center about-h'>
            Location
            </h3>
            <div className='card-borderless my-1 px-4'>
                <div className='card-body-borderless p-4'>
                <CopyToClipboard text="7000 Burroughs Ave. Plano, IL. 60545">
                    <span className='float-end'><i class="fa fa-clone fa-lg" aria-hidden="true"></i></span>
                </CopyToClipboard>
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
    );
}

export default LocationSection;