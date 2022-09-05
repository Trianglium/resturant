import React from 'react';
import './About.component.css';
// eslint-disable-next-line
import { Breadcrumb, BreadcrumbItem, Card, CardImg, Media } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Fade, Stagger } from 'react-animation-components';
import { Loading } from './Loading.component';
// eslint-disable-next-line
import { baseUrl } from '../shared/baseUrl';

function RenderLeader({leader, isLoading, errMess}) {
  if (isLoading) {
      return(
              <Loading />
      );
  }
  else if (errMess) {
      return(
              <h4>{errMess}</h4>
      );
  }
  else if (leader != null) {
      return(

        <div key={leader.id} className="col-3 mt-5">
          <Stagger in>
            <Media tag="li" className="list-unstyled">
              <Fade in>
                <div className="reviewer-quote-wrapper">
                    <div className="reviewer-quote">
                        <p className='lead'>
                        {leader.designation}
                        </p>
                        <h4>&mdash; {leader.name}<br /><em> {leader.designation}</em></h4>
                    </div>
                </div>
              </Fade>
              </Media>
          </Stagger>
        </div>
      );
    }
    else {
      return(
        <div></div>
      );
    }
}


const About = (props) => {
    const leaders = props.leaders.leaders.map((leader) => {
        return (
          <div className="col-3" key={leader.id}>
            <RenderLeader leader={leader} isLoading={props.leadersLoading} errMess={props.leadersErrMess} />
          </div>
        );
    });

    return(
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home" className="breadcrumb-link">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>About</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>About Us</h3>
                    <hr />
                </div>
            </div>
            <div className="row row-content">
            <div className="col-12 mb-4">
                <h2>Get in Touch</h2>
                </div>
                <div className='col-4'>
                  <i className="fa fa-phone fa-5x"></i>
                </div>
              <div className='col-4'>
                <i className="fa fa-envelope-o fa-5x"></i>
              </div>
              <div className='col-4'>
                <i className="fa fa-map-marker fa-5x"></i>
            </div>
            </div>
            <div className="row row-content">
                <div className="col-12 mb-4">
                <h2>Location Information</h2>
                </div>
                <div className="col-12 col-sm-4 offset-sm-1">
                        <h4>Our Address</h4>
                        <i className="fa fa-map-marker"></i> 7000 Burroughs Ave,<br />
                        Plano, Illinois. 60545<br />
                        <i className="fa fa-phone"></i><a href="tel:+6305520200">: (630) 552 0200</a><br />
                        <i className="fa fa-envelope"></i>: <a href="mailto:tasteebite@yahoo.com">tasteebite@yahoo.com</a>
                </div>
                <div className="col-12 col-sm-6 offset-sm-1 mb-2">
                    <h4>Map of our Location</h4>
                    <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d47697.561023106675!2d-88.566049!3d41.653634!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf310a31d074d580b!2sTastee%20Bite!5e0!3m2!1sen!2sus!4v1662395006091!5m2!1sen!2sus" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
            <div className="row row-content">
              <div className="col-12 mb-2">
                  <h2>Testimonials</h2>
              </div>
              {leaders}
            </div>
        </div>
    );
}

export default About;