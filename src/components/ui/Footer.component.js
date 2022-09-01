import React from 'react';
// eslint-disable-next-line
import { Link } from 'react-router-dom';

function Footer(props) {
    return(
    <div className="footer">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12 col-sm-8 align-self-center">
                    <div className="text-center">
                        <a className="btn btn-social-icon btn-google" href="http://google.com/+"><i className="fa fa-google-plus"></i></a>
                        <a className="btn btn-social-icon btn-facebook" href="https://www.facebook.com/profile.php?id=100070229032911"><i className="fa fa-facebook"></i></a>
                        <a className="btn btn-social-icon" href="mailto:tasteebite@yahoo.com"><i className="fa fa-envelope-o"></i></a>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-auto">
                    <p>© Copyright 2022</p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Footer;
