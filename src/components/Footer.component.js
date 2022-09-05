import React from 'react';

function Footer(props) {
    return(
    <div className="footer mt-3">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12 align-self-center">
                    <div className="text-center pt-2 mt-2">
                        <a className="btn btn-social-icon" href="https://www.facebook.com/profile.php?id=100070229032911"><i className="fa fa-facebook"></i></a>
                        <a className="btn btn-social-icon" href="mailto:tasteebite@yahoo.com"><i className="fa fa-envelope-o"></i></a>
                        <a className="btn btn-social-icon" href="tel:+6305520200"><i className="fa fa-phone"></i></a>
                        <a className="btn btn-social-icon" href="https://goo.gl/maps/Wbv4mqSTbU2YJaRTA"><i className="fa fa-map-marker"></i></a>
                        <a className="btn btn-social-icon" href="https://www.yelp.com/biz/tastee-bite-plano"><i class="fa fa-yelp" aria-hidden="false"></i></a>
                        <a className="btn btn-social-icon" href="mailto:tasteebite@yahoo.com"><i className="fa fa-paper-plane-o"></i></a>
                        <a className="btn btn-social-icon" href="mailto:tasteebite@yahoo.com"><i className="fa fa-tripadvisor"></i></a>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-auto mt-4">
                    <p>© Copyright 2022 | Admin</p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Footer;
