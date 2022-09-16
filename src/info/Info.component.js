import React from 'react';
// eslint-disable-next-line
import ReactDOM from 'react-dom';
// eslint-disable-next-line
import {CopyToClipboard} from 'react-copy-to-clipboard';

import ContactSection from './Contact.component';
import HoursSection from './Hours.component';
import LocationSection from './Location.component';

function InfoSection(props) {
    return(
        <div className="container">
            <div className="row-flex" id="contact">
                <ContactSection />
                <HoursSection />
                <LocationSection />
        </div>
        </div>
    )
}


export default InfoSection;